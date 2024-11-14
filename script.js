let map;
let desfibriladores = [
    {
        nome: "ESF Centro",
        cidade: "Montes Claros",
        rua: "Rua Gabriel Passos",
        lat: -16.722384856963323,
        lng: -43.87047340348776,
        número: "53",
        bairro: "Centro",
        informacoes: " ",
    },
    {
        nome: "ESF Alcides Rabelo",
        cidade: "Montes Claros",
        rua: "Geovane Fagundes de Souza",
        lat: -16.706938344920705,
        lng: -43.84284344766387,
        número: "199",
        bairro: "Alcides Rabelo",
        informacoes: " ",
    },
    {
        nome: "ESF Maracanã",
        cidade: "Montes Claros",
        rua: "Av. Brasília",
        lat: -16.760797455264008,
        lng: -43.86547617793306,
        número: "724",
        bairro: "Maracanã",
        informacoes: " ",
    },
    {
        nome: "ESF Acácias",
        cidade: "Montes Claros",
        rua: "Al. Quita Guimarães",
        lat: -16.72393210858946,
        lng: -43.82205775931207,
        número: "105",
        bairro: "Acácias",
        informacoes: " ",
    },
    {
        nome: "ESF Acácias",
        rua: "Professor João Câmara",
        lat: -16.76140062894282,
        lng: -43.88501041721061,
        número: "111",
        bairro: "Morada do Parque",
        informacoes: " ",
    },
    {
        nome: "ESF Alto São João",
        cidade: "Montes Claros",
        rua: "João Teixeira Bastos",
        lat: -16.713220747592203,
        lng: -43.85688298999357,
        número: "114",
        bairro: "Alto São João",
        informacoes: " ",
    },
    {
        nome: "ESF Monte Carmelo",
        cidade: "Montes Claros",
        rua: "Platina",
        lat: -16.725150203885043,
        lng: -43.84073573079211,
        número: "22",
        bairro: "Monte Carmelo II",
        informacoes: " ",
    },
    {
        nome: "ESF Antônio Pimenta",
        cidade: "Montes Claros",
        rua: "R. Rosa Mendes Ferreira",
        lat: -16.744154914330938,
        lng: -43.85489171453124,
        número: "336",
        bairro: "Antônio Pimenta",
        informacoes: " ",
    },
    {
        nome: "ESF Monte Sião",
        rua: "Rua E",
        lat: -16.671276438328448,
        lng: -43.84009673402383,
        número: "29",
        bairro: "Monte Sião",
        informacoes: " ",
    },
    {
        nome: "ESF Morrinhos",
        rua: "Melo Viana",
        lat: -16.73286794580235,
        lng: -43.863956946841995,
        número: "550",
        bairro: "Morrinhos",
        informacoes: " ",
    },
    {
        nome: "ESF Aparecida do Mundo Novo",
        cidade: "Montes Claros",
        rua: "R. Montes Claros",
        lat: -16.11521536002897,
        lng: -43.926549180203686,
        número: "S/N",
        bairro: "Aparecida do Mundo Novo",
        informacoes: " ",
    },
    {
        nome: "ESF Nova Esperança",
        cidade: "Montes Claros",
        rua: "Av. Joaquim de Abreu",
        lat: -16.5828196589527,
        lng: -43.937767513490996,
        número: "245",
        bairro: "Nova Esperança",
        informacoes: " ",
    },
    {
        nome: "ESF Bela Paisagem",
        rua: "R. Geraldino Machado",
        lat: -16.696439336454564,
        lng: -43.8724102611586,
        número: "946",
        bairro: "Santos Reis",
        informacoes: " ",
    },
    {
        nome: "ESF Nova Suíça",
        cidade: "Montes Claros",
        rua: "Itália",
        lat: -16.723771033411193,
        lng: -43.809578903331804,
        número: "1055",
        bairro: "Nova Suíça",
        informacoes: " ",
    },
    {
        nome: "ESF Novo Delfino",
        cidade: "Montes Claros",
        rua: "Rua 35",
        lat: -16.738802382141493,
        lng: -43.83039357099879,
        número: "39",
        bairro: "Novo Delfino",
        informacoes: " ",
    },
    {
        nome: "ESF Bela Vista",
        cidade: "Montes Claros",
        rua: "R. Quincas Souto",
        lat: -16.702672436811742,
        lng: -43.877786059312555,
        número: "1420",
        bairro: "Vila Atlantida",
        informacoes: " ",
    },
    {
        nome: "ESF Pérola",
        cidade: "Montes Claros",
        rua: "Santa Lúcia",
        lat: -16.719131028915378,
        lng: -43.87355983216842,
        número: "471",
        bairro: "Todos os Santos",
        informacoes: " ",
    },
    {
        nome: "ESF Planalto",
        cidade: "Montes Claros",
        rua: "Divíno Espírito Santo",
        lat: -16.694885980124944,
        lng: -43.83578446751742,
        número: "389",
        bairro: "Planalto",
        informacoes: " ",
    },
    {
        nome: "ESF Planalto",
        cidade: "Montes Claros",
        bairro: "Planalto",
        rua: "Divíno Espírito Santo",
        numero: 389,
        latitude: -43.83578446751742,
        longitude: -16.694885980124944
},
{
        nome: "ESF Planalto II",
        cidade: "Montes Claros",
        bairro: "Planalto",
        rua: "Rua Dois",
        numero: "150B",
        latitude: -43.84029088799025,
        longitude: -16.69564577669369,
        informacoes: " "
    },
    {
        nome: "ESF Recanto das Águas",
        cidade: "Montes Claros",
        bairro: "São Lucas",
        rua: "Rua H",
        numero: 32,
        latitude: -43.83055208984213,
        longitude: -16.670061137284932,
        informacoes: " "
    },
    {
        nome: "ESF Planalto Rural",
        cidade: "Montes Claros",
        bairro: "Zona Rural",
        rua: "BR 135, KM 384",
        numero: "",
        latitude: -43.8680347516512,
        longitude: -16.89580092030823,
        informacoes: " "
    },
    {
        nome: "ESF Campos Eliseos",
        cidade: "Montes Claros",
        bairro: "Jardim Alegre (Facela)",
        rua: "Rua F",
        numero: "590",
        latitude: null,
        longitude: null
    },
    {
        nome: "ESF Renascença",
        cidade: "Montes Claros",
        bairro: "Renascença",
        rua: "Av. Bio Lopes",
        numero: 1272,
        latitude: -43.85164009962359,
        longitude: -16.698506790906904,
        informacoes: " "
    },
    {
        nome: "ESF Canto do Engenho",
        cidade: "Montes Claros",
        bairro: "São Geraldo II",
        rua: "R. Eurico Leite Fonseca",
        numero: 181,
        latitude: -43.882811974651084,
        longitude: -16.795475704946647,
        informacoes: " "
    },
    {
        nome: "ESF Carmelo",
        cidade: "Montes Claros",
        bairro: "Carmelo",
        rua: "R. Lagoa Carajás",
        numero: 500,
        latitude: -43.82848230341349,
        longitude: -16.721646786784227,
        informacoes: " "
    },
    {
        nome: "ESF Carmelo II",
        cidade: "Montes Claros",
        bairro: "Carmelo",
        rua: "R. Lagoa do Abaeté",
        numero: 101,
        latitude: 43.831545459533565,
        longitude: -16.720204748641933,
        informacoes: " "
    },
    {
        nome: "ESF Samambaia",
        bairro: "Vila Nova de Minas",
        rua: "Av. Montes Claros",
        numero: 58,
        latitude: -43.84593837294826,
        longitude: -16.77777014942447,
    },
    {
        nome: "ESF Chiquinho Guimarães",
        cidade: "Montes Claros",
        bairro: "São Geraldo",
        rua: "R. Pirajuí",
        numero: 118,
        latitude: -43.87623341882792,
        longitude: -16.75293044750174,
        informacoes: " "
    },
    {
        nome: "ESF Santa Bárbara",
        cidade: "Montes Claros",
        bairro: "Santa Bárbara",
        rua: "BR 365, KM 10",
        numero: "",
        latitude: null,
        longitude: null
    },
    {
        nome: "ESF Santa Lúcia I",
        cidade: "Montes Claros",
        bairro: "Santa Lúcia",
        rua: "Olivina",
        numero: 240,
        latitude: -43.810577119933264,
        longitude: -16.60047222723481,
        informacoes: " "
    },
    {
        nome: "ESF Cidade Cristo Rei",
        cidade: "Montes Claros",
        bairro: "Alto São João",
        rua: "R. Juiz de Fora",
        numero: 115,
        latitude: -43.852073056249026,
        longitude: -16.71670677542692
    },
    { 
        nome: "ESF Santa Rafaela",
        cidade: "Montes Claros",
        bairro: "Santa Rafaela",
        rua: "Vicente Silva",
        numero: 160,
        latitude: -43.851088516821875,
        longitude: -16.766914502570145
    },
    {
        nome: "ESF Cidade Industrial",
        cidade: "Montes Claros",
        bairro: "Cidade Industrial",
        rua: "R. Quarenta e Três",
        numero: 210,
        latitude: -43.85433173232435,
        longitude: -16.668997204251085,
        informacoes: " "
    },
    { 
        nome: "ESF Cintra",
        cidade: "Montes Claros",
        bairro: "Santa Rita I",
        rua: "R. Monte Plano",
        numero: 892,
        latitude: -43.85263588486187,
        longitude: -16.732857462253246
    },
    {
        nome: "ESF Santa Rosa de Lima",
        cidade: "Montes Claros",
        bairro: "Santa Rosa de Lima",
        rua: "Praça Bom Jesus",
        numero: "S/N",
        latitude: -43.835403148284986,
        longitude: -16.74500171268058
    },
    {
        nome: "ESF Santo Antônio I",
        cidade: "Montes Claros",
        bairro: "Delfino Magalhães",
        endereco: "Av. Olímpio Magalhães",
        numero: 756,
        latitude: -43.83871127449513,
        longitude: -16.74236182158399,
        informacoes: " "
    },
    {
        nome: "ESF Cintra I e II",
        cidade: "Montes Claros",
        bairro: "Cintra",
        endereco: "R. Cônego Marcos",
        numero: 744,
        latitude: -43.84773397688929,
        longitude: -16.73105640228979
    },
    {
        nome: "ESF Conjunto Vitória",
        cidade: "Montes Claros",
        bairro: "Conjunto Vitória II",
        endereco: "R. Dezessete",
        numero: 350,
        latitude: -43.83877774581695,
        longitude: -16.751718066427514,
        informacoes: " "
    },
    {
        nome: "ESF Delfino Magalhães",
        cidade: "Montes Claros",
        bairro: "Delfino Magalhães",
        endereco: "Av. Neco Delfino",
        numero: 253,
        latitude: -43.83834864228815,
        longitude: -16.736946449292763,
        informacoes: " "
    },
    {
        nome: "ESF Santo Antônio II",
        cidade: "Montes Claros",
        bairro: "Santo Antônio II",
        endereco: "Raimundo Wanderlei",
        numero: 42,
        latitude: -43.843505568744824,
        longitude: -16.746124673988383,
        informacoes: " "
    },
    {
        nome: "ESF Santos Reis",
        cidade: "Montes Claros",
        bairro: "Santos Reis",
        endereco: "Marcos Ribeiro",
        numero: 167,
        latitude: -43.870143974495946,
        longitude: -16.70082480613001,
        informacoes: " "
    },
    {
        nome: "ESF São Geraldo II",
        cidade: "Montes Claros",
        bairro: "São Geraldo II",
        endereco: "Av. Aparecida Bispo",
        numero: 30,
        latitude: -43.884298342922605,
        longitude: -16.79394277995399,
        informacoes: " "
    },
    {
        nome: "ESF São Judas",
        cidade: "Montes Claros",
        bairro: "São Judas",
        endereco: "Padre Vieira",
        numero: 620,
        latitude: -43.858809876349476,
        longitude: -16.748972536839318,
        informacoes: " "
    },
    {
        nome: "ESF Tancredo Neves",
        cidade: "Montes Claros",
        bairro: "Tancredo Neves",
        endereco: "Rua Dois",
        numero: 206,
        latitude: -43.85159900333236,
        longitude: -16.69999543932125,
        informacoes: " "
    },
    {
        nome: "ESF Eldorado I",
        cidade: "Montes Claros",
        bairro: "Jardim Eldorado",
        endereco: "R. N",
        numero: 372,
        latitude: -43.87866020336684,
        longitude: -16.685507274657624,
        informacoes: " "
    },
    {
        nome: "ESF Topázio",
        cidade: "Montes Claros",
        bairro: "Santo Amaro",
        endereco: "Rua 33",
        numero: 191,
        latitude: -43.85022811511119,
        longitude: -16.771393927774515,
        informacoes: " "
    }
];

// Initialize and add the map
async function initMap() {
    // Centralize o mapa em uma localização inicial
    const initialPosition = { lat: -16.721698276278232, lng: -43.881259332102026 };

    // Solicita as bibliotecas necessárias
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Cria o mapa
    map = new Map(document.getElementById("map"), {
        zoom: 13,
        center: initialPosition,
        mapId: "DEMO_MAP_ID",
    });

    // Adiciona os marcadores dos desfibriladores no mapa
    desfibriladores.forEach((desfibrilador) => {
        new google.maps.Marker({
            position: { lat: desfibrilador.lat, lng: desfibrilador.lng },
            map: map,
            title: desfibrilador.nome,
        });
    });
}

// Função para pegar a localização atual do usuário e centralizar o mapa nela
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            map.setCenter(userPosition);
            // Coloca um marcador na posição do usuário
            new google.maps.Marker({
                position: userPosition,
                map: map,
                title: "Sua localização",
            });
        },
        () => {
            alert("Erro ao obter localização.");
        }
    );
} else {
    alert("Geolocalização não suportada pelo navegador.");
}

// Função para cadastrar um novo desfibrilador
function cadastrarDesfibrilador() {
    const nome = document.getElementById("nome").value;
    const rua = document.getElementById("rua").value;
    const cidade = document.getElementById("cidade").value;
    const bairro = document.getElementById("bairro").value;
    const numero = document.getElementById("numero").value;
    const informacoes = document.getElementById("informacoes").value;

    if (nome && endereco && informacoes) {
        // Usar Geocoding API para converter o endereço em coordenadas
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: endereco }, (results, status) => {
            if (status === "OK") {
                const location = results[0].geometry.location;

                // Adiciona o desfibrilador no mapa
                const marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: nome,
                });

                // Salva as informações do desfibrilador
                desfibriladores.push({
                    nome: nome,
                    position: location,
                    informacoes: informacoes,
                });

                console.log("Desfibrilador cadastrado com sucesso!");
                console.log("Nome:", nome);
                console.log("Endereço:", endereco);
                console.log("Informações adicionais:", informacoes);
            } else {
                alert("Não foi possível localizar o endereço: " + status);
            }
        });
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para encontrar o desfibrilador mais próximo da localização atual
function encontrarMaisProximo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userPosition = new google.maps.LatLng(
                    position.coords.latitude,
                    position.coords.longitude
                );

                // Calcula a distância entre o usuário e cada desfibrilador
                let menorDistancia = Number.MAX_VALUE;
                let desfibriladorMaisProximo = null;

                desfibriladores.forEach((desfibrilador) => {
                    const distancia = google.maps.geometry.spherical.computeDistanceBetween(
                        userPosition,
                        new google.maps.LatLng(desfibrilador.lat, desfibrilador.lng)
                    );

                    if (distancia < menorDistancia) {
                        menorDistancia = distancia;
                        desfibriladorMaisProximo = desfibrilador;
                    }
                });

                if (desfibriladorMaisProximo) {
                    alert(
                        `O desfibrilador mais próximo é: ${desfibriladorMaisProximo.nome}, a ${Math.round(
                            menorDistancia
                        )} metros. Informações: ${desfibriladorMaisProximo.informacoes}`
                    );
                } else {
                    alert("Nenhum desfibrilador cadastrado.");
                }
            },
            () => {
                alert("Erro ao obter localização.");
            }
        );
    } else {
        alert("Geolocalização não suportada pelo navegador.");
    }
}
