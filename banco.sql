CREATE TABLE Categoria (
    categoria_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
);

CREATE TABLE Fornecedor (
    fornecedor_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    contato VARCHAR(100),
    telefone VARCHAR(11),
    email VARCHAR(100),
    endereco VARCHAR(255)
);

CREATE TABLE Produto (
    produto_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    marca VARCHAR(100),
    preco DECIMAL(8,2) NOT NULL,
    peso DECIMAL(8,2),
    categoria_id INT REFERENCES Categoria(categoria_id),
    fornecedor_id INT REFERENCES Fornecedor(fornecedor_id),
    saldo_atual INT NOT NULL DEFAULT 0,
    estoque_minimo INT NOT NULL DEFAULT 0
);

CREATE TABLE Movimentacao (
    movimentacao_id SERIAL PRIMARY KEY,
    produto_id INT REFERENCES Produto(produto_id) NOT NULL,
    data_operacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    quantidade INT NOT NULL,
    tipo_operacao VARCHAR(20) NOT NULL CHECK (tipo_operacao IN ('entrada', 'saída')),
    observacao TEXT
);
