## Next med entra id (azure ad) og next-auth
Dette er en enkel applikasjon som henter ut 'employeeId' for den innloggede.
Dersom man ikke er logget inn, blir man alltid redirectet til login-siden.


### \[...nextauth]/route.ts
Her er all logikken for hvordan man får tak i id_token, som inneholder 'employeeId'.
Først verifiseres tokenet, og deretter hentes 'employeeId' ut fra tokenet.

I session callbacken lagres denne verdien inn i et Session objekt som man senere kan få tak i med getServerSession() på serverside, eller getSession() på klientside.

### page.tsx
Her hentes en session ut med getServerSession, og denne session blir sendt med til Providers.

### Providers.tsx
Her tas session opp 