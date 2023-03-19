-- Active: 1679237081569@@127.0.0.1@3306

DROP TABLE `Competitions`;


CREATE TABLE 
Competitions (
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  modality TEXT NOT NULL,
  finished BOOLEAN DEFAULT false
);

-- CREATE TABLE 
-- Results (
--   id VARCHAR(64) TEXT PRIMARY KEY UNIQUE NOT NULL,
--   competition_id VARCHAR(64) NOT NULL,
--   FOREIGN KEY (competition_id) REFERENCES competicoes(id)
--   atleta VARCHAR(255) NOT NULL,
--   value REAL,
--   unidade TEXT,
-- );