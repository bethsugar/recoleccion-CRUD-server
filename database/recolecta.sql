-- Nota: Agregar más adelante geolocalización
-- para rastrear la recolección

---------------------------------------------------------------------
CREATE DATABASE recolecta;

USE recolecta;

---------------------------------------------------------------------
-- Tabla usuario (camioneros y admins)

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

---------------------------------------------------------------------
-- Tabla de Productor

CREATE TABLE productor (
    id INT(11) NOT NULL,
    prodname VARCHAR(30) NOT NULL,
    document INT(8),
    phone INT(11),
    prod_address VARCHAR(40)
);

ALTER TABLE productor
    ADD PRIMARY KEY (id);

ALTER TABLE productor
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE productor;

---------------------------------------------------------------------
-- Tabla de Recolección

CREATE TABLE recolection (
    rec_id INT(11) NOT NULL,
    prod_id INT(11),
    user_id INT(11),
    ruler INT(4) NOT NULL,
    volume INT(6) NOT NULL,
    temperature INT(2) NOT NULL,
    frasco INT(2) NOT NULL,
    observation TEXT,
    rec_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_prod FOREIGN KEY (prod_id) REFERENCES productor(id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE recolection
    ADD PRIMARY KEY (rec_id);

ALTER TABLE recolection
    MODIFY rec_id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

---------------------------------------------------------------------
-- Tabla de justificativo de no colecta

CREATE TABLE justificativo (
    just_id INT(11) NOT NULL,
    prod_id INT(11), 
    user_id INT(11),
    reason VARCHAR(22) NOT NULL,
    observation TEXT,
    just_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT prod_fk FOREIGN KEY (prod_id) REFERENCES productor(id),
    CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE justificativo
    ADD PRIMARY KEY (just_id);

ALTER TABLE justificativo
    MODIFY just_id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

---------------------------------------------------------------------
-- Tabla de resumen