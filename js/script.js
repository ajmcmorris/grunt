// JavaScript Document
window.onload =  function(){
		//Looping a Triangle
		for (var line = "#"; line.length < 8; line += "#")
		{
  			//console.log(line);
		}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		//FizzBuzz Excercise
		for (var i = 1; i <= 100; i++) {
		  var output = "";
		  
		  // If the result of i is divisible by three add Fizz instead of the number
		  if (i % 3 == 0)
		  {
			output += "Fizz";
		  }
		  // If the result of i is divisible by five add Buzz instead of the number
		  if (i % 5 == 0)
		  {
			output += "Buzz";
		  }
		  // Either print the string or the number depending on if the conditions were met
		  //console.log(output || i);
		}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		//ChessBoard
		var size = 8;

		var board = "";
		
		//Setting up 8 x 8 Board
		for (var y = 0; y < size; y++) 
		{
			  for (var x = 0; x < size; x++) 
			  {
				  // If the result of x and y is divisible by two add a blank space
					if ((x + y) % 2 == 0)
					{
					  board += " ";
					}
					// Otherwise add a Hashtag
					else
					{
					  board += "#";
					}
			  }
		  // At the end of each row add a new line
		  board += "\n";
		}
		//console.log(board);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		// Function that returns lowest argument
		function minfunc(a,b)
		{
			return Math.min(a,b);
		}
		//console.log(minfunc(4,8));
		
///////////////////////////////////////////////////////////////////////////////////////////////////////////

		//Recursion
		function isEven(number)
		{
			
			function testing()
			{
				if(number % 2 ==0)
				{
					return true;
				}
				if(number % 2 !=0)
				{
					return false;
				}
			}
			return testing();
		}
		//console.log(isEven(-1));
				///////////////////////////////////////////////////////////////////////////////////////////////////////////

		//Counting
		function countBs (string,char)
		{	
			var newString = "";
			for(var i =0; i < string.length; i++)
			{		
				if(string[i] === char)
				{
					newString += string.charAt(i);		
				}
			}
			return "You have "+newString.length+" occourences of "+char+" in your string";
		}
		
		//console.log(countBs("BoBoasdfsadBasdfasbasdfasdB","l"));
						///////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		//Sum of a Range
		function range(start,end,step)
		{
			
			if (step == null) step = 1;
			  var array = [];
			
			  if (step > 0) {
				for (var i = start; i <= end; i += step)
				  array.push(i);
			  } else {
				for (var i = start; i >= end; i += step)
				  array.push(i);
			  }
			  return array;
		}
		function sum(array)
		{
			var total = 0;
			  for (var i = 0; i < array.length; i++)
				total += array[i];
			  return total;
		}
		//console.log(sum(range(1,10)));
								///////////////////////////////////////////////////////////////////////////////////////////////////////////
		//Reverse Array
		
		function reverseArray(array)
		{
			var newArray =[];
			
			//since pop alters length of array when it removes something from it , declare length before iteration starts so length remains the same through iteration
			for(var i = 0,l = array.length -1; i <= l; i++)
			{
				newArray.push(array.pop(i));
			}
			return newArray;
		}
		var numbers = [1,2,3,4,5,6,7,8,9,10];
		//console.log(reverseArray(numbers));
										///////////////////////////////////////////////////////////////////////////////////////////////////////////

		function arrayToList(array) 
		{	  
		  var list = null;
		  
		  for (var i = array.length - 1; i >= 0; i--)
		  {
				list = {value: array[i], rest: list};
		  }
		  return list;
		}
		function listToArray(list)
		{
			var array = [];
			
			while(i in list)
			{
				array.push(list);	
			}
			return array;
		}
		var list =[1,2,3];
		//console.log(arrayToList(list));
		
///////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		//Flattening Arrays
		
		var hege = [["Cecilie", "Lone"],["Emil", "Tobias", "Linus"],["Robin"]];
		
		/*console.log(hege.reduce(function(flat,current){
					return flat.concat(current);
				}));*/
				
///////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		// Every and Some
		
		function every(array, predicate) 
		{
		  for (var i = 0; i < array.length; i++) 
		  {
			if (!predicate(array[i]))
			  return false;
		  }
		  return true;
		}
		
		function some(array, predicate) 
		{
		  for (var i = 0; i < array.length; i++) 
		  {
			if (predicate(array[i]))
			  return true;
		  }
		  return false;
		}
		/*console.log(every([NaN, NaN, NaN], isNaN));
		console.log(every([NaN, NaN, 4], isNaN));
		console.log(some([NaN, 3, 4], isNaN));
		console.log(some([2, 3, 4], isNaN));*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		//Constructor
		
		function Vector(x,y)
		{
			this.x = x;
			this.y = y;	
		}
		//Creating Constructor Methods
		Vector.prototype.add = function(value)
		{
			return new Vector(this.x + value.x, this.y + value.y);
		}
		Vector.prototype.minus = function(value)
		{
			return new Vector(this.x - value.x, this.y - value.y);
		}
		//Adding new property length to object
		Object.defineProperty(Vector.prototype, "length", 
		{
			get: function() 
			{
				return Math.sqrt(this.x * this.x + this.y * this.y);
			}
		});
		console.log(new Vector(1, 2).add(new Vector(2, 3)));
		console.log(new Vector(1, 2).add(new Vector(2, 3)));
		console.log(new Vector(3, 4).length);
	};