* https://portal.azure.com/
* https://jt-function-test.azurewebsites.net/
* https://jt-function-test.scm.azurewebsites.net
* https://jt-function-test.azurewebsites.net/api/HttpTriggerJS1

Run Azure functions locally:
https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local

install dotnet 2.0 ->  https://github.com/dotnet/core/blob/master/release-notes/download-archives/2.0.0-download.md

```
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-xenial-prod xenial main" > /etc/apt/sources.list.d/dotnetdev.list'
sudo apt-get update
sudo apt-get install dotnet-sdk-2.0.0
```

install nvm
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

install node v8.9.4:
```
nvm install 8.9.4
```

run the damn thing:
```
func host start
```
