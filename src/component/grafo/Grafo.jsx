import React from "react";
import { useRef, useEffect } from "react";
import "./grafo.css";

const Grafo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // el canvas toma el tamaño de la ventana
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //obj para identificar la posicion y el radio que va a afectar.
    const mouse = { x: undefined, y: undefined, radius: 60 };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    //cuando se mueve el mouse se consigue su ubivacion.
    window.addEventListener("mousemove", handleMouseMove);

    const nodeArray = [];
    const numberOfNode = 80;
    const edgeDistance = 65;
    let animationFrameId = null;

    //recursiva que actualiza y redibuja los nodos y sus aristas/edges en cada frame.
    class Node {
      constructor() {
        //random devubelve entre (0, 1) multiplicarlo hace que en n° random este entre (0, canvas.width/height).
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        //calcula el tamaño. Math.random() * 5 = (0, 5) pero el + 1 hace que si el numero random da 0 sea 1 para que en todos los casos sea > 0
        this.baseSize = Math.random() * 5 + 1;
        this.size = this.baseSize;
        //determina para donde se va a mover sea + o - y el ultimo numero que multiplica es la velocidad de este.
        this.speedX = (Math.random() - 0.5) * 2; //horizontal
        this.speedY = (Math.random() - 0.5) * 1; //vertical
        this.baseColor = "#081822";
        this.color = this.baseColor;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        //si el nodo choca con el borde se cambia de direccion pasandolo a - o +.
        if (this.x >= canvas.width || this.x <= 0) this.speedX *= -1;
        if (this.y >= canvas.height || this.y <= 0) this.speedY *= -1;

        //cA
        const mX = mouse.x - this.x;
        //cB
        const mY = mouse.y - this.y;
        //se usa el teorema de pitagoras para saber la distancia de un punto/nodo con el radio del mouse
        //h^2 = cA^2+cB^2
        const distance = Math.sqrt(mX * mX + mY * mY);

        //si la distancia entra en el radio del mouse el tamñao del nodo crece y cambia su color.
        if (distance < mouse.radius) {
          this.size = this.baseSize * 2;
          this.color = "#03624C";
        } else {
          this.size = this.baseSize;
          this.color = this.baseColor;
        }
      }

      draw() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();

        //se vuelve a calcular pitagoras para saber la distancia entre los otros nodos para dibujar la arista si es que esta en el rango
        nodeArray.forEach((otherNode) => {
          const distance = Math.sqrt(
            (this.x - otherNode.x) ** 2 + (this.y - otherNode.y) ** 2
          );
          if (distance < edgeDistance) {
            let lineWidth = Math.max(
              0.01,
              ((edgeDistance - distance) / edgeDistance) * 0.5
            ); //Dependiendo la distancia la arista va a ser mas o menos gorda.
            context.strokeStyle = "#03624C";
            context.lineWidth = lineWidth;
            context.beginPath();
            context.moveTo(this.x, this.y);
            context.lineTo(otherNode.x, otherNode.y);
            context.stroke();
          }
        });
      }
    }

    function createNodes() {
      for (let i = 0; i < numberOfNode; i++) {
        nodeArray.push(new Node());
      }
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      nodeArray.forEach((node) => {
        node.update();
        node.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    createNodes(); //Crea la cantidad de nodos marcada en numberOfNode.
    animate(); //funcion recursiva, constantemente esta dibujando las distintas posisciones y tamaños de las aristas y nodos..

    return () => {
      // se elimina el evento y la animacion para que no afecte al rendimiento si se ba a otra pagina.
      window.removeEventListener("mousemove", handleMouseMove);
    
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="grafo-style"></canvas>;
};

export default Grafo;
