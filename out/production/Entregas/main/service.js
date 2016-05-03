
var svg;
var mouX = 0;
var mouY = 0;
function circulo(x,y,r,cor,client,ligar,name) {
  svg.append('circle')
      .attr('class', 'origin')
      .attr('cx',x)
      .attr('cy',y)
      .attr('r', r)
      .attr('fill',cor)
      .style('opacity', 0.3)
      .style('stroke-width',"3px")
      .on("mouseover", function (d) {
                                      apontar(client,ligar,name);
                                    });
};

function apontar (client,ligar,name) {
reta(0,0,500,500,'Yellow');
 criarGrafos();
    for(var g=0; g<ligar.length; g++) {
            if (name == ligar[g].origem.name) {

             line(ligar[g].origem.x,ligar[g].origem.y,
                  ligar[g].destino.x,ligar[g].destino.y,
                  'red' );

            }

        }

};
function line(lx1,ly1,lx2,ly2,cor) {
  svg.append('line')
      .attr('class', 'arrow')
      .attr('x1', lx1)
      .attr('x2', lx2)
      .attr('y1', ly1)
      .attr('y2', ly2)
      .attr('stroke',cor)
      ;

};

function reta(x,y,l,a,cor) {
  svg.append('rect')
    .attr('x', x)
    .attr('y', y)
    .attr('width', l)
    .attr('height', a)
    .style('fill',cor);
};

this.escrever = function(texto,x,y,largura,fonteFamilia,fonteSize,cor) {
  svg.append('text')
    .attr('x', x)
    .attr('y', y)
    .attr('width', largura)
    .style("font-size", fonteSize)
    .style('fill',cor)
    .style('font-family',fonteFamilia)
    .style("text-anchor", "beginning")
    .text(texto);
};
function criarGrafos(client,ligar) {
for(var f=0; f<client.length;f++)
        {
                circulo(client[f].x,client[f].y,5,'black',client,ligar,client[f].name);
                escrever(client[f].name,client[f].x,client[f].y, 10,'arial',12,'black');
        }
}
function gerarGrafico() {

init();
reta(0,0,500,500,'Yellow');


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
var ligar = [
        {
              "origem": client[0],
              "destino":client[1],
              "cento":50
        },
        {
              "origem": client[1],
              "destino":client[2],
              "cento":40
        }
        ,
        {
              "origem": client[0],
              "destino":client[2],
              "cento":90
        }
    ];
criarGrafos();
};
function init() {
//alert("AAAAAAAAA");
var margem = {top: 0, right: 0, bottom: 0, left: 0};
    svg = d3.select(document.getElementById('quadros')).append('svg')
         .attr('width', 500)
         .attr('height', 500)
         .append('g')
         .attr('transform', 'translate(' + margem.left + ',' + margem .top + ')')
         .on("mousemove", function(event) {
                         coordinates = d3.mouse(this);
                         mouX = coordinates[0];
                         mouY = coordinates[1];} );
//reta(svg,0,0,500,500,'red');
         }