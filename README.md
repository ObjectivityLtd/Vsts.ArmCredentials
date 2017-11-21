# ARM Credentials - VSTS task extension
VSTS task for copying Azure endpoint credentials into secure variables that can be used by subsequent tasks

## Uploading task extension to VSTS account
Install [_tfx-cli_](https://www.npmjs.com/package/tfx-cli).

Login to your VSTS account using commnad ``tfx login``.

Go to the root directory of this repository, then build and upload task to VSTS account using command:
```
tfx build tasks upload --task-path .
```