
var svg;
var width = 500;
var height = 500;

function circle(x,y,color,client,join,name) {
  svg.append('circle')
      .attr('class', 'origin')
      .attr('cx',x)
      .attr('cy',y)
      .attr('r', 10)
      .attr('fill',color)
      .style('opacity', 0.3)
      .on("mouseover", function (d) {
                                      indicate(client,join,name);
                                    });
}

function clearScreen() {
  svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', height)
    .style('fill','yellow');
}

function print(text,x,y,width,fontFamily,fontSize,color) {
  svg.append('text')
    .attr('x', x)
    .attr('y', y)
    .attr('width', width)
    .style("font-size", fontSize)
    .style('fill',color)
    .style('font-family',fontFamily)
    .style("text-anchor", "beginning")
    .text(text);
}

function mean(origin,destiny) {
 return (origin + destiny) /2;
}

function indicate(client,join,name) {
 clearScreen();
 createGraph(client,join);
    for(var g=0; g<join.length; g++) {
            if (name == join[g].origin.name) {
             line(join[g].origin.x,join[g].origin.y,
                  join[g].destiny.x,join[g].destiny.y,
                  'red' );
             print(join[g].cento+"%",
                   mean(join[g].origin.x, join[g].destiny.x),
                   mean(join[g].origin.y, join[g].destiny.y),
                   10,
                   'arial',
                   12,
                   'blue');
            }
        }
}

function line(x1,y1,x2,y2,color) {
  svg.append('line')
      .attr('class', 'arrow')
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x2)
      .attr('y2', y2)
      .style('stroke-width',"3px")
      .attr('stroke',color);
}

function createGraph(client,join) {
    for(var f=0; f<client.length;f++)
            {
                    circle(client[f].x,client[f].y,'black',client,join,client[f].name);
                    print(client[f].name,client[f].x,client[f].y, 10,'arial',12,'black');
                    print(client[f].qtd,client[f].x,client[f].y+20, 10,'arial',12,'black');
            }
}

function init() {
        svg = d3.select(document.getElementById('quadros')).append('svg')
             .attr('width', width)
             .attr('height', height) ;
}
