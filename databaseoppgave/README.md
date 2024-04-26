Brukere

BrukerID (primærnøkkel)
Brukernavn
Passord
Rolle (elev/lærer)

Elever

ElevID (primærnøkkel, fremmednøkkel til Brukere)
Fornavn
Etternavn
Klasse (IM, 2MP, 2ITA)
Kontaktinfo (for pårørende, telefonnummer, osv.)

Lærere

LærerID (primærnøkkel, fremmednøkkel til Brukere)
Fornavn
Etternavn
Utstyr

UtstyrsID (primærnøkkel)
Type (fotokamera, videokamera, VR-kamera, router, ethernet-kabel, laptop, podkast-opptaker)
Spesifikasjoner

Utlån

UtlånsID (primærnøkkel)
BrukerID (fremmednøkkel til Brukere)
UtstyrsID (fremmednøkkel til Utstyr)
Utlånsdato
Innleveringsdato
Godkjent (Ja/Nei)