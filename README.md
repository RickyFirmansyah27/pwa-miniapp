# OJT DAnS Multi Pro - React Redux MiniApp

### Install Package
#### Instalasi semua package yang diperlukan dalam menjalankan miniapp
```bash
npm install
```


### Run
#### Ada dua command yang harus di run  yaitu:
```bash
npm start
```
```bash
json-server -w db.json -p 5000
```
---------
#### Note
instalasi pada json-server menyertakan global install
```bash
npm install -g json-server
```

---------
port yang digunakan adalah localhost:5000 dengan API palsu untuk fetch data Userlist

```bash
{
  "userlist": [
    {
      "id": "1",
      "username": "Ricky Firmansyah",
      "role": "ceo"
    },
    {
      "id": "2",
      "username": "Admin React",
      "role": "admin"
    },
    {
      "id": "3",
      "username": "React Redux",
      "role": "user"
    }
  ]
}
```

#### Endpoint
```bash
localhost:5000/userlist
```
