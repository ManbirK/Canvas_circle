my_Canvas = document.getElementById("Drawing");

sheet = my_Canvas.getContext('2d');

pen_color = "green";
pen_width = 6;

sheet.beginPath();
sheet.strokeStyle = pen_color;
sheet.lineWidth = pen_width;
sheet.arc(300,300,25,0,2 * Math.PI);
sheet.stroke();

sheet.beginPath();
sheet.strokeStyle = "yellow";
sheet.lineWidth = pen_width;
sheet.arc(450,300,123,0,2 * Math.PI);
sheet.stroke();

sheet.beginPath();
sheet.strokeStyle = "red";
sheet.lineWidth = pen_width;
sheet.arc(410,423,90,0,2 * Math.PI);
sheet.stroke();

sheet.beginPath();
sheet.strokeStyle = "blue";
sheet.lineWidth = pen_width;
sheet.arc(290,100,150,0,2 * Math.PI);
sheet.stroke();

my_Canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e){

    pos_x = e.clientX - my_Canvas.offsetLeft;
    pos_y = e.clientY - my_Canvas.offsetTop;
    
    
sheet.beginPath();
sheet.strokeStyle = "Purple";
sheet.lineWidth = 4;
sheet.arc(pos_x,pos_y,30,0,2 * Math.PI);
sheet.stroke();


}