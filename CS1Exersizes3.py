## 1.3.2 Fix the olympic rings
Circle(70, 175, 60, fill=None, border='steelBlue', borderWidth=10)
Circle(135, 225, 60, fill=None, border='gold', borderWidth=10)
Circle(200, 175, 60, fill=None, border='black', borderWidth=10)
Circle(265, 225, 60, fill=None, border='forestGreen', borderWidth=10)
Circle(330, 175, 60, fill=None, border='crimson', borderWidth=10)

## 1.3.2 Crescent moon
Rect(0, 0, 400, 400, fill=rgb(30, 30, 30))
Circle(200, 175, 100, fill = gradient('lightGray', 'gray', 'gray', start = 'left'));
Circle(235, 140, 100, fill = rgb(30, 30, 30));
Oval(115, 270, 175, 120, fill = rgb(90, 90, 90), opacity = 80);
Oval(200, 305, 250, 100, fill = rgb(90, 90, 90), opacity = 80);
Oval(280, 280, 125, 80, fill = rgb(90, 90, 90), opacity = 80);
Oval(215, 350, 100, 40, fill = rgb(90, 90, 90), opacity = 80);

## 1.3.2 Cactus
Rect(0, 0, 400, 250, fill=gradient('royalBlue', 'lightSkyBlue', start='top'))
Rect(0, 250, 400, 150, fill=gradient('navajoWhite', 'burlyWood'))
Oval(200, 300, 100, 20, fill = 'black', opacity = 20);
Oval(200, 235, 130, 140, fill = 'seaGreen', border = 'khaki', dashes = (4, 3));
Oval(200, 235, 100, 140, fill = rgb(55, 165, 90), border = 'khaki', dashes = (4, 3));
Oval(200, 235, 50, 140, fill = 'mediumSeaGreen', border = 'khaki', dashes = (4, 3));
Line(200, 165, 200, 305, fill = 'khaki', dashes = (4, 3));

## 1.3.2 Target practice
Rect(0, 0, 400, 400, fill='ghostWhite')
Line(0, 0, 200, 225, fill = 'dimGray', lineWidth = 6, dashes = True);
Line(400, 0, 200, 225, fill = 'dimGray', lineWidth = 6, dashes = True);
Circle(200, 225, 150, fill = 'dodgerBlue', border = 'black', borderWidth = 2);
Circle(200, 225, 100, fill = 'crimson', border = 'black', borderWidth = 1);
Circle(200, 225, 45, fill = 'yellow', border = 'black', borderWidth = 1);
