
$(document).ready(function(){
	
	 new TypeIt('.typewriting', {
        speed: 100,
        strings: ['“Muusika on õpetlik, andes aeg-ajalt tegevust ka hingele.”- John Cage, Ameerika helilooja', '"Muusika võlujõud vaigistab raevunud metslase."- William Congreve, 1670-1729', '"Ilu on tardunud muusika."- Aaron Copland, 1900-1990 '],
        loop: true,
        breakWait:1000,
        breakLines: false
      }).go();

});		