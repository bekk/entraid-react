## Next med entra id (azure ad) og next-auth
Dette er en enkel applikasjon som henter ut 'employeeId' for den innloggede.
Dersom man ikke er logget inn, blir man alltid redirectet til login-siden.
NB: sett opp environment variabler som kan sees nederst i README.md


### \[...nextauth]/route.ts
Her er all logikken for hvordan man får tak i id_token, som inneholder 'employeeId'.

##### jwt callback
Først verifiseres tokenet, og deretter hentes 'employeeId' ut fra tokenet.

##### session callback
I session callbacken lagres employeeid som ble hentet ut i jwt callback inn i et Session objekt som man senere kan få tak i med getServerSession() på serverside, eller getSession() på klientside.

### app/page.tsx
Her hentes en session ut med getServerSession, og denne session blir sendt med til Providers.

### Providers.tsx
Her sender man session til SessionProvider, som man da senere kan hente ut med useSession.

### info/page.tsx
Her demonstreres at det er mulig å hente en session med useSession()


### .env.local
Man må også ha følgende environment variabler
```.env
#Entra ID
AZURE_AD_CLIENT_ID=
AZURE_AD_TENANT_ID=
AZURE_AD_CLIENT_SECRET=

#NextAuth
NEXTAUTH_URL=
NEXTAUTH_SECRET=
```