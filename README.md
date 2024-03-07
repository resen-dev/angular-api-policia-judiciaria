# Teste Angular - Lista de Pessoas Desaparecidas

## Objetivo 
Criar um aplicativo Angular que exibe uma lista de pessoas desaparecidas usando a API fornecida. A Polícia Judiciária Civil de Mato Grosso oferece acesso ao cidadão uma API de pessoas desaparecidas. Para este teste você deverá implementar uma aplicação que possibilita consultar dados dessas pessoas desaparecidas bem como enviar eventuais informações sobre elas

## Requisitos

Configurar um novo projeto Angular usando o Angular CLI.

Usar a API fornecida (https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro?faixaIdadeFinal=0&faixaIdadeInicial=0&nome=&porPagina=12&sexo=&status=DESAPARECIDO&pagina=0) para buscar os dados das pessoas desaparecidas.

Exibir os dados da API em uma lista na página. Cada item da lista deve conter pelo menos as seguintes informações: nome, idade, sexo e uma foto, se disponível.

Implementar uma seção de pesquisa que permite ao usuário filtrar a lista de pessoas desaparecidas por nome, idade e sexo.

Paginar os resultados para exibir 12 pessoas por página.

Ao clicar em um item da lista, o usuário deve ser redirecionado para uma página de detalhes que exibe informações detalhadas da pessoa desaparecida. API:(https://abitus-api.pjc.mt.gov.br/v1/pessoas/${idPessoa})

Possibilitar o compartilhamento dessa informação com mídias sociais como Facebook, Instagram, Whatsapp e outras que julgar oportuno.
