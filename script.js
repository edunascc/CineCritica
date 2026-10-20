const filmesBrasileiros = [
  { id: 1, titulo: "Cidade de Deus", ano: 2002, diretor: "Fernando Meirelles / Kátia Lund", genero: "Crime / Drama", elenco: ["Alexandre Rodrigues", "Leandro Firmino", "Seu Jorge", "Matheus Nachtergaele"], sinopse: "Buscapé cresce em meio à violência da Cidade de Deus e encontra na fotografia uma saída para o tráfico. Um retrato cru da vida na periferia carioca entre as décadas de 1960 e 1980.", corCapa: "#1b2a41", imagem: "https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeus.jpg" },
  { id: 2, titulo: "O Auto da Compadecida", ano: 2000, diretor: "Guel Arraes", genero: "Comédia / Aventura", elenco: ["Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Marco Nanini"], sinopse: "João Grilo e Chicó sobrevivem no sertão com golpes e imaginação, até que a morte chega para todos e uma compadecida precisa interceder.", corCapa: "#b5651d", imagem: "https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg" },
  { id: 3, titulo: "Central do Brasil", ano: 1998, diretor: "Walter Salles", genero: "Drama", elenco: ["Fernanda Montenegro", "Vinícius de Oliveira", "Marília Pêra", "Othon Bastos"], sinopse: "Dora escreve cartas para analfabetos na estação Central do Brasil e acaba acompanhando o menino Josué pelo sertão em busca do pai que ele nunca conheceu.", corCapa: "#4a5240", imagem: "https://upload.wikimedia.org/wikipedia/pt/2/29/Central_do_Brasil_poster.jpg" },
  { id: 4, titulo: "Bacurau", ano: 2019, diretor: "Kleber Mendonça Filho / Juliano Dornelles", genero: "Suspense / Faroeste", elenco: ["Sônia Braga", "Udo Kier", "Bárbara Colen", "Thomas Aquino"], sinopse: "Um vilarejo do sertão desaparece do mapa e seus moradores precisam enfrentar um grupo de forasteiros armados que chega à cidade com intenções obscuras.", corCapa: "#5a2d0c", imagem: "https://upload.wikimedia.org/wikipedia/pt/6/67/Bacurau_%28filme%29.jpeg" },
  { id: 5, titulo: "Tropa de Elite", ano: 2007, diretor: "José Padilha", genero: "Ação / Policial", elenco: ["Wagner Moura", "Caio Blat", "André Ramiro", "Maria Ribeiro"], sinopse: "O capitão Nascimento tenta formar seu substituto no BOPE às vésperas da visita do Papa ao Rio de Janeiro, enquanto enfrenta o tráfico e a corrupção policial.", corCapa: "#20242b", imagem: "https://upload.wikimedia.org/wikipedia/pt/2/2a/TropaDeElitePoster.jpg" },
  { id: 6, titulo: "Ainda Estou Aqui", ano: 2024, diretor: "Walter Salles", genero: "Drama", elenco: ["Fernanda Torres", "Selton Mello", "Valentina Herszage", "Luiza Kosovski"], sinopse: "Eunice Paiva luta pela verdade sobre o desaparecimento do marido durante a ditadura militar e reconstrói a vida ao lado dos filhos no Rio de Janeiro.", corCapa: "#3b4a5a", imagem: "https://upload.wikimedia.org/wikipedia/pt/5/57/Ainda_Estou_Aqui_2024_poster.jpg" },
  { id: 7, titulo: "Que Horas Ela Volta?", ano: 2015, diretor: "Anna Muylaert", genero: "Drama", elenco: ["Regina Casé", "Camila Márdila", "Michel Joelsas", "Karine Teles"], sinopse: "Val trabalha como babá em uma casa de classe média alta em São Paulo e vê sua rotina mudar com a chegada da filha Jéssica, que vem do Recife prestar vestibular.", corCapa: "#6d4c41", imagem: "https://upload.wikimedia.org/wikipedia/pt/7/78/Que_horas_ela_volta_ver3_xlg.jpg" },
  { id: 8, titulo: "Carandiru", ano: 2003, diretor: "Hector Babenco", genero: "Drama", elenco: ["Luiz Carlos Vasconcelos", "Milton Gonçalves", "Rodrigo Santoro", "Lázaro Ramos"], sinopse: "Um médico voluntário narra a vida dos presos do Carandiru até o massacre de 1992, mostrando histórias de afeto e violência dentro do presídio.", corCapa: "#3a3a3a", imagem: "https://upload.wikimedia.org/wikipedia/pt/1/17/Carandiru_filme.jpg" },
  { id: 9, titulo: "O Palhaço", ano: 2011, diretor: "Selton Mello", genero: "Comédia / Drama", elenco: ["Selton Mello", "Paulo José", "Larissa Manoela", "Moacyr Franco"], sinopse: "Benjamim é palhaço de um circo mambembe comandado pelo pai e começa a buscar um sentido para a própria vida quando percebe que já não faz as pessoas rirem.", corCapa: "#c0392b", imagem: "https://image.tmdb.org/t/p/w500/mXSdKbBa2k1qIXmtDAszMYy49jH.jpg" },
  { id: 10, titulo: "Marte Um", ano: 2022, diretor: "Gabriel Martins", genero: "Drama", elenco: ["Rejane Faria", "Carlos Francisco", "Camilla Damião", "Cícero Lucas"], sinopse: "Uma família negra de Contagem atravessa o ano de 2018 entre dívidas, sonhos adiados e a esperança de um futuro melhor para os filhos.", corCapa: "#7b1e3a", imagem: "https://upload.wikimedia.org/wikipedia/pt/e/ea/Marte_Um_2022.jpeg" },
  { id: 11, titulo: "Minha Mãe é uma Peça", ano: 2013, diretor: "André Pellenz", genero: "Comédia", elenco: ["Paulo Gustavo", "Mariana Xavier", "Rodrigo Pandolfo", "Suely Franco"], sinopse: "Dona Hermínia descobre que os filhos querem se livrar dela e decide repensar a própria vida, o casamento e a relação com a família.", corCapa: "#b8860b", imagem: "https://upload.wikimedia.org/wikipedia/pt/d/da/Minha_M%C3%A3e_%C3%A9_uma_Pe%C3%A7a.jpg" },
  { id: 12, titulo: "Terra em Transe", ano: 1967, diretor: "Glauber Rocha", genero: "Drama", elenco: ["Jardel Filho", "Paulo Autran", "Glauce Rocha", "José Lewgoy"], sinopse: "Um jornalista se envolve na disputa política entre um líder populista e um político conservador em uma nação fictícia chamada Eldorado.", corCapa: "#4b2e2e", imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e8/Terra_em_Transe_cartaz.png" },
  { id: 13, titulo: "Deus e o Diabo na Terra do Sol", ano: 1964, diretor: "Glauber Rocha", genero: "Faroeste / Drama", elenco: ["Geraldo Del Rey", "Yoná Magalhães", "Othon Bastos", "Maurício do Valle"], sinopse: "Manuel e Rosa fogem pelo sertão entre o cangaço de Antônio das Mortes e o fanatismo religioso do beato Sebastião.", corCapa: "#6b4423", imagem: "https://upload.wikimedia.org/wikipedia/pt/0/09/Poster_Deus_e_o_Diabo_na_Terra_do_Sol.png" },
  { id: 14, titulo: "Macunaíma", ano: 1969, diretor: "Joaquim Pedro de Andrade", genero: "Comédia / Fantasia", elenco: ["Grande Otelo", "Paulo José", "Jardel Filho", "Dina Sfat"], sinopse: "O herói preguiçoso e sem caráter sai da floresta para a cidade grande em busca de um amuleto e descobre as contradições do Brasil moderno.", corCapa: "#2e5d3a", imagem: "https://upload.wikimedia.org/wikipedia/pt/8/82/Macuna%C3%ADma_cartaz.png" },
  { id: 15, titulo: "O Pagador de Promessas", ano: 1962, diretor: "Anselmo Duarte", genero: "Drama", elenco: ["Leonardo Villar", "Glória Menezes", "Dionísio Azevedo", "Norma Bengell"], sinopse: "Zé do Burro tenta cumprir uma promessa carregando uma cruz até a igreja de Santa Bárbara e enfrenta a burocracia e o preconceito da Igreja na Bahia.", corCapa: "#7a5c3e", imagem: "https://upload.wikimedia.org/wikipedia/pt/8/83/O_Pagador_de_Promessas_poster.png" },
  { id: 16, titulo: "Vidas Secas", ano: 1963, diretor: "Nelson Pereira dos Santos", genero: "Drama", elenco: ["Átila Iório", "Maria Ribeiro", "Orlando Macedo", "Jofre Soares"], sinopse: "Uma família de retirantes atravessa o sertão nordestino em busca de água e de um pedaço de terra onde possa viver com dignidade.", corCapa: "#8a6d3b", imagem: "https://upload.wikimedia.org/wikipedia/pt/7/7f/Vidas_Secas_CN_0116A.jpg" },
  { id: 17, titulo: "Pixote, a Lei do Mais Fraco", ano: 1980, diretor: "Hector Babenco", genero: "Drama", elenco: ["Fernando Ramos da Silva", "Jorge Julião", "Gilberto Moura", "Marília Pêra"], sinopse: "Um menino abandonado nas ruas de São Paulo passa por reformatórios e mergulha no crime, tornando-se parte da violência que o criou.", corCapa: "#33414d", imagem: "https://upload.wikimedia.org/wikipedia/pt/9/94/Pixote%2C_a_lei_do_mais_fraco.png" },
  { id: 18, titulo: "Bye Bye Brasil", ano: 1979, diretor: "Carlos Diegues", genero: "Aventura / Drama", elenco: ["José Wilker", "Betty Faria", "Fábio Jr.", "Zaira Zambelli"], sinopse: "Uma trupe de artistas mambembes cruza o país de norte a sul enquanto a televisão e as estradas mudam para sempre o Brasil e o próprio circo.", corCapa: "#b06b2a", imagem: "https://upload.wikimedia.org/wikipedia/pt/9/9a/Cartaz_Bye_Bye_Brasil.png" },
  { id: 19, titulo: "Bicho de Sete Cabeças", ano: 2001, diretor: "Laís Bodanzky", genero: "Drama", elenco: ["Rodrigo Santoro", "Othon Bastos", "Cássia Kiss", "Daniela Nefussi"], sinopse: "Um adolescente é internado à força em um manicômio depois de ser encontrado com maconha e enfrenta a violência do sistema psiquiátrico.", corCapa: "#3f4a52", imagem: "https://image.tmdb.org/t/p/w500/x6NXI2jvi9iKbzjjHRMtZ7mCPjB.jpg" },
  { id: 20, titulo: "Aquarius", ano: 2016, diretor: "Kleber Mendonça Filho", genero: "Drama", elenco: ["Sônia Braga", "Maeve Jinkings", "Irandhir Santos", "Humberto Carrão"], sinopse: "Clara, uma crítica musical aposentada, se recusa a vender seu apartamento em Boa Viagem para uma construtora que quer derrubar o prédio.", corCapa: "#4b6b8a", imagem: "https://upload.wikimedia.org/wikipedia/pt/8/80/Aquarius_%28filme%29.jpg" },
  { id: 21, titulo: "O Som Ao Redor", ano: 2012, diretor: "Kleber Mendonça Filho", genero: "Suspense", elenco: ["Irandhir Santos", "Gustavo Jahn", "Maeve Jinkings", "W.J. Solha"], sinopse: "A chegada de uma milícia de segurança em uma rua de classe média do Recife mexe com a vida e com os medos dos moradores.", corCapa: "#455a64", imagem: "https://upload.wikimedia.org/wikipedia/pt/7/74/O_Som_ao_Redor.jpg" },
  { id: 22, titulo: "Hoje Eu Quero Voltar Sozinho", ano: 2014, diretor: "Daniel Ribeiro", genero: "Romance / Drama", elenco: ["Ghilherme Lobo", "Fabio Audi", "Tess Amorim", "Lúcia Romano"], sinopse: "Leonardo, um adolescente cego, descobre o primeiro amor e a vontade de ser independente enquanto a amizade com Gabriel se transforma em outra coisa.", corCapa: "#8e5a8a", imagem: "https://upload.wikimedia.org/wikipedia/pt/2/21/Hoje_Eu_Quero_Voltar_Sozinho_p%C3%B4ster.jpg" },
  { id: 23, titulo: "Estômago", ano: 2007, diretor: "Marcos Jorge", genero: "Drama / Comédia", elenco: ["João Miguel", "Fabiula Nascimento", "Babu Santana", "Zeca Cenovicz"], sinopse: "Raimundo sobe na vida como cozinheiro em um boteco até ser preso e virar o chef da cadeia, usando a comida como forma de poder.", corCapa: "#8b3a2f", imagem: "https://upload.wikimedia.org/wikipedia/pt/1/18/P%C3%B4ster_Est%C3%B4mago.jpg" },
  { id: 24, titulo: "Bingo: O Rei das Manhãs", ano: 2017, diretor: "Daniel Rezende", genero: "Comédia / Drama", elenco: ["Vladimir Brichta", "Leandra Leal", "Domingos Montagner", "Emanuelle Araújo"], sinopse: "O ator por trás de um palhaço de TV famoso tenta lidar com o sucesso, a fama e os próprios demônios nos anos 1980.", corCapa: "#d35400", imagem: "https://upload.wikimedia.org/wikipedia/pt/d/d1/Bingo_O_Rei_das_Manhas.png" },
  { id: 25, titulo: "Como Nossos Pais", ano: 2017, diretor: "Laís Bodanzky", genero: "Drama", elenco: ["Maria Ribeiro", "Clarisse Abujamra", "Paulo Betti", "Jorge Mautner"], sinopse: "Rosa equilibra carreira, casamento, filhos e os pais idosos em um retrato geracional sobre escolhas e culpa.", corCapa: "#5d4037", imagem: "https://upload.wikimedia.org/wikipedia/pt/d/d3/Nossos_pais.jpg" },
  { id: 26, titulo: "Carlota Joaquina, Princesa do Brazil", ano: 1995, diretor: "Carla Camurati", genero: "Comédia / Histórico", elenco: ["Marieta Severo", "Marco Nanini", "Ludmila Dayer", "Antônio Abujamra"], sinopse: "A chegada da família real portuguesa ao Brasil é contada pelo humor ácido da princesa espanhola Carlota Joaquina.", corCapa: "#8e6b2f", imagem: "https://upload.wikimedia.org/wikipedia/pt/b/be/Carlota_Joaquina%2C_Princesa_do_Brazil_%281995%29_Poster.jpg" },
  { id: 27, titulo: "O Cheiro do Ralo", ano: 2006, diretor: "Heitor Dhalia", genero: "Drama", elenco: ["Selton Mello", "Paula Braun", "Lourenço Mutarelli", "Fabiana Gugli"], sinopse: "Um dono de ferro-velho se apaixona pelo ralo do banheiro da loja e passa a maltratar os clientes que chegam para vender objetos.", corCapa: "#4e4e4e", imagem: "https://image.tmdb.org/t/p/w500/6HdXOlKdtB2eRawMkliz638a7vc.jpg" },
  { id: 28, titulo: "Lisbela e o Prisioneiro", ano: 2003, diretor: "Guel Arraes", genero: "Romance / Comédia", elenco: ["Selton Mello", "Débora Falabella", "Virginia Cavendish", "Marco Nanini"], sinopse: "Lisbela se apaixona pelo malandro Leléu enquanto um matador de aluguel a espera no sertão, em uma comédia de costumes cheia de música.", corCapa: "#a4502f", imagem: "https://upload.wikimedia.org/wikipedia/pt/1/19/Lisbela_e_o_Prisioneiro.jpg" },
  { id: 29, titulo: "A Vida Invisível", ano: 2019, diretor: "Karim Aïnouz", genero: "Drama", elenco: ["Carol Duarte", "Julia Stockler", "Gregório Duvivier", "Bárbara Santos"], sinopse: "Duas irmãs cariocas são separadas nos anos 1950 e passam a vida inteira tentando se reencontrar entre o Rio de Janeiro e a Grécia.", corCapa: "#6a2f45", imagem: "https://image.tmdb.org/t/p/w500/p5Ia6cQXeJRjnHMBmZx0JF9JSwc.jpg" },
  { id: 30, titulo: "Doutor Gama", ano: 2021, diretor: "Jeferson De", genero: "Drama / Biografia", elenco: ["Ângelo Fernandes", "Fabrício Boliveira", "Isabél Zuaa", "Dani Ornellas"], sinopse: "A trajetória de Luiz Gama, advogado negro e abolicionista que usou a lei para libertar centenas de pessoas escravizadas.", corCapa: "#2f4f4f", imagem: "https://upload.wikimedia.org/wikipedia/pt/d/d5/Doutor_Gama.jpg" },
  { id: 31, titulo: "Medida Provisória", ano: 2020, diretor: "Lázaro Ramos", genero: "Ficção / Drama", elenco: ["Alfred Enoch", "Taís Araújo", "Seu Jorge", "Adriana Esteves"], sinopse: "Em um futuro próximo, o governo brasileiro determina que cidadãos negros migrem para a África, e um casal precisa decidir o que fazer.", corCapa: "#1f3b57", imagem: "https://upload.wikimedia.org/wikipedia/pt/e/ed/Medida_Provis%C3%B3ria_2022.jpeg" },
  { id: 32, titulo: "Cabras da Peste", ano: 2021, diretor: "Vitor Brandt", genero: "Comédia / Ação", elenco: ["Matheus Nachtergaele", "Edmilson Filho", "Letícia Lima", "Dira Paes"], sinopse: "Dois policiais desastrados se juntam para caçar o criminoso mais procurado do Ceará e acabam criando confusão atrás de confusão.", corCapa: "#c47f1a", imagem: "https://upload.wikimedia.org/wikipedia/pt/b/b7/Cabras_da_Peste.jpg" },
  { id: 33, titulo: "Cine Holliúdy", ano: 2012, diretor: "Halder Gomes", genero: "Comédia", elenco: ["Edmilson Filho", "Miriam Freeland", "Roberto Bomtempo", "Falcão"], sinopse: "Um exibidor de cinema no interior do Ceará luta para não fechar as portas do seu cine quando a televisão começa a chegar nas casas.", corCapa: "#b5561f", imagem: "https://image.tmdb.org/t/p/w500/rvTLvv9hxJEcdLfbhOWtZP7swkh.jpg" },
  { id: 34, titulo: "7 Prisioneiros", ano: 2021, diretor: "Alexandre Moratto", genero: "Drama", elenco: ["Christian Malheiros", "Rodrigo Santoro", "Vitor Julian", "Clayton Mariano"], sinopse: "Um jovem aceita trabalhar em uma oficina clandestina e descobre que vendeu a própria liberdade em troca de uma promessa de dinheiro.", corCapa: "#2b2b2b", imagem: "https://upload.wikimedia.org/wikipedia/pt/c/cb/7_Prisioneiros.jpg" },
  { id: 35, titulo: "O Homem do Futuro", ano: 2011, diretor: "Cláudio Torres", genero: "Ficção / Comédia", elenco: ["Wagner Moura", "Alinne Moraes", "Gabriel Braga Nunes", "Maria Luísa Mendonça"], sinopse: "Um cientista consegue voltar ao passado para consertar o erro que destruiu sua vida amorosa e descobre que mudar o passado tem consequências.", corCapa: "#2f4f6f", imagem: "https://upload.wikimedia.org/wikipedia/pt/c/cc/Poster_O_Homem_do_Futuro.jpg" },
  { id: 36, titulo: "Vitória", ano: 2024, diretor: "Andrucha Waddington", genero: "Drama", elenco: ["Fernanda Montenegro", "Linn da Quebrada", "Alan Rocha", "Sacha Bali"], sinopse: "Uma jornalista aposentada se envolve com um traficante e busca reconstruir a própria história a partir de dentro de um condomínio no Rio.", corCapa: "#5a3e5a", imagem: "https://image.tmdb.org/t/p/w500/pT1j9Y9bpyYKE3wFpARyNK4NdBe.jpg" },
  { id: 37, titulo: "Gonzaga: De Pai pra Filho", ano: 2012, diretor: "Breno Silveira", genero: "Drama / Música", elenco: ["Chambinho do Acordeon", "Adélio Lima", "Júlio Andrade", "Nanda Costa"], sinopse: "A relação entre Luiz Gonzaga e o filho Gonzaguinha, do sertão pernambucano aos grandes palcos do país.", corCapa: "#7a4a1f", imagem: "https://image.tmdb.org/t/p/w500/8LRWQiq43cIc03sC5ZLGB8zYrjU.jpg" },
  { id: 38, titulo: "2 Filhos de Francisco", ano: 2005, diretor: "Breno Silveira", genero: "Drama / Música", elenco: ["Ângelo Antônio", "Dira Paes", "Márcio Kieling", "Thiago Mendonça"], sinopse: "A história da dupla Zezé di Camargo e Luciano e do sonho do pai Francisco de ver os filhos viverem da música.", corCapa: "#8d5524", imagem: "https://upload.wikimedia.org/wikipedia/pt/f/fb/2_Filhos_de_Francisco.jpg" },
  { id: 39, titulo: "Meu Nome Não É Johnny", ano: 2008, diretor: "Mauro Lima", genero: "Drama / Crime", elenco: ["Selton Mello", "Cleo Pires", "Júlia Lemmertz", "Rafaela Mandelli"], sinopse: "O playboy João Estrella vira traficante de luxo na zona sul do Rio e acaba conhecendo o sistema penitenciário brasileiro.", corCapa: "#37474f", imagem: "https://upload.wikimedia.org/wikipedia/pt/f/f1/Meu_Nome_n%C3%A3o_%C3%89_Johnny.jpg" },
  { id: 40, titulo: "Amarelo Manga", ano: 2002, diretor: "Cláudio Assis", genero: "Drama", elenco: ["Matheus Nachtergaele", "Dira Paes", "Leona Cavalli", "Jonas Bloch"], sinopse: "Personagens à margem vivem paixões, desejos e violências no calor do Recife, em um retrato cru da cidade.", corCapa: "#a67c00", imagem: "https://upload.wikimedia.org/wikipedia/pt/8/8a/Amarelo_Manga.jpg" },
  { id: 41, titulo: "Agente Secreto", ano: 2025, diretor: "Kleber Mendonça Filho", genero: "Suspense / Drama", elenco: ["Wagner Moura", "Maria Fernanda Cândido", "Gabriel Leone", "Carlos Francisco"], sinopse: "Um especialista retorna a Recife em 1977 e descobre que não pode mais confiar em ninguém enquanto tenta escapar do passado.", corCapa: "#2a3a4a", imagem: "https://image.tmdb.org/t/p/w500/t1DQ4XXIqTm5LvUjz8jypN43JjZ.jpg" },
  { id: 42, titulo: "O Ano em Que Meus Pais Saíram de Férias", ano: 2006, diretor: "Cao Hamburger", genero: "Drama", elenco: ["Michel Joelsas", "Germano Haiut", "Daniela Piepszyk", "Paulo Autran"], sinopse: "Mauro, de 12 anos, fica sozinho em São Paulo enquanto os pais são perseguidos pela ditadura, e acompanha a Copa de 1970 com os vizinhos.", corCapa: "#4e5d3a", imagem: "https://upload.wikimedia.org/wikipedia/pt/2/28/O_Ano_em_Que_Meus_Pais_Sairam_de_Ferias.jpg" },
  { id: 43, titulo: "Elena", ano: 2012, diretor: "Petra Costa", genero: "Documentário", elenco: ["Petra Costa", "Elena Andrade", "Li An"], sinopse: "A diretora investiga a memória da irmã e o silêncio da família em um ensaio íntimo sobre perda e saudade.", corCapa: "#5c4a6b", imagem: "https://image.tmdb.org/t/p/w500/8JrhILhgjcvaFQTZ6tdlZBxQ2Hp.jpg" },
  { id: 44, titulo: "Democracia em Vertigem", ano: 2019, diretor: "Petra Costa", genero: "Documentário", elenco: ["Petra Costa", "Dilma Rousseff", "Luiz Inácio Lula da Silva", "Michel Temer"], sinopse: "Um relato pessoal sobre a crise política brasileira, o impeachment de 2016 e os caminhos da democracia no país.", corCapa: "#3d3d3d", imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e0/Democracia_em_Vertigem.jpg" },
  { id: 45, titulo: "A Hora da Estrela", ano: 1985, diretor: "Suzana Amaral", genero: "Drama", elenco: ["Marcélia Cartaxo", "José Dumont", "Tamara Taxman", "Fernanda Montenegro"], sinopse: "Macabéa, uma nordestina pobre no Rio de Janeiro, tenta sobreviver enquanto trabalha como datilógrafa e sonha com uma vida melhor.", corCapa: "#6b5b7a", imagem: "https://upload.wikimedia.org/wikipedia/pt/b/be/A_Hora_da_Estrela_%28filme%29.jpg" },
  { id: 46, titulo: "Durval Discos", ano: 2002, diretor: "Anna Muylaert", genero: "Comédia / Drama", elenco: ["Ary França", "Etty Fraser", "Letícia Sabatella", "Marisa Orth"], sinopse: "O dono de uma loja de discos de vinil é obrigado a vender o negócio e lida com uma mulher misteriosa que aparece em sua vida.", corCapa: "#7a5230", imagem: "https://upload.wikimedia.org/wikipedia/pt/2/2d/Durval_discos.jpg" },
  { id: 47, titulo: "Saneamento Básico, O Filme", ano: 2007, diretor: "Jorge Furtado", genero: "Comédia", elenco: ["Fernanda Torres", "Wagner Moura", "Camila Pitanga", "Lázaro Ramos"], sinopse: "Moradores de uma vila usam o dinheiro destinado ao tratamento de esgoto para gravar um filme e resolver o problema de outra forma.", corCapa: "#3f6b5a", imagem: "https://image.tmdb.org/t/p/w500/jjcruu00GztKSC58oDnZ7WPqNOo.jpg" },
  { id: 48, titulo: "Benzinho", ano: 2018, diretor: "Gustavo Pizzi", genero: "Drama", elenco: ["Karine Teles", "Otávio Müller", "Adriana Esteves", "Konstantinos Sarris"], sinopse: "Irene lida com o marido desempregado, quatro filhos e a partida do filho mais velho para a Europa, em um retrato afetuoso da família.", corCapa: "#4a6b7a", imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e8/Benzinho.jpg" },
  { id: 49, titulo: "Pixinguinha, Um Homem Carinhoso", ano: 2021, diretor: "Denise Saraceni", genero: "Biografia / Música", elenco: ["Seu Jorge", "Taís Araújo", "Bárbara Reis", "Bruno Cabrerizo"], sinopse: "A vida e a música de Pixinguinha, um dos maiores compositores brasileiros do século 20, e sua contribuição para a música popular.", corCapa: "#5d3a1a", imagem: "https://upload.wikimedia.org/wikipedia/pt/0/05/Pixinguinha%2C_Um_Homem_Carinhoso.jpg" },
  { id: 50, titulo: "Colegas", ano: 2012, diretor: "Marcelo Galvão", genero: "Comédia / Aventura", elenco: ["Ariel Goldenberg", "Rita Pokk", "Breno Viola", "Lima Duarte"], sinopse: "Três jovens com síndrome de Down fogem do instituto onde vivem e cruzam o país em busca do mar, em uma aventura cheia de descobertas.", corCapa: "#2f6b4f", imagem: "https://upload.wikimedia.org/wikipedia/pt/a/ae/P%C3%B4ster_Colegas_%282013%29.jpg" }
];

const listasOficiais = [
  {
    id: 9001,
    oficial: true,
    titulo: "50 Essenciais do Cinema Nacional",
    descricao: "A seleção completa do CineCrítica com os 50 filmes brasileiros que todo estudante de cinema precisa conhecer.",
    autorUsuario: "cinecritica",
    autorNome: "CineCrítica",
    corAutor: "#009c3b",
    filmes: filmesBrasileiros.map(function (f) {
      return f.id;
    })
  },
  {
    id: 9002,
    oficial: true,
    titulo: "Grandes Premiados em Festivais",
    descricao: "Filmes brasileiros que conquistaram prêmios e reconhecimento em festivais nacionais e internacionais.",
    autorUsuario: "cinecritica",
    autorNome: "CineCrítica",
    corAutor: "#009c3b",
    filmes: [1, 3, 4, 6, 12, 13, 15, 20, 21, 29, 43, 45]
  },
  {
    id: 9003,
    oficial: true,
    titulo: "Clássicos Inesquecíveis",
    descricao: "Obras fundamentais do Cinema Novo e do cinema brasileiro clássico que marcaram época.",
    autorUsuario: "cinecritica",
    autorNome: "CineCrítica",
    corAutor: "#009c3b",
    filmes: [12, 13, 14, 15, 16, 17, 18, 45]
  }
];

let usuario_logado = null;
try {
  usuario_logado = JSON.parse(localStorage.getItem('cinecritica_logado'));
} catch (e) {
  usuario_logado = null;
}

let termo_busca = "";
let busca_membro = "";
let filtro_genero = "todos";
let filtro_decada = "todos";
let ordenacao_filmes = "padrao";
let filtro_reviews = "recentes";
let nota_selecionada = 0;
let filme_em_avaliacao = 0;
let filme_atual = 0;
let origem_filme = "filmes";
let lista_atual = 0;
let perfil_usuario = "";
let expandir_listas_perfil = false;
let expandir_watch_perfil = false;
let favoritos_edicao = [];
let filme_lista_temp = 0;
let filmes_lista_edicao = [];
let lista_em_edicao = 0;

function gerarCorHex() {
  let letras = "0123456789abcdef";
  let cor = "#";
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function inicialDe(nome) {
  if (!nome) return "?";
  return nome.trim().charAt(0).toUpperCase();
}

function primeiroNome(nome) {
  if (!nome) return "";
  return nome.trim().split(' ')[0];
}

function getMovieById(id) {
  return filmesBrasileiros.find(function (f) {
    return f.id == id;
  });
}

function getUsers() {
  return JSON.parse(localStorage.getItem('cinecritica_users') || '[]');
}

function saveUsers(lista) {
  localStorage.setItem('cinecritica_users', JSON.stringify(lista));
}

function getMinhasReviews() {
  return JSON.parse(localStorage.getItem('cinecritica_reviews') || '[]');
}

function getTodasReviews() {
  let minhas = getMinhasReviews().slice();
  minhas.reverse();
  let normalizadas = minhas.map(function (r) {
    if (!r.autorUsuario) r.autorUsuario = r.autorUsername || 'usuario';
    if (typeof r.spoiler === 'undefined') r.spoiler = false;
    if (!r.frase) r.frase = "";
    return r;
  });
  return normalizadas;
}

function getListaDe(nomeUsuario, chave) {
  if (!nomeUsuario) return [];
  return JSON.parse(localStorage.getItem('cinecritica_' + chave + '_' + nomeUsuario) || '[]');
}

function salvarListaDe(nomeUsuario, chave, lista) {
  if (!nomeUsuario) return;
  localStorage.setItem('cinecritica_' + chave + '_' + nomeUsuario, JSON.stringify(lista));
}

function getLista(chave) {
  if (!usuario_logado) return [];
  return getListaDe(usuario_logado.usuario, chave);
}

function salvarLista(chave, lista) {
  if (!usuario_logado) return;
  salvarListaDe(usuario_logado.usuario, chave, lista);
}

function naLista(chave, valor) {
  return getLista(chave).indexOf(valor) !== -1;
}

function getSeguidores(nomeUsuario) {
  let total = [];
  getUsers().forEach(function (c) {
    if (c.usuario === nomeUsuario) return;
    let seguindo = getListaDe(c.usuario, 'seguindo');
    if (seguindo.indexOf(nomeUsuario) !== -1 && total.indexOf(c.usuario) === -1) {
      total.push(c.usuario);
    }
  });
  return total;
}

function getLikes(idReview) {
  let todos = JSON.parse(localStorage.getItem('cinecritica_likes') || '{}');
  return todos[idReview] || [];
}

function getComentarios(idReview) {
  let todos = JSON.parse(localStorage.getItem('cinecritica_comentarios') || '{}');
  return todos[idReview] || [];
}

function getListasSalvas() {
  return JSON.parse(localStorage.getItem('cinecritica_listas') || '[]');
}

function getTodasListas() {
  let minhas = getListasSalvas().slice();
  minhas.reverse();
  let usuarios = getUsers();
  return minhas.filter(function (l) {
    return usuarios.some(function (u) {
      return u.usuario === l.autorUsuario;
    });
  });
}

function listasDoUsuario(nomeUsuario) {
  return getTodasListas().filter(function (l) {
    return l.autorUsuario === nomeUsuario;
  });
}

function estrelasHTML(nota) {
  let n = Math.round(Number(nota) || 0);
  let html = '<span class="stars">';
  for (let i = 1; i <= 5; i++) {
    if (i <= n) html += '<i class="fa-solid fa-star"></i>';
    else html += '<i class="fa-regular fa-star"></i>';
  }
  html += '</span>';
  return html;
}

function conteudoCapa(filme, comAno) {
  let blocoAno = comAno === false ? '' : `<span class="capa-ano">${filme.ano}</span>`;
  return `<img class="capa-img" src="${filme.imagem}" alt="${filme.titulo}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
      <div class="capa-overlay"><span class="capa-titulo">${filme.titulo}</span>${blocoAno}</div>`;
}

function mediaFilme(id) {
  let avaliacoes = getTodasReviews().filter(function (r) {
    return r.filmeId == id;
  });
  if (avaliacoes.length === 0) return 0;
  let soma = 0;
  avaliacoes.forEach(function (r) {
    soma += Number(r.nota);
  });
  return soma / avaliacoes.length;
}

function temId(lista, id) {
  return lista.some(function (valor) {
    return valor == id;
  });
}

function estatisticasFilme(id) {
  let viram = [];
  let curtiram = [];
  getUsers().forEach(function (u) {
    if (temId(getListaDe(u.usuario, 'vistos'), id) && viram.indexOf(u.usuario) === -1) {
      viram.push(u.usuario);
    }
    if (temId(getListaDe(u.usuario, 'curtidos'), id) && curtiram.indexOf(u.usuario) === -1) {
      curtiram.push(u.usuario);
    }
  });
  getTodasReviews().forEach(function (r) {
    if (r.filmeId == id && r.autorUsuario && viram.indexOf(r.autorUsuario) === -1) {
      viram.push(r.autorUsuario);
    }
  });
  let qtdListas = 0;
  listasOficiais.forEach(function (l) {
    if (temId(l.filmes, id)) qtdListas++;
  });
  getTodasListas().forEach(function (l) {
    if (temId(l.filmes, id)) qtdListas++;
  });
  return { vistos: viram.length, listas: qtdListas, curtidas: curtiram.length };
}

function overlayStatsHTML(filme) {
  let st = estatisticasFilme(filme.id);
  return `<div class="capa-hover">
        <span class="capa-stat"><i class="fa-solid fa-eye olho"></i>${st.vistos}</span>
        <span class="capa-stat"><i class="fa-solid fa-border-all grid-icone"></i>${st.listas}</span>
        <span class="capa-stat"><i class="fa-solid fa-heart coracao"></i>${st.curtidas}</span>
      </div>`;
}

function atualizarNavbar() {
  const auth = document.getElementById('nav-auth');
  const logado = document.getElementById('nav-logado');
  const letra = document.getElementById('avatar-nav-letra');
  const btn = document.getElementById('btn-avatar-nav');
  const nomeNav = document.getElementById('nav-usuario');
  if (usuario_logado) {
    auth.classList.add('escondido');
    logado.classList.remove('escondido');
    letra.textContent = inicialDe(usuario_logado.nome);
    btn.style.backgroundColor = usuario_logado.cor;
    btn.title = primeiroNome(usuario_logado.nome);
    nomeNav.textContent = primeiroNome(usuario_logado.nome);
  } else {
    auth.classList.remove('escondido');
    logado.classList.add('escondido');
    letra.textContent = '';
    btn.style.backgroundColor = '#1c212b';
    btn.title = 'Entrar';
    nomeNav.textContent = '';
  }
}

function irPara(pagina) {
  const paginas = document.querySelectorAll('.page');
  paginas.forEach(function (p) {
    p.classList.remove('ativa');
  });
  const links = document.querySelectorAll('.nav-link');
  links.forEach(function (l) {
    l.classList.remove('ativo');
  });
  const alvo = document.getElementById('page-' + pagina);
  if (alvo) alvo.classList.add('ativa');
  const linkAtivo = document.querySelector('.nav-link[data-page="' + pagina + '"]');
  if (linkAtivo) linkAtivo.classList.add('ativo');
  window.scrollTo(0, 0);
  if (pagina === 'home') renderHome();
  if (pagina === 'filmes') renderFilmes();
  if (pagina === 'filme') renderFilmeDetalhe();
  if (pagina === 'reviews') renderReviews();
  if (pagina === 'listas') renderListas();
  if (pagina === 'lista') renderListaDetalhe();
  if (pagina === 'membros') renderMembros();
  if (pagina === 'perfil') renderPerfil();
  atualizarNavbar();
}

function clicarAvatar() {
  if (usuario_logado) {
    perfil_usuario = usuario_logado.usuario;
    irPara('perfil');
  } else {
    irPara('login');
  }
}

function abrirLoginNav() {
  irPara('login');
  mudarForm('entrar');
}

function abrirCadastroNav() {
  irPara('login');
  mudarForm('cadastrar');
}

function abrirFilme(id) {
  filme_atual = id;
  if (document.getElementById('page-perfil').classList.contains('ativa')) {
    origem_filme = 'perfil';
  } else if (document.getElementById('page-membros').classList.contains('ativa')) {
    origem_filme = 'membros';
  } else if (document.getElementById('page-lista').classList.contains('ativa')) {
    origem_filme = 'lista';
  } else {
    origem_filme = 'filmes';
  }
  irPara('filme');
}

function abrirLista(id) {
  lista_atual = id;
  irPara('lista');
}

function voltarDeFilme() {
  if (origem_filme === 'perfil') {
    irPara('perfil');
  } else if (origem_filme === 'membros') {
    irPara('membros');
  } else if (origem_filme === 'lista') {
    irPara('lista');
  } else {
    irPara('filmes');
  }
}

function abrirPerfil(nomeUsuario) {
  perfil_usuario = nomeUsuario;
  expandir_listas_perfil = false;
  expandir_watch_perfil = false;
  irPara('perfil');
}

function atualizarTelas() {
  renderHome();
  renderReviews();
  renderListas();
  if (filme_atual) renderFilmeDetalhe();
  if (document.getElementById('page-lista').classList.contains('ativa')) renderListaDetalhe();
  if (document.getElementById('page-perfil').classList.contains('ativa')) renderPerfil();
}

function cardFilme(filme) {
  return `
    <div class="card-filme" onclick="abrirFilme(${filme.id})">
      <div class="capa" style="background-color: ${filme.corCapa}">
        ${conteudoCapa(filme)}
        ${overlayStatsHTML(filme)}
      </div>
      <div class="info-filme">
        <h3 class="titulo-filme">${filme.titulo}</h3>
        <p class="meta-filme">${filme.ano} - ${filme.diretor}</p>
      </div>
    </div>`;
}

function cardHome(filme) {
  let media = mediaFilme(filme.id);
  let notaTexto = media > 0 ? media.toFixed(1) : '0.0';
  return `
    <div class="card-filme" onclick="abrirFilme(${filme.id})">
      <div class="capa" style="background-color: ${filme.corCapa}">
        ${conteudoCapa(filme)}
        ${overlayStatsHTML(filme)}
      </div>
      <div class="info-filme">
        <h3 class="titulo-filme">${filme.titulo}</h3>
        <p class="meta-filme">${filme.ano} - ${filme.diretor}</p>
        <div class="linha-nota">${estrelasHTML(media)}<span class="nota-num">${notaTexto}</span></div>
      </div>
    </div>`;
}

function cardMini(filme) {
  let media = mediaFilme(filme.id);
  let notaTexto = media > 0 ? media.toFixed(1) : '0.0';
  return `
    <div class="card-mini" onclick="abrirFilme(${filme.id})">
      <div class="capa" style="background-color: ${filme.corCapa}">
        ${conteudoCapa(filme)}
        ${overlayStatsHTML(filme)}
      </div>
      <div class="mini-info">
        <span class="mini-titulo">${filme.titulo}</span>
        <span class="mini-meta">${filme.ano}</span>
        <div class="linha-nota">${estrelasHTML(media)}<span class="nota-num">${notaTexto}</span></div>
      </div>
    </div>`;
}

function corpoReviewHTML(r) {
  let conteudo = '';
  if (r.frase) {
    conteudo += `<blockquote class="citacao"><i class="fa-solid fa-quote-left"></i>${r.frase}</blockquote>`;
  }
  if (r.texto) {
    conteudo += `<p class="review-texto">${r.texto}</p>`;
  }
  if (conteudo === '') {
    conteudo = `<p class="review-texto">Só registrou a nota, sem texto.</p>`;
  }
  if (r.spoiler) {
    return `<div class="spoiler-wrap">
        <div class="aviso-spoiler" onclick="revelarSpoiler(this)"><i class="fa-solid fa-triangle-exclamation"></i> Esta crítica contém spoilers. Clique para ver.</div>
        <div class="spoiler-texto escondido">${conteudo}</div>
      </div>`;
  }
  return conteudo;
}

function revelarSpoiler(el) {
  el.classList.add('escondido');
  let wrap = el.parentElement;
  let texto = wrap.querySelector('.spoiler-texto');
  if (texto) texto.classList.remove('escondido');
}

function acoesReviewHTML(r) {
  let likes = getLikes(r.id);
  let curtiu = usuario_logado && likes.indexOf(usuario_logado.usuario) !== -1;
  let icone = curtiu ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  return `<div class="review-acoes">
      <button class="btn-like${curtiu ? ' ativo' : ''}" onclick="curtirReview(${r.id})"><i class="${icone}"></i><span>Curtir (${likes.length})</span></button>
    </div>`;
}

function comentariosHTML(r) {
  let lista = getComentarios(r.id);
  let htmlLista = '';
  if (lista.length === 0) {
    htmlLista = '<p class="sem-comentario">Nenhum comentário ainda. Seja o primeiro.</p>';
  } else {
    lista.forEach(function (c, i) {
      let botaoExcluir = '';
      if (usuario_logado && c.autor === usuario_logado.usuario) {
        botaoExcluir = `<button class="btn-excluir" title="Excluir comentário" onclick="excluirComentario(${r.id}, ${i})"><i class="fa-solid fa-trash"></i></button>`;
      }
      htmlLista += `<div class="comentario"><span class="comentario-autor">@${c.autor}</span>${c.texto}<div class="comentario-rodape"><span class="comentario-data">${c.data}</span>${botaoExcluir}</div></div>`;
    });
  }
  return `<div class="review-comentarios">
      <p class="comentarios-titulo"><i class="fa-solid fa-comments"></i> Comentários (${lista.length})</p>
      <div class="comentarios-lista">${htmlLista}</div>
      <div class="comentar-box">
        <input type="text" placeholder="Escreva um comentário...">
        <button class="btn btn-azul" onclick="comentar(${r.id}, this)">Comentar</button>
      </div>
    </div>`;
}

function reviewItemHTML(r, comComentarios) {
  let filme = getMovieById(r.filmeId);
  let titulo = filme ? filme.titulo : 'Filme';
  let ano = filme ? filme.ano : '';
  let cor = filme ? filme.corCapa : '#1c212b';
  let aviso = r.spoiler ? ' <span class="tag-spoiler">contém spoiler</span>' : '';
  let blocoComentarios = comComentarios ? comentariosHTML(r) : '';
  return `
    <div class="review-item">
      <div class="review-poster" style="background-color: ${cor}" onclick="abrirFilme(${r.filmeId})">
        ${filme ? conteudoCapa(filme) + overlayStatsHTML(filme) : ''}
      </div>
      <div class="review-card">
        <div class="review-top">
          <div class="avatar avatar-pequeno" style="background-color: ${r.corAutor}">${inicialDe(r.autorNome)}</div>
          <div class="review-autor-box">
            <span class="review-autor">${primeiroNome(r.autorNome)}</span>
            <span class="review-usuario">@${r.autorUsuario} - ${r.data}</span>
          </div>
          <div class="review-nota">${estrelasHTML(r.nota)}</div>
        </div>
        <p class="review-filme-linha"><i class="fa-solid fa-film"></i> Avaliou <strong>${titulo} (${ano})</strong>${aviso}</p>
        ${corpoReviewHTML(r)}
        ${acoesReviewHTML(r)}
        ${blocoComentarios}
      </div>
    </div>`;
}

function cardLista(l) {
  let capas = '';
  l.filmes.slice(0, 4).forEach(function (id) {
    let f = getMovieById(id);
    if (!f) return;
    capas += `<div class="lista-capa" style="background-color: ${f.corCapa}">
        ${conteudoCapa(f, false)}
      </div>`;
  });
  let curtidas = getLikesLista(l.id).length;
  let botoesDono = '';
  if (!l.oficial && usuario_logado && l.autorUsuario === usuario_logado.usuario) {
    botoesDono = `<div class="lista-dono-acoes">
        <button class="btn-excluir" title="Editar lista" onclick="event.stopPropagation(); abrirEditarLista(${l.id})"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-excluir" title="Excluir lista" onclick="event.stopPropagation(); excluirLista(${l.id})"><i class="fa-solid fa-trash"></i></button>
      </div>`;
  }
  let avatar = l.oficial
    ? '<div class="avatar avatar-pequeno avatar-oficial"><i class="fa-solid fa-certificate"></i></div>'
    : `<div class="avatar avatar-pequeno" style="background-color: ${l.corAutor}">${inicialDe(l.autorNome)}</div>`;
  let autorTexto = l.oficial ? 'CineCrítica' : 'por ' + primeiroNome(l.autorNome);
  let selo = l.oficial ? '<div class="lista-selo-linha"><span class="selo-oficial"><i class="fa-solid fa-certificate"></i> Oficial CineCrítica</span></div>' : '';
  return `
    <div class="card-lista${l.oficial ? ' card-lista-oficial' : ''}" onclick="abrirLista(${l.id})">
      <div class="lista-topo">
        ${avatar}
          <div class="lista-autor-box">
            <span class="lista-titulo">${l.titulo}</span>
            <span class="lista-autor">${autorTexto} - ${l.filmes.length} filmes</span>
          </div>
        ${botoesDono}
      </div>
      ${selo}
      <p class="lista-desc">${l.descricao}</p>
      <div class="lista-capas">${capas}</div>
      <div class="lista-rodape">
        <span class="lista-likes"><i class="fa-solid fa-heart"></i> ${curtidas} curtidas</span>
        <span class="lista-abrir">Abrir lista <i class="fa-solid fa-chevron-right"></i></span>
      </div>
    </div>`;
}

function itemListaHTML(l) {
  return `
    <div class="lista-item" onclick="abrirLista(${l.id})">
      <div class="lista-item-esquerda">
        <div class="lista-item-topo">
          <i class="fa-solid fa-border-all"></i>
          <span class="lista-item-texto">${l.titulo}</span>
        </div>
        <span class="lista-item-desc">${l.descricao}</span>
      </div>
      <span class="lista-item-qtd">${l.filmes.length} filmes</span>
    </div>`;
}

function renderHome() {
  const saudacao = document.getElementById('saudacao-home');
  const textoBoasVindas = document.getElementById('texto-boas-vindas');
  if (usuario_logado) {
    saudacao.textContent = 'Bem-vindo(a) ao CineCrítica, ' + primeiroNome(usuario_logado.nome) + '!';
    textoBoasVindas.textContent = 'Sua plataforma para explorar, avaliar e discutir o melhor do cinema brasileiro. Acompanhe lançamentos, monte suas listas e compartilhe suas críticas com a comunidade.';
  } else {
    saudacao.textContent = 'Bem-vindo(a) ao CineCrítica!';
    textoBoasVindas.textContent = 'O CineCrítica é o espaço dedicado exclusivamente à celebração do cinema nacional. Crie sua conta gratuita para registrar os filmes que já assistiu, organizar sua watchlist, dar notas, montar listas temáticas e conectar-se com outros apaixonados pela cinematografia do Brasil.';
  }
  const recomendadosIds = [1, 4, 6, 2, 29, 5];
  let htmlRec = '';
  recomendadosIds.forEach(function (id) {
    let f = getMovieById(id);
    if (f) htmlRec += cardHome(f);
  });
  document.getElementById('grid-recomendados').innerHTML = htmlRec;

  const premiadosIds = [3, 1, 6, 4, 29, 15];
  let htmlPremiados = '';
  premiadosIds.forEach(function (id) {
    let f = getMovieById(id);
    if (f) htmlPremiados += cardMini(f);
  });
  document.getElementById('grid-premiados').innerHTML = htmlPremiados;

  let todas = getTodasReviews();
  let feed = '';
  if (todas.length === 0) {
    feed = '<p class="vazio">Nenhuma crítica publicada ainda. Crie uma conta e avalie um filme para aparecer aqui.</p>';
  } else {
    todas.slice(0, 4).forEach(function (r) {
      feed += reviewItemHTML(r, false);
    });
  }
  document.getElementById('feed-recentes').innerHTML = feed;
}

function passaDecada(filme, decada) {
  if (decada === 'todos') return true;
  if (decada === 'classicos') return filme.ano < 1970;
  let inicio = parseInt(decada);
  return filme.ano >= inicio && filme.ano <= inicio + 9;
}

function renderFilmes() {
  const grid = document.getElementById('grid-filmes');
  const contador = document.getElementById('contador-filmes');
  let busca = termo_busca.toLowerCase();
  let lista = filmesBrasileiros.filter(function (f) {
    let texto = f.titulo + ' ' + f.diretor + ' ' + f.elenco.join(' ');
    let achouTexto = texto.toLowerCase().indexOf(busca) !== -1;
    let achouGenero = filtro_genero === 'todos' || f.genero.indexOf(filtro_genero) !== -1;
    return achouTexto && achouGenero && passaDecada(f, filtro_decada);
  });
  if (ordenacao_filmes === 'az') {
    lista.sort(function (a, b) {
      return a.titulo.localeCompare(b.titulo, 'pt-BR');
    });
  } else if (ordenacao_filmes === 'za') {
    lista.sort(function (a, b) {
      return b.titulo.localeCompare(a.titulo, 'pt-BR');
    });
  } else if (ordenacao_filmes === 'ano-desc') {
    lista.sort(function (a, b) {
      return b.ano - a.ano;
    });
  } else if (ordenacao_filmes === 'ano-asc') {
    lista.sort(function (a, b) {
      return a.ano - b.ano;
    });
  } else if (ordenacao_filmes === 'genero') {
    lista.sort(function (a, b) {
      return a.genero.localeCompare(b.genero, 'pt-BR');
    });
  } else if (ordenacao_filmes === 'diretor') {
    lista.sort(function (a, b) {
      return a.diretor.localeCompare(b.diretor, 'pt-BR');
    });
  }
  contador.textContent = lista.length + ' de ' + filmesBrasileiros.length + ' filmes encontrados';
  if (lista.length === 0) {
    grid.innerHTML = '<p class="vazio">Nenhum filme encontrado com essa busca e esses filtros.</p>';
    return;
  }
  let html = '';
  lista.forEach(function (f) {
    html += cardFilme(f);
  });
  grid.innerHTML = html;
}

function botaoAcao(chave, id, icone, texto, textoAtivo, funcao) {
  let ativo = naLista(chave, id);
  let rotulo = ativo ? textoAtivo : texto;
  return `<button class="acao-btn${ativo ? ' ativo' : ''}" onclick="${funcao}(${id})"><i class="fa-solid ${icone}"></i><span>${rotulo}</span></button>`;
}

function renderFilmeDetalhe() {
  const alvo = document.getElementById('filme-conteudo');
  let filme = getMovieById(filme_atual);
  if (!filme) {
    alvo.innerHTML = '<p class="vazio">Filme não encontrado.</p>';
    return;
  }
  const btnVoltar = document.getElementById('btn-voltar-filme');
  if (origem_filme === 'perfil') {
    btnVoltar.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Voltar ao Perfil';
  } else if (origem_filme === 'membros') {
    btnVoltar.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Voltar aos Membros';
  } else if (origem_filme === 'lista') {
    btnVoltar.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Voltar para a Lista';
  } else {
    btnVoltar.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Voltar ao catálogo';
  }
  let media = mediaFilme(filme.id);
  let notaTexto = media > 0 ? media.toFixed(1) : 'Sem nota';
  let st = estatisticasFilme(filme.id);
  let reviewsDoFilme = getTodasReviews().filter(function (r) {
    return r.filmeId == filme.id;
  });
  let htmlReviews = '';
  if (reviewsDoFilme.length === 0) {
    htmlReviews = '<p class="vazio">Nenhuma crítica para este filme ainda. Seja o primeiro a registrar!</p>';
  } else {
    reviewsDoFilme.forEach(function (r) {
      htmlReviews += reviewItemHTML(r, true);
    });
  }

  alvo.innerHTML = `
    <div class="filme-detalhe">
      <div class="capa capa-detalhe" style="background-color: ${filme.corCapa}">
        ${conteudoCapa(filme)}
      </div>
      <div class="filme-info">
        <h1 class="filme-titulo">${filme.titulo}</h1>
        <p class="filme-meta">${filme.ano} - Direção: ${filme.diretor}</p>
        <p class="genero-filme">${filme.genero}</p>
        <p class="filme-elenco"><strong>Elenco Principal:</strong> ${filme.elenco.join(', ')}</p>
        <div class="linha-nota">${estrelasHTML(media)}<span class="nota-num">${notaTexto}</span></div>
        <div class="linha-stats-filme">
          <span class="stat-filme"><i class="fa-solid fa-eye olho"></i>${st.vistos} assistiram</span>
          <span class="stat-filme"><i class="fa-solid fa-border-all grid-icone"></i>${st.listas} listas</span>
          <span class="stat-filme"><i class="fa-solid fa-heart coracao"></i>${st.curtidas} curtidas</span>
        </div>
        <p class="sinopse">${filme.sinopse}</p>
        <div class="painel-acoes">
          ${botaoAcao('vistos', filme.id, 'fa-eye', 'Visto', 'Visto', 'marcarVisto')}
          ${botaoAcao('reassistidos', filme.id, 'fa-rotate-right', 'Reassistir', 'Reassistido', 'marcarReassistido')}
          ${botaoAcao('curtidos', filme.id, 'fa-heart', 'Curtir', 'Curtido', 'curtirFilme')}
          ${botaoAcao('watchlist', filme.id, 'fa-bookmark', 'Quero Assistir', 'Na Watchlist', 'toggleWatchlist')}
          <button class="acao-btn" onclick="abrirAdicionarLista(${filme.id})"><i class="fa-solid fa-list"></i><span>Adicionar a uma Lista</span></button>
          <button class="acao-btn acao-principal" onclick="abrirAvaliar(${filme.id})"><i class="fa-solid fa-pen"></i><span>Avaliar / Registrar</span></button>
        </div>
      </div>
    </div>
    <h3 class="titulo-bloco">Avaliações do filme</h3>
    <div class="feed-reviews">${htmlReviews}</div>`;
}

function renderReviews() {
  let todas = getTodasReviews();
  document.getElementById('contador-reviews').textContent = todas.length + ' críticas publicadas pela comunidade';
  if (filtro_reviews === 'antigas') {
    todas = todas.slice().reverse();
  } else if (filtro_reviews === 'maior') {
    todas.sort(function (a, b) {
      return b.nota - a.nota;
    });
  } else if (filtro_reviews === 'menor') {
    todas.sort(function (a, b) {
      return a.nota - b.nota;
    });
  }
  if (todas.length === 0) {
    document.getElementById('feed-reviews').innerHTML = '<p class="vazio">Nenhuma avaliação publicada ainda.</p>';
    return;
  }
  let html = '';
  todas.forEach(function (r) {
    html += reviewItemHTML(r, true);
  });
  document.getElementById('feed-reviews').innerHTML = html;
}

function renderListas() {
  let todas = getTodasListas();
  const grid = document.getElementById('grid-listas');
  let html = '';
  listasOficiais.forEach(function (l) {
    html += cardLista(l);
  });
  if (todas.length === 0) {
    html += '<p class="vazio">Nenhuma lista criada pela comunidade ainda.</p>';
  } else {
    todas.forEach(function (l) {
      html += cardLista(l);
    });
  }
  grid.innerHTML = html;
}

function getListaPorId(id) {
  let oficial = listasOficiais.find(function (l) {
    return l.id == id;
  });
  if (oficial) return oficial;
  return getTodasListas().find(function (l) {
    return l.id == id;
  });
}

function getLikesLista(idLista) {
  let todos = JSON.parse(localStorage.getItem('cinecritica_listas_likes') || '{}');
  return todos[idLista] || [];
}

function getComentariosLista(idLista) {
  let todos = JSON.parse(localStorage.getItem('cinecritica_listas_comentarios') || '{}');
  return todos[idLista] || [];
}

function curtirLista(idLista) {
  if (!usuario_logado) {
    alert('Faça login para curtir as listas da comunidade!');
    irPara('login');
    return;
  }
  let todos = JSON.parse(localStorage.getItem('cinecritica_listas_likes') || '{}');
  if (!todos[idLista]) todos[idLista] = [];
  let pos = todos[idLista].indexOf(usuario_logado.usuario);
  if (pos === -1) todos[idLista].push(usuario_logado.usuario);
  else todos[idLista].splice(pos, 1);
  localStorage.setItem('cinecritica_listas_likes', JSON.stringify(todos));
  renderListaDetalhe();
}

function comentarLista(idLista, botao) {
  if (!usuario_logado) {
    alert('Faça login para comentar!');
    irPara('login');
    return;
  }
  let campo = botao.parentElement.querySelector('input');
  let texto = campo.value.trim();
  if (texto.length < 1) {
    alert('Escreva um comentário antes de enviar!');
    return;
  }
  let todos = JSON.parse(localStorage.getItem('cinecritica_listas_comentarios') || '{}');
  if (!todos[idLista]) todos[idLista] = [];
  todos[idLista].push({
    autor: usuario_logado.usuario,
    nome: usuario_logado.nome,
    cor: usuario_logado.cor,
    texto: texto,
    data: new Date().toLocaleDateString('pt-BR')
  });
  localStorage.setItem('cinecritica_listas_comentarios', JSON.stringify(todos));
  renderListaDetalhe();
}

function excluirLista(idLista) {
  if (!usuario_logado) return;
  let lista = getListaPorId(idLista);
  if (!lista || lista.oficial || lista.autorUsuario !== usuario_logado.usuario) return;
  if (!confirm('Tem certeza que deseja excluir esta lista?')) return;
  let salvas = getListasSalvas().filter(function (l) {
    return l.id != idLista;
  });
  localStorage.setItem('cinecritica_listas', JSON.stringify(salvas));
  if (document.getElementById('page-lista').classList.contains('ativa')) {
    irPara('listas');
  } else {
    renderListas();
  }
  if (document.getElementById('page-perfil').classList.contains('ativa')) renderPerfil();
}

function excluirComentario(idReview, indice) {
  if (!usuario_logado) return;
  let todos = JSON.parse(localStorage.getItem('cinecritica_comentarios') || '{}');
  if (!todos[idReview] || !todos[idReview][indice]) return;
  if (todos[idReview][indice].autor !== usuario_logado.usuario) return;
  todos[idReview].splice(indice, 1);
  localStorage.setItem('cinecritica_comentarios', JSON.stringify(todos));
  atualizarTelas();
}

function excluirComentarioLista(idLista, indice) {
  if (!usuario_logado) return;
  let todos = JSON.parse(localStorage.getItem('cinecritica_listas_comentarios') || '{}');
  if (!todos[idLista] || !todos[idLista][indice]) return;
  if (todos[idLista][indice].autor !== usuario_logado.usuario) return;
  todos[idLista].splice(indice, 1);
  localStorage.setItem('cinecritica_listas_comentarios', JSON.stringify(todos));
  renderListaDetalhe();
}

function comentariosListaHTML(lista) {
  let comentarios = getComentariosLista(lista.id);
  let htmlLista = '';
  if (comentarios.length === 0) {
    htmlLista = '<p class="sem-comentario">Nenhum comentário ainda. Seja o primeiro.</p>';
  } else {
    comentarios.forEach(function (c, i) {
      let botaoExcluir = '';
      if (usuario_logado && c.autor === usuario_logado.usuario) {
        botaoExcluir = `<button class="btn-excluir" title="Excluir comentário" onclick="excluirComentarioLista(${lista.id}, ${i})"><i class="fa-solid fa-trash"></i></button>`;
      }
      htmlLista += `<div class="comentario"><span class="comentario-autor">@${c.autor}</span>${c.texto}<div class="comentario-rodape"><span class="comentario-data">${c.data}</span>${botaoExcluir}</div></div>`;
    });
  }
  return `<div class="lista-comentarios">
      <h3 class="titulo-bloco"><i class="fa-solid fa-comments"></i> Comentários na Lista (${comentarios.length})</h3>
      <div class="comentarios-lista">${htmlLista}</div>
      <div class="comentar-box">
        <input type="text" placeholder="Escreva um comentário sobre a lista...">
        <button class="btn btn-azul" onclick="comentarLista(${lista.id}, this)">Comentar</button>
      </div>
    </div>`;
}

function renderListaDetalhe() {
  const alvo = document.getElementById('lista-conteudo');
  let lista = getListaPorId(lista_atual);
  if (!lista) {
    alvo.innerHTML = '<p class="vazio">Lista não encontrada.</p>';
    return;
  }
  let likes = getLikesLista(lista.id);
  let curtiu = usuario_logado && likes.indexOf(usuario_logado.usuario) !== -1;
  let icone = curtiu ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  let htmlFilmes = '';
  lista.filmes.forEach(function (id) {
    let f = getMovieById(id);
    if (f) htmlFilmes += cardFilme(f);
  });
  if (htmlFilmes === '') {
    htmlFilmes = '<p class="vazio">Esta lista ainda não tem filmes.</p>';
  }
  let blocoAutor = '';
  if (lista.oficial) {
    blocoAutor = `<div class="lista-detalhe-autor">
        <div class="avatar avatar-pequeno avatar-oficial"><i class="fa-solid fa-certificate"></i></div>
        <div class="lista-detalhe-autor-info">
          <span class="selo-oficial"><i class="fa-solid fa-certificate"></i> Oficial CineCrítica</span>
          <span class="lista-autor">${lista.filmes.length} filmes</span>
        </div>
      </div>`;
  } else {
    blocoAutor = `<div class="lista-detalhe-autor">
        <div class="avatar avatar-pequeno" style="background-color: ${lista.corAutor}" onclick="abrirPerfil('${lista.autorUsuario}')">${inicialDe(lista.autorNome)}</div>
        <div class="lista-detalhe-autor-info">
          <span class="link-perfil" onclick="abrirPerfil('${lista.autorUsuario}')">${primeiroNome(lista.autorNome)}</span>
          <span class="lista-autor">@${lista.autorUsuario} - ${lista.filmes.length} filmes</span>
        </div>
      </div>`;
  }
  alvo.innerHTML = `
    <div class="lista-detalhe-topo">
      <h2 class="lista-detalhe-titulo">${lista.titulo}</h2>
      ${blocoAutor}
      <p class="lista-detalhe-desc">${lista.descricao ? lista.descricao : 'Sem descrição.'}</p>
      <div class="lista-detalhe-acoes">
        <button class="btn-like${curtiu ? ' ativo' : ''}" onclick="curtirLista(${lista.id})"><i class="${icone}"></i><span>Curtir Lista (${likes.length})</span></button>
        ${!lista.oficial && usuario_logado && lista.autorUsuario === usuario_logado.usuario ? `<button class="btn btn-editar" onclick="abrirEditarLista(${lista.id})"><i class="fa-solid fa-pen"></i> Editar Lista</button><button class="btn-excluir" onclick="excluirLista(${lista.id})"><i class="fa-solid fa-trash"></i> Excluir Lista</button>` : ''}
      </div>
    </div>
    <h3 class="titulo-bloco">Filmes da Lista</h3>
    <div class="grid-filmes">${htmlFilmes}</div>
    ${comentariosListaHTML(lista)}`;
}

function renderMembros() {
  const lista = document.getElementById('lista-membros');
  let todos = getUsers();
  if (todos.length === 0) {
    lista.innerHTML = '<p class="vazio">Nenhum membro cadastrado ainda. Crie uma conta para aparecer aqui.</p>';
    return;
  }
  let termo = busca_membro.toLowerCase();
  let filtrados = todos.filter(function (m) {
    return m.usuario.toLowerCase().indexOf(termo) !== -1 || m.nome.toLowerCase().indexOf(termo) !== -1;
  });
  if (filtrados.length === 0) {
    lista.innerHTML = '<p class="vazio">Nenhum membro encontrado.</p>';
    return;
  }
  let seguindo = getLista('seguindo');
  let html = '';
  filtrados.forEach(function (m) {
    let eu = usuario_logado && m.usuario === usuario_logado.usuario;
    let vistos = getListaDe(m.usuario, 'vistos').length;
    let qtdListas = listasDoUsuario(m.usuario).length;
    let curtidos = getListaDe(m.usuario, 'curtidos').length;
    let seguidores = getSeguidores(m.usuario).length;
    let seguindoEsse = seguindo.indexOf(m.usuario) !== -1;
    let tag = eu ? '<span class="tag-voce">Você</span>' : '';
    let botao = eu ? '' : `<button class="btn ${seguindoEsse ? 'btn-seguindo' : 'btn-seguir'}" onclick="event.stopPropagation(); toggleSeguir('${m.usuario}')">${seguindoEsse ? 'Seguindo' : 'Seguir'}</button>`;
    html += `
      <div class="membro-item" onclick="abrirPerfil('${m.usuario}')">
        <div class="avatar" style="background-color: ${m.cor}">${inicialDe(m.nome)}</div>
        <div class="membro-info">
          <span class="membro-nome">${primeiroNome(m.nome)}${tag}</span>
          <span class="membro-usuario">@${m.usuario} - ${seguidores} seguidores</span>
          <div class="mini-stats">
            <span class="mini-stat"><i class="fa-solid fa-eye olho"></i>${vistos}</span>
            <span class="mini-stat"><i class="fa-solid fa-border-all grid-icone"></i>${qtdListas}</span>
            <span class="mini-stat"><i class="fa-solid fa-heart coracao"></i>${curtidos}</span>
          </div>
        </div>
        ${botao}
      </div>`;
  });
  lista.innerHTML = html;
}

function getDadosMembro(nomeUsuario) {
  let cadastrado = getUsers().find(function (u) {
    return u.usuario === nomeUsuario;
  });
  if (cadastrado) return cadastrado;
  if (usuario_logado && usuario_logado.usuario === nomeUsuario) return usuario_logado;
  return null;
}

function slotFavorito(filme) {
  return `
    <div class="slot-favorito" style="background-color: ${filme.corCapa}" onclick="abrirFilme(${filme.id})">
      ${conteudoCapa(filme)}
    </div>`;
}

function cardWatchlist(filme, podeRemover) {
  let botao = podeRemover ? `<button class="btn btn-remover" onclick="removerDaWatchlist(${filme.id})">Remover da lista</button>` : '';
  return `
    <div class="card-filme">
      <div class="capa" style="background-color: ${filme.corCapa}" onclick="abrirFilme(${filme.id})">
        ${conteudoCapa(filme)}
        ${overlayStatsHTML(filme)}
      </div>
      <div class="info-filme">
        <h3 class="titulo-filme">${filme.titulo}</h3>
        <p class="meta-filme">${filme.ano} - ${filme.diretor}</p>
        ${botao}
      </div>
    </div>`;
}

function renderPerfil() {
  if (!perfil_usuario) {
    if (usuario_logado) perfil_usuario = usuario_logado.usuario;
    else {
      irPara('login');
      return;
    }
  }
  const alvo = document.getElementById('perfil-conteudo');
  let dados = getDadosMembro(perfil_usuario);
  if (!dados) {
    alvo.innerHTML = '<p class="vazio">Usuário não encontrado.</p>';
    return;
  }
  let ehMeu = usuario_logado && usuario_logado.usuario === perfil_usuario;
  let vistos = getListaDe(perfil_usuario, 'vistos');
  let curtidos = getListaDe(perfil_usuario, 'curtidos');
  let favoritos = getListaDe(perfil_usuario, 'favoritos');
  let watch = getListaDe(perfil_usuario, 'watchlist');
  let seguindo = getListaDe(perfil_usuario, 'seguindo');
  let seguidores = getSeguidores(perfil_usuario);
  let minhasListas = listasDoUsuario(perfil_usuario);
  let reviews = getTodasReviews().filter(function (r) {
    return r.autorUsuario === perfil_usuario;
  });

  let htmlTop5 = '';
  for (let i = 0; i < 5; i++) {
    let f = favoritos[i] ? getMovieById(favoritos[i]) : null;
    htmlTop5 += f ? slotFavorito(f) : '<div class="slot-vazio"><i class="fa-regular fa-heart"></i><span>Vazio</span></div>';
  }

  let curtidosRecentes = curtidos.slice().reverse().slice(0, 4);
  let htmlCurtidosRecentes = '';
  if (curtidosRecentes.length === 0) {
    htmlCurtidosRecentes = '<p class="vazio">Ainda não curtiu nenhum filme.</p>';
  } else {
    htmlCurtidosRecentes = '<div class="grid-mini">' + curtidosRecentes.map(function (id) {
      let f = getMovieById(id);
      return f ? cardMini(f) : '';
    }).join('') + '</div>';
  }

  let idsRecentes = [];
  reviews.forEach(function (r) {
    if (idsRecentes.indexOf(r.filmeId) === -1) idsRecentes.push(r.filmeId);
  });
  idsRecentes = idsRecentes.slice(0, 4);
  let htmlRecentes = '';
  idsRecentes.forEach(function (id) {
    let f = getMovieById(id);
    if (f) htmlRecentes += cardMini(f);
  });
  let blocoRecentes = idsRecentes.length > 0
    ? '<div class="grid-mini">' + htmlRecentes + '</div>'
    : '<p class="vazio">Ainda não avaliou nenhum filme.</p>';

  let htmlReviews = '';
  if (reviews.length === 0) {
    htmlReviews = '<p class="vazio">Nenhuma crítica publicada ainda.</p>';
  } else {
    reviews.forEach(function (r) {
      htmlReviews += reviewItemHTML(r, true);
    });
  }

  let listaVisivel = minhasListas;
  let botaoListas = '';
  if (expandir_listas_perfil) {
    botaoListas = '<button class="btn btn-ver-mais" onclick="verMaisListas()">Ver Menos...</button>';
  } else if (minhasListas.length > 3) {
    listaVisivel = minhasListas.slice(0, 3);
    botaoListas = '<button class="btn btn-ver-mais" onclick="verMaisListas()">Ver Mais...</button>';
  }
  let htmlListas = '';
  if (listaVisivel.length === 0) {
    htmlListas = '<p class="vazio">Nenhuma lista criada ainda.</p>';
  } else {
    listaVisivel.forEach(function (l) {
      htmlListas += itemListaHTML(l);
    });
  }

  let watchVisivel = watch;
  let botaoWatch = '';
  if (expandir_watch_perfil) {
    botaoWatch = '<button class="btn btn-ver-mais" onclick="verMaisWatch()">Ver Menos...</button>';
  } else if (watch.length > 4) {
    watchVisivel = watch.slice(0, 4);
    botaoWatch = '<button class="btn btn-ver-mais" onclick="verMaisWatch()">Ver Mais...</button>';
  }
  let htmlWatch = '';
  if (watchVisivel.length === 0) {
    htmlWatch = '<p class="vazio">Nenhum filme salvo na lista Quero Assistir.</p>';
  } else if (expandir_watch_perfil) {
    htmlWatch = '<div class="grid-filmes">' + watchVisivel.map(function (id) {
      let f = getMovieById(id);
      return f ? cardWatchlist(f, ehMeu) : '';
    }).join('') + '</div>';
  } else {
    htmlWatch = '<div class="grid-mini">' + watchVisivel.map(function (id) {
      let f = getMovieById(id);
      return f ? cardMini(f) : '';
    }).join('') + '</div>';
  }

  let acaoHeader = '';
  if (ehMeu) {
    acaoHeader = '<div class="perfil-acoes"><button class="btn btn-editar" onclick="abrirEditarPerfil()"><i class="fa-solid fa-pen"></i> Editar Perfil</button><button class="btn btn-sair" onclick="sair()">Sair</button><button class="btn btn-excluir" onclick="excluirConta()"><i class="fa-solid fa-trash"></i> Excluir Conta</button></div>';
  } else if (usuario_logado) {
    let seguindoEsse = getLista('seguindo').indexOf(perfil_usuario) !== -1;
    acaoHeader = `<button class="btn ${seguindoEsse ? 'btn-seguindo' : 'btn-seguir'}" onclick="toggleSeguir('${perfil_usuario}')">${seguindoEsse ? 'Seguindo' : 'Seguir'}</button>`;
  } else {
    acaoHeader = '<button class="btn btn-seguir" onclick="irPara(\'login\')">Entrar para seguir</button>';
  }

  alvo.innerHTML = `
    <div class="perfil-header">
      <div class="avatar avatar-grande" style="background-color: ${dados.cor}">${inicialDe(dados.nome)}</div>
      <div class="perfil-dados">
        <h2>${primeiroNome(dados.nome)}</h2>
        <p class="perfil-usuario">@${dados.usuario}</p>
        <p class="perfil-email"><i class="fa-solid fa-envelope"></i> ${dados.email}</p>
        <p class="perfil-bio">${dados.bio ? dados.bio : 'Sem biografia.'}</p>
        <p class="perfil-social"><strong>${seguidores.length}</strong> seguidores - <strong>${seguindo.length}</strong> seguindo</p>
        <div class="perfil-stats">
          <div class="stat-item"><i class="fa-solid fa-eye stat-icone olho"></i><span class="stat-num">${vistos.length}</span><span class="stat-label">Vistos</span></div>
          <div class="stat-item"><i class="fa-solid fa-border-all stat-icone grid-icone"></i><span class="stat-num">${minhasListas.length}</span><span class="stat-label">Listas</span></div>
          <div class="stat-item"><i class="fa-solid fa-heart stat-icone coracao"></i><span class="stat-num">${curtidos.length}</span><span class="stat-label">Curtidos</span></div>
        </div>
      </div>
      ${acaoHeader}
    </div>
    <div class="perfil-secao">
      <h3 class="titulo-bloco titulo-centro">Top 5 Filmes Favoritos</h3>
      ${ehMeu ? '<p class="dica-favoritos">Use o botão "Editar Perfil" para escolher seus 5 filmes favoritos.</p>' : ''}
      <div class="grid-favoritos">${htmlTop5}</div>
    </div>
    <div class="perfil-secao">
      <h3 class="titulo-bloco">Curtidos Recentemente</h3>
      ${htmlCurtidosRecentes}
    </div>
    <div class="perfil-secao">
      <h3 class="titulo-bloco">Mais Recentemente Avaliados</h3>
      ${blocoRecentes}
    </div>
    <div class="perfil-secao">
      <h3 class="titulo-bloco">Todas as Avaliações</h3>
      <div class="feed-reviews">${htmlReviews}</div>
    </div>
    <div class="perfil-secao">
      <h3 class="titulo-bloco">${ehMeu ? 'Minhas Listas' : 'Listas de ' + primeiroNome(dados.nome)}</h3>
      <div class="lista-filmes-area">${htmlListas}</div>
      ${botaoListas}
    </div>
    <div class="perfil-secao">
      <h3 class="titulo-bloco">${ehMeu ? 'Minha Watchlist' : 'Watchlist de ' + primeiroNome(dados.nome)}</h3>
      ${htmlWatch}
      ${botaoWatch}
    </div>`;
}

function verMaisListas() {
  expandir_listas_perfil = !expandir_listas_perfil;
  renderPerfil();
}

function verMaisWatch() {
  expandir_watch_perfil = !expandir_watch_perfil;
  renderPerfil();
}

function abrirEditarPerfil() {
  if (!usuario_logado) return;
  let dados = getDadosMembro(usuario_logado.usuario);
  document.getElementById('edit-nome').value = dados ? dados.nome : usuario_logado.nome;
  document.getElementById('edit-usuario').value = dados ? dados.usuario : usuario_logado.usuario;
  document.getElementById('edit-bio').value = dados && dados.bio ? dados.bio : '';
  document.getElementById('busca-favorito').value = '';
  favoritos_edicao = getLista('favoritos').filter(function (id) {
    return getMovieById(id);
  });
  renderFavoritosEdicao();
  renderSelecaoFavoritos();
  document.getElementById('modal-perfil').classList.remove('escondido');
}

function fecharEditarPerfil() {
  document.getElementById('modal-perfil').classList.add('escondido');
  if (document.getElementById('page-perfil').classList.contains('ativa')) renderPerfil();
}

function renderFavoritosEdicao() {
  let html = '';
  if (favoritos_edicao.length === 0) {
    html = '<p class="sem-comentario">Nenhum filme selecionado ainda.</p>';
  } else {
    favoritos_edicao.forEach(function (id, i) {
      let f = getMovieById(id);
      if (!f) return;
      html += `<div class="fav-edit-item">
          <span class="fav-edit-pos">${i + 1}</span>
          <div class="item-selecao-capa">${conteudoCapa(f, false)}</div>
          <div class="item-selecao-info"><strong>${f.titulo}</strong><span>${f.ano}</span></div>
          <div class="fav-edit-acoes">
            <button class="btn-mover" title="Subir" onclick="moverFavorito(${i}, -1)"><i class="fa-solid fa-arrow-up"></i></button>
            <button class="btn-mover" title="Descer" onclick="moverFavorito(${i}, 1)"><i class="fa-solid fa-arrow-down"></i></button>
            <button class="btn-mover" title="Remover" onclick="removerFavoritoEdicao(${i})"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>`;
    });
  }
  document.getElementById('favoritos-selecionados').innerHTML = html;
}

function renderSelecaoFavoritos() {
  let campo = document.getElementById('busca-favorito');
  let termo = campo ? campo.value.toLowerCase() : '';
  let filtrados = filmesBrasileiros.filter(function (f) {
    let texto = f.titulo + ' ' + f.diretor + ' ' + f.elenco.join(' ');
    return texto.toLowerCase().indexOf(termo) !== -1 && favoritos_edicao.indexOf(f.id) === -1;
  });
  let html = '';
  filtrados.forEach(function (f) {
    html += `<div class="item-selecao">
        <div class="item-selecao-capa">${conteudoCapa(f, false)}</div>
        <div class="item-selecao-info"><strong>${f.titulo}</strong><span>${f.ano} - ${f.genero}</span></div>
        <button class="btn btn-verde" onclick="adicionarFavoritoEdicao(${f.id})">Adicionar</button>
      </div>`;
  });
  if (html === '') {
    html = '<p class="vazio">Nenhum filme encontrado.</p>';
  }
  document.getElementById('lista-selecao-filmes').innerHTML = html;
  document.getElementById('contador-favoritos').textContent = favoritos_edicao.length + ' de 5 filmes selecionados';
}

function adicionarFavoritoEdicao(id) {
  if (favoritos_edicao.length >= 5) {
    alert('Você pode escolher no máximo 5 filmes favoritos!');
    return;
  }
  if (favoritos_edicao.indexOf(id) === -1) favoritos_edicao.push(id);
  renderFavoritosEdicao();
  renderSelecaoFavoritos();
}

function removerFavoritoEdicao(indice) {
  favoritos_edicao.splice(indice, 1);
  renderFavoritosEdicao();
  renderSelecaoFavoritos();
}

function moverFavorito(indice, direcao) {
  let novo = indice + direcao;
  if (novo < 0 || novo >= favoritos_edicao.length) return;
  let temp = favoritos_edicao[indice];
  favoritos_edicao[indice] = favoritos_edicao[novo];
  favoritos_edicao[novo] = temp;
  renderFavoritosEdicao();
}

function atualizarNomeConteudo(nomeUsuario, novoNome) {
  let reviews = getMinhasReviews();
  reviews.forEach(function (r) {
    if (r.autorUsuario === nomeUsuario) r.autorNome = novoNome;
  });
  localStorage.setItem('cinecritica_reviews', JSON.stringify(reviews));
  let listas = getListasSalvas();
  listas.forEach(function (l) {
    if (l.autorUsuario === nomeUsuario) l.autorNome = novoNome;
  });
  localStorage.setItem('cinecritica_listas', JSON.stringify(listas));
  ['cinecritica_comentarios', 'cinecritica_listas_comentarios'].forEach(function (chave) {
    let todos = JSON.parse(localStorage.getItem(chave) || '{}');
    Object.keys(todos).forEach(function (id) {
      todos[id].forEach(function (c) {
        if (c.autor === nomeUsuario) c.nome = novoNome;
      });
    });
    localStorage.setItem(chave, JSON.stringify(todos));
  });
}

function migrarDadosUsuario(antigo, novo, novoNome) {
  let chaves = ['vistos', 'curtidos', 'watchlist', 'favoritos', 'reassistidos', 'seguindo'];
  chaves.forEach(function (chave) {
    let valor = localStorage.getItem('cinecritica_' + chave + '_' + antigo);
    if (valor !== null) {
      localStorage.setItem('cinecritica_' + chave + '_' + novo, valor);
      localStorage.removeItem('cinecritica_' + chave + '_' + antigo);
    }
  });
  let usuarios = getUsers();
  usuarios.forEach(function (u) {
    if (u.usuario === antigo) return;
    let seg = getListaDe(u.usuario, 'seguindo');
    let pos = seg.indexOf(antigo);
    if (pos !== -1) {
      seg[pos] = novo;
      salvarListaDe(u.usuario, 'seguindo', seg);
    }
  });
  ['cinecritica_likes', 'cinecritica_listas_likes'].forEach(function (chave) {
    let todos = JSON.parse(localStorage.getItem(chave) || '{}');
    Object.keys(todos).forEach(function (id) {
      let arr = todos[id];
      let pos = arr.indexOf(antigo);
      if (pos !== -1) {
        arr.splice(pos, 1);
        if (arr.indexOf(novo) === -1) arr.push(novo);
      }
    });
    localStorage.setItem(chave, JSON.stringify(todos));
  });
  atualizarNomeConteudo(antigo, novoNome);
  let reviews = getMinhasReviews();
  reviews.forEach(function (r) {
    if (r.autorUsuario === antigo) r.autorUsuario = novo;
  });
  localStorage.setItem('cinecritica_reviews', JSON.stringify(reviews));
  let listas = getListasSalvas();
  listas.forEach(function (l) {
    if (l.autorUsuario === antigo) l.autorUsuario = novo;
  });
  localStorage.setItem('cinecritica_listas', JSON.stringify(listas));
  ['cinecritica_comentarios', 'cinecritica_listas_comentarios'].forEach(function (chave) {
    let todos = JSON.parse(localStorage.getItem(chave) || '{}');
    Object.keys(todos).forEach(function (id) {
      todos[id].forEach(function (c) {
        if (c.autor === antigo) c.autor = novo;
      });
    });
    localStorage.setItem(chave, JSON.stringify(todos));
  });
}

function salvarPerfilEdicao() {
  if (!usuario_logado) return;
  let nome = document.getElementById('edit-nome').value.trim();
  let usuario = document.getElementById('edit-usuario').value.trim();
  let bio = document.getElementById('edit-bio').value.trim();
  if (!nome || !usuario) {
    alert('Preencha nome e username!');
    return;
  }
  let repetido = getUsers().some(function (u) {
    return u.usuario === usuario && u.usuario !== usuario_logado.usuario;
  });
  if (repetido) {
    alert('Esse username já está em uso!');
    return;
  }
  let antigo = usuario_logado.usuario;
  let usuarios = getUsers();
  usuarios.forEach(function (u) {
    if (u.usuario === antigo) {
      u.nome = nome;
      u.usuario = usuario;
      u.bio = bio;
    }
  });
  saveUsers(usuarios);
  if (usuario !== antigo) {
    migrarDadosUsuario(antigo, usuario, nome);
  } else {
    atualizarNomeConteudo(antigo, nome);
  }
  usuario_logado = { nome: nome, usuario: usuario, email: usuario_logado.email, cor: usuario_logado.cor, bio: bio };
  localStorage.setItem('cinecritica_logado', JSON.stringify(usuario_logado));
  salvarLista('favoritos', favoritos_edicao);
  perfil_usuario = usuario;
  atualizarNavbar();
  fecharEditarPerfil();
  alert('Perfil atualizado com sucesso!');
}

function alternarNaLista(chave, valor) {
  if (!usuario_logado) {
    alert('Você precisa entrar na sua conta para fazer isso!');
    irPara('login');
    return false;
  }
  let lista = getLista(chave);
  let pos = lista.indexOf(valor);
  if (pos === -1) lista.push(valor);
  else lista.splice(pos, 1);
  salvarLista(chave, lista);
  return true;
}

function marcarVisto(id) {
  if (!alternarNaLista('vistos', id)) return;
  renderFilmeDetalhe();
}

function marcarReassistido(id) {
  if (!alternarNaLista('reassistidos', id)) return;
  if (!naLista('vistos', id)) {
    let vistos = getLista('vistos');
    vistos.push(id);
    salvarLista('vistos', vistos);
  }
  renderFilmeDetalhe();
}

function curtirFilme(id) {
  if (!alternarNaLista('curtidos', id)) return;
  renderFilmeDetalhe();
}

function toggleWatchlist(id) {
  if (!alternarNaLista('watchlist', id)) return;
  renderFilmeDetalhe();
  if (document.getElementById('page-perfil').classList.contains('ativa')) renderPerfil();
}

function removerDaWatchlist(id) {
  if (!usuario_logado) return;
  let lista = getLista('watchlist').filter(function (f) {
    return f !== id;
  });
  salvarLista('watchlist', lista);
  renderPerfil();
}

function toggleSeguir(nomeUsuario) {
  if (!usuario_logado) {
    alert('Faça login para seguir outros membros!');
    irPara('login');
    return;
  }
  if (nomeUsuario === usuario_logado.usuario) return;
  let seguindo = getLista('seguindo');
  let pos = seguindo.indexOf(nomeUsuario);
  if (pos === -1) seguindo.push(nomeUsuario);
  else seguindo.splice(pos, 1);
  salvarLista('seguindo', seguindo);
  renderMembros();
  if (document.getElementById('page-perfil').classList.contains('ativa')) renderPerfil();
}

function curtirReview(idReview) {
  if (!usuario_logado) {
    alert('Faça login para curtir as críticas da comunidade!');
    irPara('login');
    return;
  }
  let todos = JSON.parse(localStorage.getItem('cinecritica_likes') || '{}');
  if (!todos[idReview]) todos[idReview] = [];
  let pos = todos[idReview].indexOf(usuario_logado.usuario);
  if (pos === -1) todos[idReview].push(usuario_logado.usuario);
  else todos[idReview].splice(pos, 1);
  localStorage.setItem('cinecritica_likes', JSON.stringify(todos));
  atualizarTelas();
}

function comentar(idReview, botao) {
  if (!usuario_logado) {
    alert('Faça login para comentar!');
    irPara('login');
    return;
  }
  let campo = botao.parentElement.querySelector('input');
  let texto = campo.value.trim();
  if (texto.length < 1) {
    alert('Escreva um comentário antes de enviar!');
    return;
  }
  let todos = JSON.parse(localStorage.getItem('cinecritica_comentarios') || '{}');
  if (!todos[idReview]) todos[idReview] = [];
  todos[idReview].push({
    autor: usuario_logado.usuario,
    nome: usuario_logado.nome,
    cor: usuario_logado.cor,
    texto: texto,
    data: new Date().toLocaleDateString('pt-BR')
  });
  localStorage.setItem('cinecritica_comentarios', JSON.stringify(todos));
  atualizarTelas();
}

function pintarEstrelas() {
  const botoes = document.querySelectorAll('.star-btn');
  botoes.forEach(function (b) {
    let valor = parseInt(b.getAttribute('data-nota'));
    let icone = b.querySelector('i');
    if (valor <= nota_selecionada) {
      b.classList.add('marcada');
      icone.className = 'fa-solid fa-star';
    } else {
      b.classList.remove('marcada');
      icone.className = 'fa-regular fa-star';
    }
  });
}

function setNota(valor) {
  nota_selecionada = valor;
  pintarEstrelas();
}

function atualizarAtalhosModal() {
  const btnVisto = document.getElementById('modal-btn-visto');
  const btnCurtido = document.getElementById('modal-btn-curtido');
  const btnReassistido = document.getElementById('modal-btn-reassistido');
  if (naLista('vistos', filme_em_avaliacao)) btnVisto.classList.add('ativo');
  else btnVisto.classList.remove('ativo');
  if (naLista('curtidos', filme_em_avaliacao)) btnCurtido.classList.add('ativo');
  else btnCurtido.classList.remove('ativo');
  if (naLista('reassistidos', filme_em_avaliacao)) btnReassistido.classList.add('ativo');
  else btnReassistido.classList.remove('ativo');
}

function atalhoRegistrar(chave) {
  if (!usuario_logado || !filme_em_avaliacao) return;
  alternarNaLista(chave, filme_em_avaliacao);
  if (naLista('reassistidos', filme_em_avaliacao) && !naLista('vistos', filme_em_avaliacao)) {
    let vistos = getLista('vistos');
    vistos.push(filme_em_avaliacao);
    salvarLista('vistos', vistos);
  }
  atualizarAtalhosModal();
  renderFilmeDetalhe();
}

function abrirAvaliar(id) {
  if (!usuario_logado) {
    alert('Faça login para avaliar um filme!');
    irPara('login');
    return;
  }
  let filme = getMovieById(id);
  if (!filme) return;
  filme_em_avaliacao = id;
  nota_selecionada = 0;
  document.getElementById('modal-filme-nome').textContent = filme.titulo + ' (' + filme.ano + ')';
  document.getElementById('texto-review').value = '';
  document.getElementById('frase-destaque').value = '';
  document.getElementById('check-spoiler').checked = false;
  pintarEstrelas();
  atualizarAtalhosModal();
  document.getElementById('modal-avaliar').classList.remove('escondido');
}

function fecharAvaliar() {
  document.getElementById('modal-avaliar').classList.add('escondido');
  nota_selecionada = 0;
  filme_em_avaliacao = 0;
}

function salvarReview() {
  if (!usuario_logado) {
    fecharAvaliar();
    irPara('login');
    return;
  }
  if (nota_selecionada < 1) {
    alert('Escolha uma nota de 1 a 5 estrelas!');
    return;
  }
  let texto = document.getElementById('texto-review').value.trim();
  let frase = document.getElementById('frase-destaque').value.trim();
  let spoiler = document.getElementById('check-spoiler').checked;
  let lista = getMinhasReviews();
  lista.push({
    id: Date.now(),
    autorNome: usuario_logado.nome,
    autorUsuario: usuario_logado.usuario,
    corAutor: usuario_logado.cor,
    filmeId: filme_em_avaliacao,
    nota: nota_selecionada,
    spoiler: spoiler,
    frase: frase,
    texto: texto,
    data: new Date().toLocaleDateString('pt-BR')
  });
  localStorage.setItem('cinecritica_reviews', JSON.stringify(lista));
  fecharAvaliar();
  atualizarTelas();
  alert('Registro salvo com sucesso!');
}

function abrirNovaLista() {
  if (!usuario_logado) {
    alert('Faça login para criar suas listas!');
    irPara('login');
    return;
  }
  lista_em_edicao = 0;
  filmes_lista_edicao = [];
  document.getElementById('modal-lista-topo').textContent = 'Criar Nova Lista';
  document.getElementById('lista-titulo').value = '';
  document.getElementById('lista-descricao').value = '';
  document.getElementById('busca-lista-filme').value = '';
  document.getElementById('dropdown-lista').classList.add('escondido');
  document.getElementById('dropdown-lista').innerHTML = '';
  renderSelecionadosLista();
  document.getElementById('modal-lista').classList.remove('escondido');
}

function abrirEditarLista(id) {
  if (!usuario_logado) return;
  let lista = getListaPorId(id);
  if (!lista || lista.oficial || lista.autorUsuario !== usuario_logado.usuario) return;
  lista_em_edicao = lista.id;
  filmes_lista_edicao = lista.filmes.slice();
  document.getElementById('modal-lista-topo').textContent = 'Editar Lista';
  document.getElementById('lista-titulo').value = lista.titulo;
  document.getElementById('lista-descricao').value = lista.descricao;
  document.getElementById('busca-lista-filme').value = '';
  document.getElementById('dropdown-lista').classList.add('escondido');
  document.getElementById('dropdown-lista').innerHTML = '';
  renderSelecionadosLista();
  document.getElementById('modal-lista').classList.remove('escondido');
}

function fecharNovaLista() {
  document.getElementById('modal-lista').classList.add('escondido');
  document.getElementById('dropdown-lista').classList.add('escondido');
  lista_em_edicao = 0;
  filmes_lista_edicao = [];
}

function renderDropdownLista() {
  let campo = document.getElementById('busca-lista-filme');
  let drop = document.getElementById('dropdown-lista');
  let termo = campo.value.toLowerCase().trim();
  if (termo === '') {
    drop.innerHTML = '';
    drop.classList.add('escondido');
    return;
  }
  let achados = filmesBrasileiros.filter(function (f) {
    let texto = (f.titulo + ' ' + f.diretor + ' ' + f.ano + ' ' + f.elenco.join(' ')).toLowerCase();
    return texto.indexOf(termo) !== -1 && filmes_lista_edicao.indexOf(f.id) === -1;
  });
  achados = achados.slice(0, 8);
  if (achados.length === 0) {
    drop.innerHTML = '<p class="sem-comentario">Nenhum filme encontrado.</p>';
    drop.classList.remove('escondido');
    return;
  }
  let html = '';
  achados.forEach(function (f) {
    html += `<div class="dropdown-item" onmousedown="adicionarFilmeListaEdicao(${f.id})">
        <div class="dropdown-capa" style="background-color: ${f.corCapa}"><img class="capa-img" src="${f.imagem}" alt="${f.titulo}" onerror="this.style.display='none'"></div>
        <div class="dropdown-info"><strong>${f.titulo}</strong><span>${f.ano} - ${f.diretor}</span></div>
        <i class="fa-solid fa-plus"></i>
      </div>`;
  });
  drop.innerHTML = html;
  drop.classList.remove('escondido');
}

function fecharDropdownLista() {
  let drop = document.getElementById('dropdown-lista');
  if (drop) drop.classList.add('escondido');
}

function adicionarFilmeListaEdicao(id) {
  if (filmes_lista_edicao.indexOf(id) !== -1) return;
  filmes_lista_edicao.push(id);
  let campo = document.getElementById('busca-lista-filme');
  campo.value = '';
  document.getElementById('dropdown-lista').classList.add('escondido');
  renderSelecionadosLista();
}

function removerFilmeLista(indice) {
  filmes_lista_edicao.splice(indice, 1);
  renderSelecionadosLista();
}

function moverFilmeLista(indice, direcao) {
  let novo = indice + direcao;
  if (novo < 0 || novo >= filmes_lista_edicao.length) return;
  let temp = filmes_lista_edicao[indice];
  filmes_lista_edicao[indice] = filmes_lista_edicao[novo];
  filmes_lista_edicao[novo] = temp;
  renderSelecionadosLista();
}

function renderSelecionadosLista() {
  let alvo = document.getElementById('selecionados-lista');
  let contador = document.getElementById('contador-lista-filmes');
  let html = '';
  if (filmes_lista_edicao.length === 0) {
    html = '<p class="vazio">Nenhum filme adicionado. Use a busca acima para incluir filmes.</p>';
  } else {
    filmes_lista_edicao.forEach(function (id, i) {
      let f = getMovieById(id);
      if (!f) return;
      html += `<div class="item-selecionado">
          <span class="item-selecionado-pos">${i + 1}</span>
          <div class="item-selecionado-capa" style="background-color: ${f.corCapa}">${conteudoCapa(f, false)}</div>
          <div class="item-selecionado-info"><strong>${f.titulo}</strong><span>${f.ano} - ${f.genero}</span></div>
          <div class="item-selecionado-acoes">
            <button class="btn-mover" title="Mover para cima" onclick="moverFilmeLista(${i}, -1)"><i class="fa-solid fa-arrow-up"></i></button>
            <button class="btn-mover" title="Mover para baixo" onclick="moverFilmeLista(${i}, 1)"><i class="fa-solid fa-arrow-down"></i></button>
            <button class="btn-mover btn-mover-remover" title="Remover" onclick="removerFilmeLista(${i})"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>`;
    });
  }
  alvo.innerHTML = html;
  contador.textContent = filmes_lista_edicao.length + ' filmes na lista';
  renderGaleriaLista();
}

function renderGaleriaLista() {
  let alvo = document.getElementById('galeria-lista');
  if (!alvo) return;
  let html = '';
  filmesBrasileiros.forEach(function (f) {
    let sel = filmes_lista_edicao.indexOf(f.id) !== -1;
    let check = sel ? '<span class="galeria-check"><i class="fa-solid fa-check"></i></span>' : '';
    html += `<div class="galeria-item${sel ? ' selecionado' : ''}" onclick="toggleFilmeGaleriaLista(${f.id})">
        <div class="galeria-capa" style="background-color: ${f.corCapa}">${conteudoCapa(f, false)}${check}</div>
        <span class="galeria-titulo">${f.titulo}</span>
      </div>`;
  });
  alvo.innerHTML = html;
}

function toggleFilmeGaleriaLista(id) {
  let pos = filmes_lista_edicao.indexOf(id);
  if (pos === -1) filmes_lista_edicao.push(id);
  else filmes_lista_edicao.splice(pos, 1);
  renderSelecionadosLista();
}

function salvarListaUsuario() {
  if (!usuario_logado) {
    fecharNovaLista();
    irPara('login');
    return;
  }
  let titulo = document.getElementById('lista-titulo').value.trim();
  let descricao = document.getElementById('lista-descricao').value.trim();
  if (!titulo) {
    alert('Dê um título para a sua lista!');
    return;
  }
  if (filmes_lista_edicao.length === 0) {
    alert('Adicione pelo menos um filme para a lista!');
    return;
  }
  let editando = lista_em_edicao;
  let salvas = getListasSalvas();
  if (editando) {
    salvas.forEach(function (l) {
      if (l.id == editando) {
        l.titulo = titulo;
        l.descricao = descricao;
        l.filmes = filmes_lista_edicao.slice();
      }
    });
  } else {
    salvas.push({
      id: Date.now(),
      titulo: titulo,
      descricao: descricao,
      autorUsuario: usuario_logado.usuario,
      autorNome: usuario_logado.nome,
      corAutor: usuario_logado.cor,
      filmes: filmes_lista_edicao.slice()
    });
  }
  localStorage.setItem('cinecritica_listas', JSON.stringify(salvas));
  fecharNovaLista();
  if (editando && lista_atual == editando) renderListaDetalhe();
  renderListas();
  if (document.getElementById('page-perfil').classList.contains('ativa')) renderPerfil();
  alert(editando ? 'Lista atualizada com sucesso!' : 'Lista criada com sucesso!');
}

function abrirAdicionarLista(idFilme) {
  if (!usuario_logado) {
    alert('Faça login para adicionar filmes às suas listas!');
    irPara('login');
    return;
  }
  let filme = getMovieById(idFilme);
  if (!filme) return;
  filme_lista_temp = idFilme;
  document.getElementById('add-lista-filme').textContent = filme.titulo + ' (' + filme.ano + ')';
  let select = document.getElementById('add-lista-select');
  select.innerHTML = '';
  let minhas = listasDoUsuario(usuario_logado.usuario);
  minhas.forEach(function (l) {
    let opt = document.createElement('option');
    opt.value = l.id;
    opt.textContent = l.titulo;
    select.appendChild(opt);
  });
  document.getElementById('add-lista-vazio').textContent = minhas.length === 0 ? 'Você ainda não tem listas. Crie uma nova.' : '';
  document.getElementById('modal-add-lista').classList.remove('escondido');
}

function fecharAdicionarLista() {
  document.getElementById('modal-add-lista').classList.add('escondido');
}

function adicionarFilmeLista() {
  if (!usuario_logado || !filme_lista_temp) return;
  let select = document.getElementById('add-lista-select');
  if (!select.value) {
    alert('Crie uma lista antes de adicionar o filme!');
    return;
  }
  let listas = getListasSalvas();
  let alvo = null;
  listas.forEach(function (l) {
    if (l.id == select.value) alvo = l;
  });
  if (!alvo) return;
  if (alvo.filmes.indexOf(filme_lista_temp) !== -1) {
    alert('Esse filme já está nessa lista!');
    return;
  }
  alvo.filmes.push(filme_lista_temp);
  localStorage.setItem('cinecritica_listas', JSON.stringify(listas));
  fecharAdicionarLista();
  alert('Filme adicionado à lista!');
  if (document.getElementById('page-lista').classList.contains('ativa')) renderListaDetalhe();
  if (document.getElementById('page-perfil').classList.contains('ativa')) renderPerfil();
}

function criarListaComFilme() {
  if (!filme_lista_temp) return;
  let filme = filme_lista_temp;
  fecharAdicionarLista();
  abrirNovaLista();
  adicionarFilmeListaEdicao(filme);
}

function mostrarSenha(idCampo, botao) {
  let campo = document.getElementById(idCampo);
  let icone = botao.querySelector('i');
  if (campo.type === 'password') {
    campo.type = 'text';
    icone.className = 'fa-solid fa-eye-slash';
  } else {
    campo.type = 'password';
    icone.className = 'fa-solid fa-eye';
  }
}

function mudarForm(tipo) {
  const formEntrar = document.getElementById('form-entrar');
  const formCadastrar = document.getElementById('form-cadastrar');
  const tabEntrar = document.getElementById('tab-entrar');
  const tabCadastrar = document.getElementById('tab-cadastrar');
  if (tipo === 'entrar') {
    formEntrar.classList.remove('escondido');
    formCadastrar.classList.add('escondido');
    tabEntrar.classList.add('ativo');
    tabCadastrar.classList.remove('ativo');
  } else {
    formCadastrar.classList.remove('escondido');
    formEntrar.classList.add('escondido');
    tabCadastrar.classList.add('ativo');
    tabEntrar.classList.remove('ativo');
  }
}

function fazerLogin() {
  let user = document.getElementById('login-user').value.trim();
  let senha = document.getElementById('login-senha').value;
  if (!user || !senha) {
    alert('Preencha usuário e senha!');
    return;
  }
  let todos = getUsers();
  let achou = todos.find(function (u) {
    return (u.usuario === user || u.email === user) && u.senha === senha;
  });
  if (!achou) {
    alert('Usuário ou senha inválidos!');
    return;
  }
  usuario_logado = { nome: achou.nome, usuario: achou.usuario, email: achou.email, cor: achou.cor, bio: achou.bio ? achou.bio : '' };
  localStorage.setItem('cinecritica_logado', JSON.stringify(usuario_logado));
  document.getElementById('login-user').value = '';
  document.getElementById('login-senha').value = '';
  perfil_usuario = usuario_logado.usuario;
  alert('Bem-vindo, ' + primeiroNome(usuario_logado.nome) + '!');
  irPara('perfil');
}

function fazerCadastro() {
  let nome = document.getElementById('cad-nome').value.trim();
  let usuario = document.getElementById('cad-user').value.trim();
  let email = document.getElementById('cad-email').value.trim();
  let senha = document.getElementById('cad-senha').value;
  if (!nome || !usuario || !email || !senha) {
    alert('Preencha todos os campos!');
    return;
  }
  if (senha.length < 4) {
    alert('A senha precisa ter no mínimo 4 caracteres.');
    return;
  }
  let lista = getUsers();
  let existe = lista.find(function (u) {
    return u.usuario === usuario;
  });
  if (existe) {
    alert('Esse nome de usuário já está em uso!');
    return;
  }
  let novo = { nome: nome, usuario: usuario, email: email, senha: senha, cor: gerarCorHex(), bio: "" };
  lista.push(novo);
  saveUsers(lista);
  usuario_logado = { nome: novo.nome, usuario: novo.usuario, email: novo.email, cor: novo.cor, bio: novo.bio };
  localStorage.setItem('cinecritica_logado', JSON.stringify(usuario_logado));
  document.getElementById('cad-nome').value = '';
  document.getElementById('cad-user').value = '';
  document.getElementById('cad-email').value = '';
  document.getElementById('cad-senha').value = '';
  perfil_usuario = usuario_logado.usuario;
  alert('Conta criada com sucesso!');
  irPara('perfil');
}

function sair() {
  localStorage.removeItem('cinecritica_logado');
  usuario_logado = null;
  perfil_usuario = "";
  mudarForm('entrar');
  irPara('home');
}

function excluirConta() {
  if (!usuario_logado) return;
  if (!confirm('Tem certeza que deseja excluir sua conta?')) return;
  let usuarios = getUsers().filter(function (u) {
    return u.usuario !== usuario_logado.usuario;
  });
  saveUsers(usuarios);
  let salvas = getListasSalvas().filter(function (l) {
    return l.autorUsuario !== usuario_logado.usuario;
  });
  localStorage.setItem('cinecritica_listas', JSON.stringify(salvas));
  localStorage.removeItem('cinecritica_logado');
  usuario_logado = null;
  perfil_usuario = "";
  mudarForm('entrar');
  irPara('home');
  alert('Conta excluída com sucesso.');
}

function carregarGeneros() {
  let select = document.getElementById('filtro-genero');
  let generos = [];
  filmesBrasileiros.forEach(function (f) {
    let partes = f.genero.split(' / ');
    partes.forEach(function (g) {
      if (generos.indexOf(g) === -1) generos.push(g);
    });
  });
  generos.sort(function (a, b) {
    return a.localeCompare(b, 'pt-BR');
  });
  generos.forEach(function (g) {
    let opt = document.createElement('option');
    opt.value = g;
    opt.textContent = g;
    select.appendChild(opt);
  });
}

function init() {
  carregarGeneros();

  const links = document.querySelectorAll('.nav-link');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      irPara(this.getAttribute('data-page'));
    });
  });

  document.getElementById('input-busca').addEventListener('input', function (e) {
    termo_busca = e.target.value;
    renderFilmes();
  });

  document.getElementById('filtro-genero').addEventListener('change', function (e) {
    filtro_genero = e.target.value;
    renderFilmes();
  });

  document.getElementById('filtro-decada').addEventListener('change', function (e) {
    filtro_decada = e.target.value;
    renderFilmes();
  });

  document.getElementById('filtro-ordem').addEventListener('change', function (e) {
    ordenacao_filmes = e.target.value;
    renderFilmes();
  });

  document.getElementById('filtro-reviews').addEventListener('change', function (e) {
    filtro_reviews = e.target.value;
    renderReviews();
  });

  document.getElementById('input-busca-membro').addEventListener('input', function (e) {
    busca_membro = e.target.value;
    renderMembros();
  });

  const botoesEstrela = document.querySelectorAll('.star-btn');
  botoesEstrela.forEach(function (b) {
    b.addEventListener('click', function () {
      setNota(parseInt(this.getAttribute('data-nota')));
    });
  });

  atualizarNavbar();
  irPara('home');
}

document.addEventListener('DOMContentLoaded', init);
