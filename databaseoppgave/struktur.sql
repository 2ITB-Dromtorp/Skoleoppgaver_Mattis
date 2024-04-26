CREATE TABLE Brukere (
    BrukerID INT AUTO_INCREMENT PRIMARY KEY,
    Brukernavn VARCHAR(50),
    Passord VARCHAR(50),
    Rolle ENUM('elev', 'lærer')
);

CREATE TABLE Elever (
    ElevID INT AUTO_INCREMENT PRIMARY KEY,
    BrukerID INT,
    Fornavn VARCHAR(50),
    Etternavn VARCHAR(50),
    Klasse VARCHAR(10),
    Kontaktinfo VARCHAR(100),
    FOREIGN KEY (BrukerID) REFERENCES Brukere(BrukerID)
);


CREATE TABLE Lærere (
    LærerID INT AUTO_INCREMENT PRIMARY KEY,
    BrukerID INT,
    Fornavn VARCHAR(50),
    Etternavn VARCHAR(50),
    FOREIGN KEY (BrukerID) REFERENCES Brukere(BrukerID)
);

CREATE TABLE Utstyr (
    UtstyrsID INT AUTO_INCREMENT PRIMARY KEY,
    Type VARCHAR(50),
    Spesifikasjoner TEXT
);

CREATE TABLE Utlån (
    UtlånsID INT AUTO_INCREMENT PRIMARY KEY,
    BrukerID INT,
    UtstyrsID INT,
    Utlånsdato DATE,
    Innleveringsdato DATE,
    Godkjent ENUM('Ja', 'Nei'),
    FOREIGN KEY (BrukerID) REFERENCES Brukere(BrukerID),
    FOREIGN KEY (UtstyrsID) REFERENCES Utstyr(UtstyrsID)
);