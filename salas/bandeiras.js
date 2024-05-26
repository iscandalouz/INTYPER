
/* =================================
*
*   Adicione novos desenhos aqui
*
* ==================================
*/

var bandeiras = [
    'Nova Iorque', 'Ilhas Pitcairn', 'Texas', 'San Andrés e Providência', 'Turcomenistão', 'Varsóvia', 'Hong Kong', 'Roma', 'Iesoto', 'Irã', 'Omã', 'Acre', 'Cuba', 'Fiji', 'Gana', 'Guam', 'Laos', 'Mali', 'Niue', 'Pará', 'Peru', 'Saba', 'Togo', 'Amapá', 'Aruba', 'Bahia', 'Belém', 'Benin', 'Butão', 'Ceará', 'Ceuta', 'Chade', 'Chile', 'China', 'Congo', 'Egito', 'Gabão', 'Goiás', 'Guiné', 'Haiti', 'Havaí', 'Iêmen', 'Japão', 'Líbia', 'Macau', 'Malta', 'Natal', 'Nauru', 'Nepal', 'Niger', 'Palau', 'Piauí', 'Qatar', 'Síria', 'Sudão', 'Suíça', 'Tonga', 'Zaire', 'Açores', 'Alasca', 'Angola', 'Azawad', 'Belize', 'Bósnia', 'Brasil', 'Brunei', 'Canadá', 'Ceilão', 'Chipre', 'Cuiabá', 'França', 'Gâmbia', 'Grécia', 'Guiana', 'Índia', 'Iraque', 'Israel', 'Itália', 'Jersey', 'Kosovo', 'Kuwait', 'Lesoto', 'Líbano', 'Macapá', 'Maceió', 'Madrid', 'Malaui', 'Manaus', 'México', 'Midway', 'Mônaco', 'Palmas', 'Panamá', 'Paraná', 'Quebec', 'Quênia', 'Recife', 'Rússia', 'Samoa', 'Sérvia', 'Suécia', 'Taiwan', 'Tuvalu', 'Uganda', 'Vietnã', 'Zâmbia', 'Alagoas', 'Albânia', 'Andorra', 'Aracaju', 'Argélia', 'Armênia', 'Áustria', 'Bahamas', 'Bahrein', 'Bélgica', 'Bolívia', 'Bonaire', 'Burundi', 'Camboja', 'Comores', 'Córsega', 'Croácia', 'Curaçao', 'Djibuti', 'Equador', 'Escócia', 'Espanha', 'Estônia', 'Etiópia', 'Euskadi', 'Galícia', 'Gambier', 'Geórgia', 'Goiânia', 'Granada', 'Holanda', 'Hungria', 'Irlanda', 'Jamaica', 'Letônia', 'Libéria', 'Madeira', 'Malásia', 'Mayotte', 'Myanmar', 'Namíbia', 'Nigéria', 'Noruega', 'Paraíba', 'Polônia', 'Prússia', 'Reunion', 'Rodésia', 'Romênia', 'Roraima', 'Ruwanda', 'São Luís', 'Senegal', 'Sergipe', 'Sicília', 'Somália', 'Tokelau', 'Tuamotu', 'Tunísia', 'Turquia', 'Ucrânia', 'Uruguai', 'Vanuatu', 'Vitória', 'Abecásia', 'Alderney', 'Alemanha', 'Amazonas', 'Amsterdã', 'Andaluzia', 'Anguilla', 'Baleares', 'Barbados', 'Barcelona', 'Bermudas', 'Birmânia', 'Botsuana', 'Bulgária', 'Camarões', 'Catalunha', 'Colômbia', 'Curitiba', 'Dominica', 'Eritréia', 'Guernsey', 'Honduras', 'Ilha Wake', 'Islândia', 'Jan Mayen', 'Jordânia', 'Kiribati', 'Lituânia', 'Maldivas', 'Maranhão', 'Marrocos', 'Maurício', 'Moldávia', 'Mongólia', 'Paraguai', 'Portugal', 'Rio Branco', 'Rondônia', 'Salvador', 'São Paulo', 'Sardenha', 'Sri Lanka', 'Suriname', 'Svalbard', 'Tanzânia', 'Tasmânia', 'Teresina', 'Vaticano', 'Zanzibar', 'Zimbábue', 'Antuérpia', 'Argentina', 'Austrália', 'Boa Vista', 'Cabo Verde', 'Chechênia', 'Cingapura', 'Costa Rica', 'Dinamarca', 'Eslovênia', 'Filipinas', 'Finlândia', 'Fortaleza', 'Gibraltar', 'Guadalupe', 'Guatemala', 'Hong-Kong', 'Ilha de Man', 'Ilhas Cook', 'Indonésia', 'Lombardia', 'Macedônia', 'Martinica', 'Nicarágua', 'País Basco', 'Palestina', 'Paquistão', 'Porto Rico', 'San Marino', 'Tailândia', 'Tanganica', 'Tocantins', 'Venezuela', 'Azerbaijão', 'Bangladesh', 'El Salvador', 'Eslováquia', 'Ilhas Aland', 'Ilhas Cocos', 'Ilhas Faroe', 'Inglaterra', 'Inguchétia', 'Iugoslávia', 'Luxemburgo', 'Madagascar', 'Mato Grosso', 'Mauritânia', 'Micronésia', 'Moçambique', 'Montenegro', 'Montserrat', 'Pernambuco', 'Porto Velho', 'Quirguízia', 'Reino Unido', 'Santa Lúcia', 'Serra Leoa', 'Seychelles', 'Afeganistão', 'África do Sul', 'Burkina Faso', 'Campo Grande', 'Cazaquistão', 'coreia do Sul', 'Groenlândia', 'Ilha del Coco', 'Ilha Malpelo', 'Ilha Navassa', 'Ilhas Cayman', 'João Pessoa', 'Minas Gerais', 'País de Gales', 'Pluntlândia', 'Porto Alegre', 'Santa Helena', 'São Martinho', 'Saint Martin', 'Suazilândia', 'Timor-Leste', 'Uzbequistão', 'Atol de Bikini', 'Bielorrússia', 'Guiné-Bissau', 'Ilha de Páscoa', 'Ilhas Austrais', 'Ilhas Norfolk', 'Ilhas Salomão', 'Nueva Esparta', 'Ossétia do Sul', 'Rio de Janeiro', 'Somalilândia', 'Tadjiquistão', 'Transnístria', 'Turks e Caicos', 'Arábia Saudita', 'Atol de Palmyra', 'Belo Horizonte', 'coreia do Norte', 'Costa do Marfim', 'Espírito Santo', 'Estados Unidos', 'Florianópolis', 'Ilha Christmas', 'Ilha Lorde Howe', 'Ilhas Malvinas', 'Ilhas Marianas', 'Ilhas Marshall', 'Liechtenstein', 'Nova Caledônia', 'Nova Zelândia', 'Santa Catarina', 'São Bartolomeu', 'Sint Eustatius', 'União Européia', 'Wallis e Futuna', 'Emirados Árabes', 'Guiana Francesa', 'Ilhas Galápagos', 'Ilhas Marquesas', 'Irlanda do Norte', 'Rio Grande do Sul', 'Samoa Americana', 'Tristão da Cunha', 'Antígua e Barbuda', 'Carolina do Sul', 'Guiné Equatorial', 'Ilha da Sociedade', 'Mato Grosso do Sul', 'Papua Nova-Guiné', 'República Tcheca', 'Saara-Ocidental', 'Tchecoslováquia', 'Trinidad e Tobago', 'Nargono-Karabakh', 'Rio Grande do Norte', 'São Tomé e Príncipe', 'Polinésia Francesa', 'Antilhas Holandesas', 'Ilhas Geórgias do Sul', 'São Cristóvão e Névis', 'República Dominicana', 'Ilhas Marianas do Norte', 'Saint Pierre e Miquelon', 'República do Sudão do Sul', 'São Vicente e Granadinas', 'Ilhas Virgens Americanas', 'Ilhas Virgens Britânicas', 'República Centro-Africana', 'República Democrática alemã', 'Território Ártico Britânico', 'República Democrática do Congo', 'República Turca do Chipre do Norte', 'Território Britânico do Oceano Índico'
];