const fs = require('fs');

const packageJsonPath = 'package.json';

async function getLatestVersion(packageName) {
    try {
        const response = await fetch(`https://registry.npmjs.org/${packageName}`, {
            method: "GET",
        });
        const data = await response.json();

        return data['dist-tags'].latest;
    } catch (error) {
        console.error(`Error fetching version for package ${packageName}:`, error);
        return null;
    }
}

async function updatePackageVersions(filePath) {
    const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const dependencies = packageJson.dependencies;
    const devDependencies = packageJson.devDependencies || {};
    const updatedPackages = {};

    for (const [pkg, currentVersion] of Object.entries(dependencies)) {
        const latestVersion = await getLatestVersion(pkg);
        if (latestVersion && currentVersion !== latestVersion) {
            updatedPackages[pkg] = { currentVersion, latestVersion };
            dependencies[pkg] = latestVersion;
        }
    }

    for (const [pkg, currentVersion] of Object.entries(devDependencies)) {
        const latestVersion = await getLatestVersion(pkg);
        if (latestVersion && currentVersion !== latestVersion) {
            updatedPackages[pkg] = { currentVersion, latestVersion };
            devDependencies[pkg] = latestVersion;
        }
    }

    if (Object.keys(updatedPackages).length > 0) {
        fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2));
        return updatedPackages;
    } else {
        return null;
    }
}

updatePackageVersions(packageJsonPath)
    .then(updatedPackages => {
        if (updatedPackages) {
            console.log('Updated Packages:');
            for (const [pkg, versions] of Object.entries(updatedPackages)) {
                console.log(`${pkg}: ${versions.currentVersion} -> ${versions.latestVersion}`);
            }
        } else {
            console.log('No packages were updated.');
        }
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
