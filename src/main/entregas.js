function gerarGrafico() {
    init();
    clearScreen();
    var client = [
            {
                "name": "Ivan",
                "x":50,
                "y":50,
                "qtd": 50
            },
            {
                 "name": "Clara",
                 "x":200,
                 "y":50,
                 "qtd": 100
            }
            ,
            {
                 "name": "Gustavo",
                 "x":50,
                 "y":200,
                 "qtd": 150
            }
    ];
    var join = [
            {
                  "origin": client[0],
                  "destiny":client[1],
                  "cento":50
            },
            {
                  "origin": client[1],
                  "destiny":client[2],
                  "cento":40
            }
            ,
            {
                  "origin": client[0],
                  "destiny":client[2],
                  "cento":90
            }
        ];
    createGraph(client,join);
};