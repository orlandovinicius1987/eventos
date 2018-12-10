## Eventos Alerj

### Instalar

##### Imagick (servidor + PHP)

```
sudo apt-get update
sudo apt-get install php-imagick
```

### Executar

```
composer install
composer migrate
php artisan horizon:terminate
php artisan config:cache
php artisan route:cache
php artisan horizon
php artisan websockets:serve
```

### Broadcasting
- Check if you are broadcasting (order.1) and listening (order.1) to the very same channel
- Check if the event name (OrderUpdated) is correct, double check them
- Check if the server is up and you can connect to it
- Execute `telnet <websockets server hostname or ip> 6001` to test the connection
- If you are using `ngrok` to test, you may have to change `echoConfig.wsHost = window.location.hostname` to your physical IP address
- `MIX_PUSHER_???` variables get cached weirdly, and sometimes reloading the page, config:clear, cache:clear, and whatever else is not enough, so:
- Config variable types are strict: `encrypted: 'true'` will raise errors, it must be `encrypted: true` or `encrypted: process.env.MIX_PUSHER_ENCRYPTED === 'true'` 
- When moving from Pusher to Laravel Websockets or after editing your .env: 
    - Delete app.js 
    - Re-run `npm run watch`, because only forcing a rerun doesn't work sometimes
- Don't forget to hard reload your browser tab just in case
 
### Exemplos

#### imagens

````
![convite]({site_url}/invitations/{uuid_convite}/received/images|invitations|2019-01-posse-governador.jpg)
```

#### Convite

```
{convidado_tratamento}
**{convidado_nome}**
{cargo}
{instituicao_nome}

![convite]({site_url}/images/invitations/2019-01-posse-governador.jpg)
#### CONVITE PESSOAL E INTRANSFERÍVEL
Em razão das limitadas acomodações é imprescindível a confirmação de presença, até o dia <u>10 de dezembro de 2019</u>, através dos botões abaixo, para que possamos emitir a sua Credencial de Acesso.

_Informamos que o envio de convites eletrônicos é parte de um conjunto de ações sustentáveis, em consonância com o Programa Agenda Ambiental da Alerj, que estimula a adoção de atitudes que levem ao uso racional dos recursos naturais e dos bens públicos._
```

#### Credencial

```
{convidado_tratamento}
**{convidado_nome}**
{cargo}
{instituicao_nome}
#### {evento_nome}
Agradecemos sua confirmação de presença para Posse dos Srs. Wilson Witzel e Claudio Castro, nos cargos de Governador e Vice-Governador do Estado do Rio de Janeiro.

Seguem endereço(s), intruções a respeito do traje, assim como sua(s) credencial(is) de acesso ao evento, que deverá(ão) ser apresentada(s) na tela do seu smartphone ou impressa, pra ingresso ao Palácio Tiradentes, sede da Assembleia Legislativa do Estado do Rio de Janeiro:
```

#### Agradecimento

```
{convidado_tratamento}
**{convidado_nome}**
{cargo}
{instituicao_nome}
#### {evento_nome}
Registramos e agradecemos a sua presença no evento de Posse dos Srs. Wilson Witzel e Claudio Castro, nos cargos de Governador e Vice-Governador do Estado do Rio de Janeiro. Tenha um bom evento e, caso necessite de alguma ajuda, por favor entre em contato com o pessoal indentificado como "Cerimonial".
```

#### Rejection

```
{convidado_tratamento}
**{convidado_nome}**
{cargo}
{instituicao_nome}
#### {evento_nome}
Registramos e sentimos muito que você não possa participar do evento de Posse dos Srs. Wilson Witzel e Claudio Castro, nos cargos de Governador e Vice-Governador do Estado do Rio de Janeiro. Caso mude de ideia, por favor entre em contato com o Cerimonial Alerj.
```
