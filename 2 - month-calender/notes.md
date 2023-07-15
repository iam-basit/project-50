> To create many dives at once 

Use : div* number of divs you want . className

example: 

div*30.dayes

it will create 30 dive with class of days.

> flex-wrap: wrap;

used to remove the overflow of items on each others.

> box-sizing: border-box 

used to apply the style up to the borders of an element not allowing the overflow to the other element's styles.

> const firstDay = new Date(new Date().getFullYear(),monthInx,1).getDay() - 1;

because JavaScript starts from Sunday we did -1.