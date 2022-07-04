# Website

My personal portfolio...

# Prerequisites

## Installing Chocolatey

See [Install Chocolatey for Individual Use](https://chocolatey.org/install) for up to date instructions.

Requires an Administrative PowerShell terminal

```ps1
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Installing Hugo

See [Install Hugo](https://gohugo.io/getting-started/installing) for up to date instructions.

Requires an Administrative PowerShell terminal

```ps1
choco install hugo -confirm
```

## Installing NodeJS

See [Install NVM](https://github.com/jchip/nvm) for up to date instructions.

```ps1
cd $Env:USERPROFILE;
Invoke-WebRequest https://raw.githubusercontent.com/jchip/nvm/v1.5.4/install.ps1 -OutFile install.ps1;
.\install.ps1 -nvmhome $Env:USERPROFILE\nvm;
del install.ps1
```

# Building the website

```ps1
cd <repo>
hugo
```

# Hosting locally for development

```ps1
cd <repo>
node index
```