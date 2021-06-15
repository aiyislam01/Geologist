class Stone{
	constructor(x,y,w,h)
	{
		var options={
			restitution:0.8,
			friction:0.9,
			density:12
		}
	
		this.width=w
        this.height=h
		this.body=Bodies.rectangle(x,y,w,h,options)
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
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height)

			pop()
	}

}