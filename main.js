Canvas = document.getElementById("my_canvas");

pen = Canvas.getContext("2d");

//document.getElementById("my_canvas").getContext('2d').beginPath();
pen.beginPath();
pen.strokeStyle = "green";
pen.lineWidth = 5;
pen.arc(300,300,40,0,2 * Math.PI);
pen.stroke();

// Aradhya
pen.beginPath();
pen.strokeStyle = "pink";
pen.lineWidth = 6;
pen.arc(400,400,100,0,2 * Math.PI);
pen.stroke();


// Ashita
pen.beginPath();
pen.strokeStyle = "purple";
pen.lineWidth = 5;
pen.arc(400,200,100,0,2 * Math.PI);
pen.stroke();


//Khushi
pen.beginPath();
pen.strokeStyle = "lightblue";
pen.lineWidth = 10;
pen.arc(200,200,50,0,2 * Math.PI);
pen.stroke();


//Ojas
pen.beginPath();
pen.strokeStyle = "red";
pen.lineWidth = 10;
pen.arc(400,500,40,0,2 * Math.PI);
pen.stroke();