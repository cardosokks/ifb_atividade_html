const djs = [
            {
                posicao: 1,
                nome: "Martin Garrix",
                descricao: " - DJ e produtor holandês, famoso por hits como Animals e Scared to Be Lonely. Ele é um dos nomes mais influentes da música eletrônica.",
                foto: "images/perfil-garrix.jpg"
            },
            {
                posicao: 2,
                nome: "David Guetta",
                descricao: " - DJ francês que ajudou a popularizar a EDM mundialmente. Conhecido por colaborações com artistas como Sia e Usher.",
                foto: "images/perfil-guetta.jpg"
            },
            {
                posicao: 3,
                nome: "Dimitri Vegas & Like Mike",
                descricao: " - Duo belga que domina festivais como Tomorrowland, trazendo um som energético e envolvente.",
                foto: "images/perfil-dimitri.jpg"
            },
            {
                posicao: 4,
                nome: "Alok",
                descricao: " - DJ brasileiro que mistura elementos de house e bass music, sendo um dos artistas mais populares do país.",
                foto: "images/perfil-alok.jpg"
            },
            {
                posicao: 5,
                nome: "Vintage Culture",
                descricao: " - Outro grande nome brasileiro, conhecido por seu estilo deep house e remixes de sucessos internacionais.",
                foto: "images/perfil-vintage.jpg"
            },
            {
                posicao: 6,
                nome: "Fisher",
                descricao: " - DJ australiano que ganhou fama com Losing It, trazendo um som vibrante e dançante.",
                foto: "images/perfil-fisher.jpg"
            },
            {
                posicao: 7,
                nome: "Marshmello",
                descricao: " - DJ americano que se destaca pelo visual icônico com capacete branco e por sucessos como Happier e Alone.",
                foto: "images/perfil-marshmello.jpg"
            },
            {
                posicao: 8,
                nome: "Tiësto",
                descricao: " - Lenda da música eletrônica, com uma carreira que atravessa décadas e influenciou gerações de DJs.",
                foto: "images/perfil-tiesto.jpg"
            },
            {
                posicao: 9,
                nome: "Calvin Harris",
                descricao: " - DJ escocês conhecido por suas colaborações com grandes artistas pop e por hits como Summer e This Is What You Came For.",
                foto: "images/perfil-calvin.jpg"
            },
            {
                posicao: 10,
                nome: "Skrillex",
                descricao: " - DJ e produtor americano que revolucionou o dubstep e é conhecido por sua energia explosiva em shows ao vivo.",
                foto: "images/perfil-skrillex.jpg"
            }
        ];

        const main = document.querySelector(".main-content");

        djs.forEach(dj => {
            const contentDiv = document.createElement("div");
            contentDiv.className = "content";

            contentDiv.innerHTML = `
                <div class="position ${"th"+ dj.posicao}">
                    <h1 class="th"># ${dj.posicao}</h1><h1>${dj.nome}</h1>
                </div>
                <div class="subcontent">
                    <div class="profile">
                        <img src="${dj.foto}" alt="DJ ${dj.nome}">
                    </div>
                    <p>
                        <b>${dj.nome}</b> ${dj.descricao}
                    </p>
                </div>
            `;

            main.appendChild(contentDiv);
        });