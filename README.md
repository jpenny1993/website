# My development portfolio

This is a static site created with Hugo that will hopefully  advertise me and my experience to employers, without being a shoddy wordpress site that repeatedly becomes vulnerable overtime.

## Deployment status

[![Netlify Status](https://api.netlify.com/api/v1/badges/a18c0cb1-9d18-4466-bfbb-e4ed68feacc9/deploy-status)](https://app.netlify.com/sites/jpenny/deploys)

## Development dependencies

- Chocolatey (to install Hugo)
- Hugo (to build the website)
- NodeJs (for offline hosting during development)

### Installing Chocolatey

> I use Chocolatey on a regular basis, it is by no means required for installing Hugo.

Copy and paste the below command into an **administrative PowerShell terminal**.

See [Install Chocolatey for Individual Use](https://chocolatey.org/install) for up to date instructions.

```ps1
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### Installing Hugo

Copy and paste the below command into an **administrative PowerShell terminal**.

See [Install Hugo](https://gohugo.io/getting-started/installing) for up to date instructions.

```ps1
choco install hugo -confirm
```

### Installing NodeJS

> Jchip's fork of nvm allows you to install multiple versions of node and switch between then without requiring administrative rights (I've found this utility to be incredibly valuble when supporting multiple projects that were all developed using different node versions).

Copy and paste the below command into a **non-administrative PowerShell terminal**.

See [Install NVM](https://github.com/jchip/nvm) for up to date instructions.

```ps1
cd $Env:USERPROFILE;
Invoke-WebRequest https://raw.githubusercontent.com/jchip/nvm/v1.5.4/install.ps1 -OutFile install.ps1;
.\install.ps1 -nvmhome $Env:USERPROFILE\nvm;
del install.ps1
```

## Building the website

The below command builds the website using Hugo.

```ps1
cd <repo>
hugo
```

## Hosting locally for development

The below command runs the `index.js` file in node to host a crude http web server.

```ps1
cd <repo>
node index
```
