function Demo()//Roda o texto de demonstração, para aqueles sem ideia ;)
{
	document.getElementById('original').value = 'Sabe que..uma vez cara, meu pai me mandou sair de casa, e eu perguntei pra ele, você está louco cara? Então ele chamou minha mãe, fez eu conversar com ela, e ela me disse que sou preguiçoso demais...Falei pra ela "então beleza", vou morar com o meu amigo Jorge, e nós vamos nos virar tranquilamente...';

	Roda();
}

function Limpa()//Se for clicado da textarea do texto original, irá limpar todo o conteúdo
{
	document.getElementById('original').value = ''; //Limpando t
	document.getElementById('manoeitor').value = ''; //Limpando textoBonitinho
}

function Roda()//A cada tecla precionada, irá rodar essa função, usando de regex para converter seus valores
{
	//pega o valor digitado na textarea 'original'
	t = document.getElementById('original').value;
	//alert(t);

	/*t = t.replace(/^([A-Z].*)/,		'Ta ligado que..$1');*/

	//Numeros
	t = t.replace(/\b(h)?um\b/gi,    		'1');
	t = t.replace(/\b(dois|duas)\b/gi,		'2');
	t = t.replace(/\btr[eê]s\b/gi,			'3');
	t = t.replace(/\bquatro\b/gi,			'4');
	t = t.replace(/\bcinco\b/gi,			'5');
	t = t.replace(/\bseis\b/gi,				'6');
	t = t.replace(/\bsete\b/gi,				'7');
	t = t.replace(/\boito\b/gi,				'8');
	t = t.replace(/\bnove\b/gi,				'9');
	t = t.replace(/\bdez\b/gi,				'10');
	t = t.replace(/\bonze\b/gi,				'11');
	t = t.replace(/\bdoze\b/gi,				'12');
	t = t.replace(/\btreze\b/gi,			'13');
	t = t.replace(/\bquatorze\b/gi,			'14');
	t = t.replace(/\bquinze\b/gi,			'15');
	t = t.replace(/\bdezesseis\b/gi,		'16');
	t = t.replace(/\bdezessete\b/gi,		'17');
	t = t.replace(/\bdezoito\b/gi,			'18');
	t = t.replace(/\bdezenove\b/gi,			'19');

	//pronomes pessoais
	//t = t.replace(/\beu\b/gi, 			    'mim'); //eu faço
	t = t.replace(/\bnós\b/gi, 		       'nóis'); //nós fazemos
	t = t.replace(/\bvoc[êe]/gi, 		   	 'vc'); //você faz
	t = t.replace(/\bvoç[êe]/gi, 		   	 'vc'); //Para aqueles que acham que você se escreve com 'ç'
	t = t.replace(/\bme\b/gi, 			    'mim'); //me faz um favor
	t = t.replace(/\bele\b/gi, 			    'eli'); //ele faz
	t = t.replace(/\beles\b/gi, 		   'elis'); //eles fazem

	//verbos
	t = t.replace(/\bfa(z|ça|zer)\b/gi,    		   		 'faiz'); //vamos fazer!
	t = t.replace(/\bfez\b/gi,    		   		 		 'feiz'); //vamos fazer!
	t = t.replace(/\bcomer\b/gi, 		   		         'comi'); //vamos comer!
	t = t.replace(/\bprecis(amos|ar|ãm|am|riam)/gi,   'precisa'); //nós precisamos!
	t = t.replace(/\bpod(e|emos|iam|em)\b/gi,   	     'podi'); //nós podemos!
	t = t.replace(/\brir\b/gi,   	     				   'ri'); //vamos rir
	t = t.replace(/\bvou\b/gi,   	     				   'vo'); //vou rir
	t = t.replace(/\bes(tar|ta|tá)/gi,   			       'ta'); //você está

	//palavrinhas
	t = t.replace(/\bcara\b/gi,	      		  		 'mano'); //que isso cara
	t = t.replace(/\blouco\b/gi,   			      	 'loko'); //você está louco cara?
	t = t.replace(/\.\.\./g,	   		 '...ta ligado?!..'); //você está
	t = t.replace(/\bontem\b/gi,   		   			 'onti'); //conversei ontem
	t = t.replace(/\bcom a\b/gi,   		   			   'ca'); //conversei ontem com a
	t = t.replace(/\bcom o\b/gi,		   			   'co'); //conversei ontem com o
	t = t.replace(/\b(velho|pai)\b/gi,		   		   'veio'); //conversei ontem com o meu velho
	t = t.replace(/\b(velha|m[aã]e)\b/gi,			   'veia'); //conversei ontem com o minha velha
	t = t.replace(/\bigual\b/gi,		   			 'ingual'); //Ingual Onti! OBS: Elizetêitor
	t = t.replace(/\bp[a]?ra\b/gi,		   			     'pa'); //Para casa
	t = t.replace(/\bsair\b/gi,		   			        'saí'); //sair de casa
	t = t.replace(/\buma vez\b/gi,		   			     '1x'); //uma vez
	t = t.replace(/\bchamou\b/gi,		   			   'xamô'); //Chamou
	t = t.replace(/\bdemais\b/gi,		   			     'd+'); //Demais
	t = t.replace(/\bmandou\b/gi,      			      'mando'); //Mandou
	t = t.replace(/\bpregui(ç|ss)oso\b/gi,        'vagabundo'); //Preguiçoso demais
	t = t.replace(/\bda(í|i)/gi,	   	        		'dae'); //Daí, eu fui
	t = t.replace(/\bconversar\b/gi,   			   'conversá'); //Fez eu conversar
  //t = t.replace(/\bent[ãa]o\b/gi,   			  	  'e daí'); //então olha...
	t = t.replace(/\bbele[zs]a\b/gi,   			  	'firmeza'); //Beleza então... 
	t = t.replace(/\b(oi|ol[áa])/gi,		  			'dae'); //oi...
	t = t.replace(/\bsabe\b/gi,		  			  'tá ligado'); //sabe que...
	t = t.replace(/\bvou\b/gi,		  			  		 'vo'); //vou...
	t = t.replace(/\bmorar\b/gi,		  			   'morá'); //vou morar...
	t = t.replace(/\bamigo\b/gi,		  		    'parcero'); //vou morar com meu amigo...
	t = t.replace(/\bvamos\b/gi,		  		       'vamo'); //vamos embora...
	t = t.replace(/\bnos\b/gi,		  		       	     'se'); //vamos nos...
	t = t.replace(/\bvirar\b/gi,		  		       'virá'); //vamos nos virar...
	t = t.replace(/\btranqui(lamente|lo)\b/gi,     	 'de boa'); //vamos nos virar tranquilamente...
	t = t.replace(/\bensinou)\b/gi,     	 		 'ensino'); //ele me ensinou...
	
	//Letras
	t = t.replace(/\be \b/gi, 	'i ');

	/*

	Elainêitor
	t = t.replace(/\blindo\b/gi,              'lindjíinho'); //lindo
	t = t.replace(/\blinda\b/gi, 			  'lindjíinha'); //linda
	t = t.replace(/\bbonit(o|a|as|os)\b/gi, 	'gracinha'); //bonito, //bonita, //bonitos, //bonita
	t = t.replace(/\bnossa\b/gi, 					  'ai'); //nossa
	t = t.replace(/\b(eu )?achei( muito)?/gi, 	     'que'); //eu achei muito
	t = t.replace(/\.\.\./g,		   	'...tadinha(o)...'); 
	t = t.replace(/\btaiane\b/gi, 'Taiãããne'); //Taiane
	*/

	//o resultado é jogado no valor da textarea 'manoeitor'
	document.getElementById('manoeitor').value = t;
}	