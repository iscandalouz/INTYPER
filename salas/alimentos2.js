
/* =================================
*
*   Adicione novos desenhos aqui
*
* ==================================
*/

var alimentos = [
    'abacate', 'abacaxi', 'abiu', 'abobrinha', 'abricó', 'abóbora', 'abóbora jacarezinho', 'acarajé', 'acelga', 'acerola', 'achocolatado', 'adoçante', 'agrião', 'água', 'água com gás', 'água de coco', 'aguardente', 'aipim', 'aipo', 'alcachofra', 'alcaparra', 'alecrim', 'alface', 'alfajor', 'algodão doce', 'alho', 'alho-poró', 'almeirão', 'almôndega', 'alpiste', 'amaranto', 'ambrosia', 'ameixa', 'amendoim', 'amido de milho', 'amora', 'amêndoa', 'angu', 'araça', 'arroz', 'arroz doce', 'arroz integral', 'arroz tropeiro', 'asa de frango', 'aspargo', 'atemóia', 'aveia', 'avelã', 'azeite', 'azeitona', 'azeitona preta', 'açafrão', 'açaí', 'açúcar', 'açúcar mascavo', 'baba de moça', 'bacalhau', 'bacon', 'bacuri', 'baguete', 'bala', 'bala de coco', 'bala de goma', 'banana', 'banana split', 'banana-da-terra', 'banana-maçã', 'banana-nanica', 'banana-prata', 'bananada', 'barra de cereais', 'batata', 'batata baroa', 'batata frita', 'batata palha', 'batata-doce', 'batida', 'baunilha', 'bauru', 'beijinho', 'beirute', 'bengala doce', 'berinjela', 'bertalha', 'beterraba', 'bife', 'bife à milanesa', 'bife à parmegiana', 'biscoito', 'biscoito da sorte', 'bisteca', 'bobó de camarão', 'bolacha', 'bolinho de arroz', 'bolinho de bacalhau', 'bolinho de chuva', 'bolo', 'bolo de abacaxi', 'bolo de aipim', 'bolo de aniversário', 'bolo de café', 'bolo de caju', 'bolo de cajá', 'bolo de cenoura', 'bolo de chocolate', 'bolo de coco', 'bolo de fubá', 'bolo de kiwi', 'bolo de laranja', 'bolo de leite', 'bolo de limão', 'bolo de maracujá', 'bolo de morango', 'bolo de sorvete', 'bolo formigueiro', 'bolo mármore', 'bombom', 'brevidade', 'brigadeiro', 'brioche', 'broa', 'broto de feijão', 'brócolis', 'burritos', 'cabelo de anjo', 'cacau', 'cachaça', 'cachorro quente', 'café', 'café com leite', 'caipirinha', 'cajamanga', 'caju', 'cajuzinho', 'cajá', 'calabresa', 'caldo de cana', 'caldo de carne', 'caldo de galinha', 'caldo de mocotó', 'caldo verde', 'caldo-de-cana', 'caldo-de-feijão', 'camarão empanado', 'cambucá', 'camu-camu', 'cana-de-açúcar', 'canapé', 'canela', 'canelone', 'canjica', 'capelete', 'capim santo', 'cappuccino', 'capuccino', 'caqui', 'carambola', 'caramelo', 'carne', 'carne de sol', 'carne moída', 'caruru', 'casadinho', 'casquinha', 'casquinha de siri', 'castanha', 'caviar', 'cebola', 'cebola empanada', 'cebola roxa', 'cebolinha', 'cenoura', 'cereal', 'cereja', 'cerveja', 'champanhe', 'champignon', 'chantilly', 'charque', 'cheddar', 'cheesecake', 'cheiro verde', 'chester', 'chiclete', 'chicória', 'chimarrão', 'chimichurri', 'chocolate', 'chocolate amargo', 'chocolate branco', 'chocolate granulado', 'chocolate quente', 'chocotone', 'chopp', 'chuchu', 'chucrute', 'churrasco', 'churros', 'chá', 'chá de boldo', 'chá de camomila', 'chá de hortelã', 'chá gelado', 'chá mate', 'chá preto', 'chá verde', 'cidra', 'clara', 'cocada', 'cocada preta', 'coco', 'coentro', 'cogumelo conhaque', 'colorau', 'cominho', 'contra filé', 'cookies', 'coração de frango', 'coração de galinha', 'costela', 'couve', 'couve-de-bruxelas', 'couve-flor', 'coxa de frango', 'coxinha', 'cozido', 'cravo', 'creme de abóbora', 'creme de avelã', 'creme de leite', 'creme de milho', 'crepe', 'croissant', 'croquete', 'cupcake', 'curau', 'curry', 'cuscuz', 'damasco', 'dobradinha', 'doce de abacaxi', 'doce de abóbora', 'doce de banana', 'doce de caju', 'doce de coco', 'doce de figo', 'doce de jaca', 'doce de kiwi', 'doce de leite', 'doce de mamão', 'doce de manga', 'doce de morango', 'doce de pêssego', 'empada', 'empadão', 'endívia', 'energético', 'erva-doce', 'ervilha', 'escargot', 'escarola', 'esfirra', 'espetinho', 'espinafre', 'farinha', 'farofa', 'feijoada', 'feijão', 'feijão azuki', 'feijão branco', 'feijão fradinho', 'feijão manteiga', 'feijão preto', 'fermento', 'figo', 'filé', 'filé mignon', 'flan', 'fogazza', 'fondue', 'framboesa', 'frango', 'frango empanado', 'frango à parmegiana', 'frango à passarinho', 'frango-xadrez', 'fruta-do-conde', 'fruta-pão', 'fubá', 'funghi', 'gabiroba', 'ganache', 'garapa', 'gelatina', 'gelatina de morango', 'geleia', 'gema', 'gengibre', 'gergelim', 'glacê', 'goiaba', 'goiabada', 'gorgonzola', 'granola', 'graviola', 'groselha', 'grumixama', 'grão de bico', 'grão-de-bico', 'guacamole', 'guandu', 'guaraná', 'hambúrguer', 'hortelã', 'hóstia', 'ingá', 'inhame', 'iogurte', 'jabuticaba', 'jaca', 'jambo', 'jamelão', 'jataí', 'jatobá', 'jenipapo', 'jerimum', 'jiló', 'jujuba', 'kafta', 'ketchup', 'kiwi', 'laranja', 'lasanha', 'leite', 'leite condensado', 'leite de coco', 'leite de soja', 'leite em pó', 'lentilha', 'lichia', 'licor', 'lima', 'limonada', 'limão', 'linguiça', 'linhaça', 'lombo', 'louro', 'macadâmia', 'macarronada', 'macarrão', 'macarrão de arroz', 'macarrão instantâneo', 'maionese', 'maisena', 'malagueta', 'mamão', 'mandioca', 'mandioquinha', 'manga', 'mangaba', 'mangostão', 'manjar', 'manjericão', 'manteiga', 'maracujá', 'margarina', 'mariamole', 'marisco', 'marmelada', 'marshmallow', 'mate', 'maxixe', 'maçã', 'maçã do amor', 'maçã verde', 'mel', 'melancia', 'melão', 'menta', 'merengue', 'mexerica', 'milho', 'milkshake', 'mingau', 'mirtilo', 'misto quente', 'molho agridoce', 'molho barbecue', 'molho branco', 'molho de pimenta', 'molho de tomate', 'molho inglês', 'molho madeira', 'molho rosé', 'molho shoyu', 'molho tártaro', 'moranga', 'morango', 'mortadela', 'mostarda', 'mousse', 'mousse de chocolate', 'mousse de limão', 'mousse de maracujá', 'mousse de morango', 'muffin', 'muqueca', 'murici', 'mussarela', 'muçarela', 'músculo', 'nabo', 'nachos', 'nectarina', 'nhoque', 'noz-moscada', 'nozes', 'nuggets', 'nêspera', 'óleo', 'olho de sogra', 'omelete', 'orobô', 'orégano', 'ovo', 'ovo de codorna', 'ovo de páscoa', 'palha italiana', 'palmito', 'pamonha', 'panetone', 'panqueca', 'papo de anjo', 'parmesão', 'pasta de amendoim', 'pastel', 'pastel de belém', 'pastilha', 'patê', 'pavê', 'paçoca', 'peito de frango', 'peito de peru', 'pepino', 'pepperoni', 'pequi', 'pera', 'pernil', 'petit gateau', 'picanha', 'picles', 'picolé', 'pimenta', 'pimenta do reino', 'pimentão', 'pinha', 'pinhão', 'pipoca', 'pipoca doce', 'pirulito', 'pirão', 'pistache', 'pitanga', 'pitaya', 'pitomba', 'pizza', 'polenta', 'polvilho', 'presunto', 'profiteroles', 'provolone', 'pudim', 'pudim de pão', 'purê', 'pão', 'pão australiano', 'pão de alho', 'pão de batata', 'pão de forma', 'pão de ló', 'pão de mel', 'pão de queijo', 'pão doce', 'pão francês', 'pão integral', 'pão sírio', 'pé de galinha', 'pé-de-moleque', 'pêssego', 'queijadinha', 'queijo', 'queijo ralado', 'quentão', 'quiabo', 'quibe', 'quindim', 'quinoa', 'rabada', 'rabanada', 'rabanete', 'rapadura', 'ravioli', 'ração', 'refrigerante', 'repolho', 'repolho roxo', 'requeijão', 'ricota', 'risoles', 'rocambole', 'rolinho primavera', 'romã', 'rondele', 'rosbife', 'rosquinha', 'rum', 'rúcula', 'sagu', 'sal', 'sal grosso', 'salada', 'salada de frutas', 'salame', 'salgadinho', 'salpicão', 'salsa', 'salsicha', 'salsão', 'sanduíche', 'sapoti', 'saquê', 'sarapatel', 'sashimi', 'sequilho', 'siriguela', 'soja', 'sonho', 'sopa', 'sopa de legumes', 'sorvete', 'sorvete napolitano', 'strogonoff', 'suco', 'suco de abacaxi', 'suco de acerola', 'suco de goiaba', 'suco de graviola', 'suco de laranja', 'suco de limão', 'suco de maracujá', 'suco de maçã', 'suco de morango', 'suco de pitanga', 'suco de uva', 'suflê', 'sundae', 'sushi', 'suspiro', 'taco', 'talharim', 'tamarindo', 'tangerina', 'tapioca', 'temaki', 'tequila', 'tiramisu', 'tofu', 'tomate', 'tomate cereja', 'tomate seco', 'tomilho', 'torrada', 'torresmo', 'torrone', 'torta', 'torta de limão', 'torta de maracujá', 'torta de pêssego', 'tortilla', 'trigo', 'trufa', 'tâmara', 'umbu', 'urucum', 'uva', 'uva passa', 'uísque', 'vaca atolada', 'vagem', 'vatapá', 'vinagre', 'vinagrete', 'vinho', 'vinho branco', 'vitamina', 'vodca', 'waffles', 'wasabi', 'yakisoba'
];