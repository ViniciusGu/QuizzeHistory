x=150;
y=120;
placar=0;
opcao=1;
tela='menu'

gabarito = {"q1": 1, "q2": 4, "q3": 3, "q4": 1, "q5": 1, "q6": 3, "q7": 2, "q8": 2, "q9": 1, "q10": 1};

                   //link video aki//
                        
function preload()
{
  score = 0
  telas = {
  'menu': menu,
  'q1': fase1,
  'q2': fase2,
  'q3': fase3,
  'q4': fase4,
  'q5': fase5,
  'q6': fase6,
  'q7': fase7,
  'q8': fase8,
  'q9': fase9,
  'q10': fase10,
  'creditos': creditos,
  'instrucoes': instrucoes,
  'resultados': resultados
}
verifier = {
  'menu': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-100
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<3){
      y=y+100
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == 1){
        tela='q1'
        x = 40;
        y = 130;
      }
      else if(opcao == 2){
        tela='instrucoes'
      }
      else if(opcao == 3){
        tela='creditos'
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      score=0
      opcao=1
      tela='menu'
    }
  },
  'creditos': (key) => {
    if(key == "Escape") tela = 'menu';
  },
  'instrucoes': (key) => {
    if(key == "Escape") tela = 'menu';
  },
  'q1': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0
      tela='q2'
    }
    if(key=="Escape"){
      x=150
      y=120
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q2': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0  
      tela='q3'   
    }
    if(key=="Escape"){
      x=150
      y=120
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q3': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q4'
    }
    if(key=="Escape"){
      x=150
      y=120
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q4': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q5'  
    }
    if(key=="Escape"){
      x=150
      y=120
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q5': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q6' 
    }
    if(key=="Escape"){
      x=150
      y=120
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q6': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q7'    
    }
    if(key=="Escape"){
      x=150
      y=120
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q7': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q8'     
    }
    if(key=="Escape"){
      x=150
      y=120
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q8': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q9'    
    }
    if(key=="Escape"){
      x=150
      y=120
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q9': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q10'   
    }
    if(key=="Escape"){
      x=150
      y=120
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q10': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='resultados'
    }
    if(key=="Escape"){
      x=150
      y=120
      score=0
      opcao=1
      tela='menu'
    }
  },
  'resultados': (key) => {
    x=150
    y=120
    score=0
    opcao=1
    tela = 'menu';
  }
}

    
img=loadImage("historia1.jpg");
img1=loadImage("esponja.jpg")
img2=loadImage("esponja.jpg")
img3=loadImage("esponja.jpg")
img4=loadImage("historia1.jpg")
img5=loadImage("historia1.jpg")
img6=loadImage("paulo1.jpg")
img7=loadImage("enem.jpg");  
img8=loadImage("ceu.jpg")
}

function setup(){
  createCanvas(500,500)
}

function draw(){
  background(img);
  telas[tela]();
}

function drawScore(){
  text(`Pontos: ${score}`, 40, 400, 300, 50)
}

  function menu(){
  rect(x,y,185,45)
  textSize(34)
  text("Quizze History", 170, 50)
  textSize(32)
  text("Iniciar", 195, 160)
  text("Instruções", 180, 250)
  text("Créditos", 195, 350)
  textFont(NORMAL)
}
                               //FASES//

function fase1(){
  
  background(img8);
  rect(x,y,220,28)
  textStyle(NORMAL)
    textSize(24);
    noStroke()
    textAlign(LEFT);
    text("1- Qual região do Brasil é  marcada por uma grande diversidade cultural?" ,20,20,360,260);
    text("A) Sudeste."+"\n", 40, 150);
    text("B) Centro oeste."+"\n",40, 175);
    text("C) Sul."+"\n", 40, 200);
    text("D) Nordeste."+"\n",40, 225);
    drawScore()
}

function fase2(){
  background(img8);
  rect(x,y,270,25)
    textSize(20);
    noStroke()
    textAlign(LEFT);
    text( "2- Qual o nome do tipo de migração realizado entre duas regiões diariamente, principalmente por motivos econômicos?:",20,20,360,260);
    text("A) Emigrantes."+"\n", 40, 150);
    text("B) Refugiados."+"\n",40, 175);
    text("C) Transposição."+"\n", 40, 200);
    text("D) Pendular."+"\n",40, 225);
    drawScore()
 
}

function fase3(){
  background(img8);
    rect(x,y,460,25)
    textSize(19);
    noStroke()
    textAlign(LEFT);
    text("3- Assinale a alternativa que apresenta corretamente o conceito de êxodo rural?",20,20,360,260);
    text("A) O processo de concentração fundiária presente no campo."+"\n", 40, 150);
    text("B) A queda dos salários praticados nas propriedades rurais."+"\n",40, 175);
    text("C) A melhor distribuição de terras para os camponeses."+"\n", 40, 200);
    text("D) O aumento da tecnologia empregada no meio agrário."+"\n",40, 225);
    drawScore()
}
function fase4(){
  background(img8);
  rect(x,y,170,28)
    textSize(20);
    noStroke()
    textAlign(LEFT);
    text("4- Quais imigrantes vieram em maior propoção entre os anos de 1924 e 1933",20,20,260,260);
    text("A) Japoneses"+"\n", 40, 150);
    text("B) Turcos"+"\n",40, 175);
    text("C) Italianos"+"\n", 40, 200);
    text("D) Alemães"+"\n",40, 225);
    drawScore()
}


function fase5(){
  background(img4);
  rect(x,y,300,28)
    textSize(18);
    noStroke()
    textAlign(LEFT);
    text( "5- No Brasil, o processo de migração interna foi amplamente verificado ao longo do século XX. No país, predominam as migrações por motivações?",20,20,260,450);
  textSize(16);
    text("A) econômicas"+"\n", 40, 150);
    text("B) climáticas."+"\n",40, 175);
    text("C) religiosas."+"\n", 40, 200);
    text("D) militares."+"\n",40, 225);
    drawScore()
}

function fase6(){
  background(img5);
  rect(x,y, 260,28)
    textSize(16);
    noStroke()
    textAlign(LEFT);
    text( "6- Na atual fase da urbanização mundial, podemos afirmar que os principais tipos de aglomerações urbanas atualmente existentes, ou seja, aquelas cidades que estão no topo da hierarquia urbana e que protagonizam a economia mundial são:",20,20,360,260);
    textSize(16);
    text("A) Cidades médias"+"\n", 40, 150);
    text("B) Metrópoles"+"\n",40, 175);
    text("C) Cidades globais"+"\n", 40, 200);
    text("D) Cidades artificiais tecnológicas"+"\n",40, 225);
    drawScore()
}
function fase7(){
  background(img4);
  rect(x,y,300,28)
    textSize(24);
    noStroke()
    textAlign(LEFT);
    text( "7- Entende-se por Conurbação:",20,20,260,260);
    textSize(16);
    text("A) A expansão vertical das cidades"+"\n", 40, 150);
    text("B) O encontro de duas ou mais cidades"+"\n",40, 175);
    text("C) População sem moradia nas cidades"+"\n", 40, 200);
    text("D) Ineficácia dos transportes públicos"+"\n",40, 225);
    drawScore()
}
function fase8(){
  background(img5);
  rect(x,y,260,28)
    textSize(18);
    noStroke()
    textAlign(LEFT);
    text( "8- A história do Brasil compreende, tradicionalmente, a chegada dos?",20,20,260,260);
    text("A) Espanhóis"+"\n", 40, 150);
    text("B) Portugueses"+"\n",40, 175);
    text("C) Alemães"+"\n", 40, 200);
    text("D) Italianos"+"\n",40, 225);
    drawScore()
}
function fase9(){
  background(img4);
  rect(x,y,360,28)
    textSize(18);
    noStroke()
    textAlign(LEFT);
    text( "9- Nos países industrializados, a migração campo-cidade tem como causa fundamental?",20,20,260,260);
    text("A) liberação de mão-de-obra pela mecanização."+"\n", 40, 150);
    text("B) pressão demográfica no campo."+"\n",40, 175);
    text("C) baixa produtividade agrícola."+"\n", 40, 200);
    text("D) dificuldade de aquisição de terras."+"\n",40, 225);
    drawScore()
}
function fase10(){
  background(img5);
  rect(x,y,170,28)
    textSize(24);
    noStroke()
    textAlign(LEFT);
    text( " 10- Qual a capital mais rica do Brasil?",20,20,260,260);
    text("A) São Paulo "+"\n", 40, 150);
    text("B) Rio De Janeiro"+"\n",40, 175);
    text("C) Minas Gerais"+"\n", 40, 200);
    text("D) Brasília"+"\n",40, 225);
    drawScore()
}

function resultados(){
    background(img3);
    textSize(28);
    stroke(1)
     text(`Seu placar foi de: ${score} questões!`, 30, 30)

}

function instrucoes(){
  textSize(16);
    stroke(100);
    stroke(250);
    rect(15,15, 400, 420, 10);
    textSize(15);
    textAlign(LEFT);
    text("Ano: Ensino Fundamental 4 ao ensino médio .",40,20,260,260)
    text("Matéria: História."+"\n", 40, 200)
    textAlign(LEFT);
    text("O jogo tem perguntas variadas sobre diversos assuntos relacionados à matéria de história, como: Identificar as motivações dos processos migratórios em diferentes tempos e espaços e analisar diferentes fluxos populacionais e suas contribuições para a formação da sociedade brasileira,cada pergunta vale ponto..."+"\n",40,60,320,320)
    text("Pressione ESC para voltar ao MENU"+"\n", 40,300)
 

}
function creditos(){
  background(img4);
  textSize(16);
    stroke(100);
    stroke(250);
    rect(15,15, 400, 420, 10);
    textSize(15);
    textAlign(LEFT);
    image(img6,80,80,120,140)
    image(img7,250,80,120,140)
    text("Desenvolvedor: Vinicius G. Silva. Santos"+"\n", 250,250, 100, 300)
    text("Educador: Paulo Ricardo de Lima Dantas."+"\n",70,250,100,300)
    text("Pressione ESC para voltar ao MENU"+"\n", 50,490)
    
}


function keyPressed(){
  verifier[tela](key)

}
