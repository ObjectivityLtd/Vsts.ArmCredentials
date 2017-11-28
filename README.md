# ARM Credentials - VSTS task extension
VSTS task for copying Azure endpoint credentials into secure variables that can be used by subsequent tasks

## Uploading task extension to VSTS account
Install [_tfx-cli_](https://www.npmjs.com/package/tfx-cli).

1. Download source code and open directory containing this source code in command line.

2. Execute npm install
```
npm install
```

3. Add new personal token to your VSTS here: https://youraccount.visualstudio.com/_details/security/tokens and save it for later

4. Go to the root directory of this repository, then build and upload task to VSTS account using command:
```
tfx build tasks upload --task-path .
```
Service URL will be probably: https://youraccount.visualstudio.com/DefaultCollection