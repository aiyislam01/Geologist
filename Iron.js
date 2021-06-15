class Iron{
	constructor(x,y)
	{
		var options={
			restitution:0.8,
			friction:3,
			density:30
		}
	
		this.width=50
        this.height=50
		this.body=Bodies.rectangle(x,y, 50,50, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;	
            var angle= this.body.angle	
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("grey");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height)

			pop()
	}

}