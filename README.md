Projeto criado na lista de aulas sobre Laravel 11 + Breeze + React.<br>
No projeto, são desenvolvidas a página de login e o CRUD completo, com a criação das seguintes páginas:<br>
* C - Create: formulário para cadastrar registro no banco de dados;
* R - Read: listar os registros do banco de dados;
* U - Update: formulário para editar registro no banco de dados;
* D - Delete: excluir registro no banco de dados.

## Requisitos

* PHP 8.2 ou superior;
* MySQL 8 ou superior;
* Composer;
* Node.js 20 ou superior;

## Como rodar o projeto baixado

Duplicar o arquivo ".env.example" e renomear para ".env".<br>
Alterar no arquivo .env as credenciais do banco de dados.<br>

Instalar as dependências do PHP.
```
composer install
```

Instalar as dependências do Node.js.
```
npm install
```

Gerar a chave.
```
php artisan key:generate
```

Executar as migration para criar a base de dados e as tabelas.
```
php artisan migrate
```

Executar as seed para cadastar o usuário teste no banco de dados.
```
php artisan db:seed
```

Iniciar o projeto criado com Laravel.
```
php artisan serve
```

Executar as bibliotecas Node.js.
```
npm run dev
```

Acessar no navegador a URL com o conteúdo padrão do Laravel.
```
http://127.0.0.1:8000
```

Usuário: cesar@celke.com.br<br>
Senha: 123456a<br>


## Sequencia para criar o projeto
Criar o projeto com Laravel
```
composer create-project laravel/laravel .
```

Instalar o breeze.
```
composer require laravel/breeze --dev
```

Publicar a autenticação, rotas, controladores e outros recursos para a aplicação.
```
php artisan breeze:install
```

Executar as migration para criar a base de dados e as tabelas.
```
php artisan migrate
```

Criar Seed.
```
php artisan make:seeder UserSeeder
```

Executar as seed para cadastar o usuário teste no banco de dados.
```
php artisan db:seed
```

Instalar as dependências do Node.js.
```
npm install
```

Executar as bibliotecas Node.js.
```
npm run dev
```