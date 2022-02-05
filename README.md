<h1>Desafio Sparta Labs</h1>

<p><b>App de Previsão do Tempo:</b>

Precisamos de um protótipo de um app para previsão do tempo. Esse protótipo é inicialmente destinado ao mercado nacional.
Como fonte dos dados de clima, recomendamos usar os serviços da OpenWeatherMap por ser gratuito e público. Você pode ver mais sobre criar uma conta e obter uma chave de API aqui. Mas fique a vontade para usar outros provedores (aqui tem alguns).
A ideia inicial é exibir uma lista com as cidades adicionadas pelo usuário e também permitir que o usuário busque e adicione novas cidades.
A lista principal deve exibir as cidades e sua respectiva condição climática atual. Ao tocar em uma cidade, o usuário será levado para a tela de detalhe da cidade, onde é exibida a previsão do tempo para os próximos dias.
Para buscar as cidades você também pode usar um provedor (o OpenWeatherMap meio que não serve para isso), nós recomendamos a Google Places API, mas existem outras APIs com essa finalidade.

É importante que as cidades adicionadas sejam persistidas entre sessões de uso da aplicação.
</p>

<h2>Screens</h2>
<img src="https://user-images.githubusercontent.com/69401421/152655072-adc1c408-6b71-4f32-86cb-1858bb521d2b.png" width='200px'/>
<p>
  A primeira tela mostra o clima atual de acordo com as coordenadas adquiridas no seu smatphone. Foram utilizadas OpenWeatherMap para a capitura da latitude e longitude e a expo-location.
</p>
<img src="https://user-images.githubusercontent.com/69401421/152655395-37567206-0e37-4ec3-9365-61cb5192e5bc.png" width='200px'/>
<p>
  A segunda tela mostra os climas buscados pelo usuário. Neles o usuário poderá selecionar qual estará na tela principal e mostrará detalhes do clima atual e futuros.
</p>
