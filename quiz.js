(() => {
      const questions = [
        {
          dimension: 'Entraide et soutien',
          scenario: "Un membre de votre équipe prend du retard et semble dépassé. Que faites-vous?",
          options: [
            { text: "Je lui demande si je peux l'aider tout en m'assurant de respecter mes propres responsabilités.", score: 2, note: "Vous soutenez votre collègue tout en gardant les responsabilités de chacun en vue." },
            { text: "Je termine d'abord tout mon travail et je l'aide seulement s'il reste du temps.", score: 1, note: "Vous protégez vos propres responsabilités, mais l'entraide arrive assez tard." },
            { text: "Je me concentre uniquement sur mes tâches; chacun doit gérer son propre travail.", score: 0, note: "Cette approche limite l'entraide et peut empêcher l'équipe d'atteindre son objectif commun." }
          ]
        },
        {
          dimension: 'Écoute et inclusion',
          scenario: "Pendant une discussion, une personne de l'équipe parle très peu, même si le sujet la concerne directement. Que faites-vous?",
          options: [
            { text: "Je lui donne une occasion de s'exprimer et j'écoute son point de vue.", score: 2, note: "Vous favorisez une participation plus inclusive et donnez de la place aux différentes perspectives." },
            { text: "Je continue la discussion; cette personne parlera si elle en ressent le besoin.", score: 1, note: "Vous laissez la porte ouverte, mais sans créer activement un espace pour sa participation." },
            { text: "Je préfère avancer rapidement avec les personnes qui participent déjà.", score: 0, note: "L'équipe risque de perdre une perspective utile et de moins bien inclure tous ses membres." }
          ]
        },
        {
          dimension: 'Ouverture et compromis',
          scenario: "Un collègue propose une façon de faire très différente de la vôtre. Quelle est votre première réaction?",
          options: [
            { text: "Je pose des questions pour comprendre son idée avant de comparer les deux approches.", score: 2, note: "Vous restez ouvert à une autre perspective avant de décider quelle approche sert le mieux l'équipe." },
            { text: "J'explique d'abord pourquoi mon idée me semble meilleure, puis j'écoute la sienne.", score: 1, note: "Vous êtes prêt à écouter, mais votre propre solution demeure votre point de départ." },
            { text: "J'essaie surtout de convaincre l'équipe d'utiliser ma façon de faire.", score: 0, note: "Cette réaction laisse peu de place à la collaboration et à la recherche d'un compromis." }
          ]
        },
        {
          dimension: 'Reconnaissance et rétroaction',
          scenario: "Votre équipe reçoit des félicitations pour un projet auquel plusieurs personnes ont contribué. Que faites-vous?",
          options: [
            { text: "Je souligne clairement la contribution des autres membres de l'équipe.", score: 2, note: "Partager la reconnaissance renforce la confiance et le sentiment d'appartenance à l'équipe." },
            { text: "J'accepte les félicitations et je mentionne brièvement que c'était un travail d'équipe.", score: 1, note: "Vous reconnaissez l'équipe, mais vous pourriez davantage mettre en valeur les contributions des autres." },
            { text: "Je parle surtout de ma propre contribution au projet.", score: 0, note: "Mettre l'accent sur son propre mérite peut réduire le sentiment de réussite collective." }
          ]
        },
        {
          dimension: 'Reconnaissance et rétroaction',
          scenario: "Un collègue vous donne une rétroaction constructive sur votre façon de travailler. Comment réagissez-vous?",
          options: [
            { text: "J'écoute, je pose des questions au besoin et je réfléchis à ce que je peux améliorer.", score: 2, note: "Vous utilisez la rétroaction comme une occasion d'apprentissage et d'amélioration." },
            { text: "J'écoute poliment, mais je ne change rien à moins que mon superviseur me le demande.", score: 1, note: "Vous accueillez la rétroaction, mais vous l'utilisez peu pour ajuster votre travail." },
            { text: "Je me défends immédiatement pour expliquer pourquoi ma façon de faire est correcte.", score: 0, note: "Une réaction défensive peut rendre les échanges plus difficiles et limiter l'apprentissage." }
          ]
        },
        {
          dimension: 'Objectifs communs et responsabilité',
          scenario: "Deux membres de l'équipe ne s'entendent pas sur la façon de poursuivre un projet. Que faites-vous?",
          options: [
            { text: "Je ramène la discussion vers l'objectif commun et j'aide à chercher une solution acceptable pour tous.", score: 2, note: "Vous recentrez le désaccord sur l'objectif commun et la recherche de solution." },
            { text: "Je demande rapidement au responsable de décider pour nous.", score: 1, note: "Cette option peut régler la situation, mais elle donne moins de place à la résolution collaborative." },
            { text: "J'évite de m'en mêler jusqu'à ce que le désaccord disparaisse.", score: 0, note: "Éviter le problème peut laisser le conflit nuire au fonctionnement de l'équipe." }
          ]
        },
        {
          dimension: 'Entraide et soutien',
          scenario: "Vous remarquez que la charge de travail est devenue très inégale dans l'équipe. Que faites-vous?",
          options: [
            { text: "J'en parle respectueusement avec l'équipe pour voir comment redistribuer le travail.", score: 2, note: "Vous cherchez une solution collective et équitable plutôt que de laisser le problème s'installer." },
            { text: "Je prends davantage de travail moi-même pour éviter un conflit.", score: 1, note: "Vous aidez l'équipe, mais sans traiter la cause du déséquilibre." },
            { text: "Je me plains de la situation à d'autres collègues sans en parler à l'équipe.", score: 0, note: "Cette réaction ne règle pas le problème et peut créer davantage de tension." }
          ]
        },
        {
          dimension: 'Écoute et inclusion',
          scenario: "Un membre de l'équipe a une façon de communiquer ou de travailler différente de la vôtre. Comment vous adaptez-vous?",
          options: [
            { text: "Je cherche à comprendre ses besoins et j'ajuste ma façon de collaborer lorsque c'est possible.", score: 2, note: "Vous reconnaissez que les différences peuvent demander de l'adaptation pour bien travailler ensemble." },
            { text: "Je reste poli, mais je préfère que tout le monde travaille de la même façon.", score: 1, note: "Vous demeurez respectueux, mais avec peu de souplesse face aux différences." },
            { text: "Je considère que c'est à cette personne de s'adapter au reste de l'équipe.", score: 0, note: "Cette approche limite l'inclusion et peut empêcher l'équipe de profiter de perspectives différentes." }
          ]
        },
        {
          dimension: 'Objectifs communs et responsabilité',
          scenario: "Vous réalisez que votre partie du projet risque de ne pas être prête à temps. Que faites-vous?",
          options: [
            { text: "J'avise l'équipe rapidement et je propose un plan pour réduire les conséquences du retard.", score: 2, note: "Vous prenez vos responsabilités et donnez à l'équipe le temps de s'adapter." },
            { text: "Je travaille plus vite en espérant pouvoir terminer sans avoir à en parler.", score: 1, note: "Vous essayez de régler le problème, mais l'équipe ne peut pas se préparer si le risque reste caché." },
            { text: "J'attends la date limite avant d'expliquer que je n'ai pas terminé.", score: 0, note: "Informer l'équipe trop tard peut nuire au travail des autres et à l'objectif commun." }
          ]
        },
        {
          dimension: 'Ouverture et compromis',
          scenario: "L'équipe choisit une solution différente de celle que vous préfériez. Que faites-vous?",
          options: [
            { text: "Je soutiens la décision de l'équipe et je contribue pleinement à sa réussite.", score: 2, note: "Vous êtes capable de mettre l'objectif collectif devant votre préférence personnelle." },
            { text: "J'accepte la décision, mais je participe seulement à ce qui m'est demandé.", score: 1, note: "Vous respectez la décision, mais votre engagement envers la solution collective reste limité." },
            { text: "Je continue d'essayer de prouver que mon idée aurait été meilleure.", score: 0, note: "Continuer à contester la décision peut réduire la cohésion et ralentir le travail de l'équipe." }
          ]
        }
      ];

      const dimensions = [
        'Entraide et soutien',
        'Écoute et inclusion',
        'Ouverture et compromis',
        'Reconnaissance et rétroaction',
        'Objectifs communs et responsabilité'
      ];

      const dimensionTips = {
        'Entraide et soutien': "Lors de votre prochaine activité, repérez une occasion d'offrir de l'aide ou de vérifier si la charge de travail est bien répartie.",
        'Écoute et inclusion': "Lors de votre prochaine discussion, invitez activement une personne plus discrète à partager son point de vue.",
        'Ouverture et compromis': "La prochaine fois qu'une idée différente de la vôtre est proposée, posez au moins une question avant de défendre votre propre solution.",
        'Reconnaissance et rétroaction': "Lors de votre prochain projet, reconnaissez clairement la contribution d'un collègue ou demandez une rétroaction précise sur votre travail.",
        'Objectifs communs et responsabilité': "Au prochain imprévu, communiquez rapidement avec l'équipe et ramenez la discussion vers l'objectif commun."
      };

      const dimensionStrengths = {
        'Entraide et soutien': "Vous semblez attentif au soutien des autres et à une répartition équitable du travail.",
        'Écoute et inclusion': "Vous créez de l'espace pour différentes perspectives et vous vous adaptez aux personnes avec qui vous travaillez.",
        'Ouverture et compromis': "Vous êtes disposé à examiner d'autres idées et à soutenir les décisions collectives.",
        'Reconnaissance et rétroaction': "Vous valorisez la contribution des autres et vous utilisez la rétroaction pour progresser.",
        'Objectifs communs et responsabilité': "Vous gardez l'objectif commun en vue et vous communiquez lorsque votre travail peut avoir un impact sur l'équipe."
      };

      const els = {
        intro: document.getElementById('intro-view'),
        quiz: document.getElementById('quiz-view'),
        results: document.getElementById('results-view'),
        start: document.getElementById('start-btn'),
        progressLabel: document.getElementById('progress-label'),
        progressPercent: document.getElementById('progress-percent'),
        progressBar: document.getElementById('progress-bar'),
        dimensionPill: document.getElementById('dimension-pill'),
        scenario: document.getElementById('scenario'),
        answers: document.getElementById('answers'),
        reflection: document.getElementById('reflection'),
        back: document.getElementById('back-btn'),
        next: document.getElementById('next-btn'),
        score: document.getElementById('score'),
        resultTitle: document.getElementById('result-title'),
        resultSummary: document.getElementById('result-summary'),
        dimensionResults: document.getElementById('dimension-results'),
        strength: document.getElementById('strength'),
        challenge: document.getElementById('challenge'),
        restart: document.getElementById('restart-btn'),
        print: document.getElementById('print-btn')
      };

      let index = 0;
      let selected = Array(questions.length).fill(null);

      function show(view) {
        [els.intro, els.quiz, els.results].forEach(v => v.classList.add('hidden'));
        view.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      function renderQuestion() {
        const q = questions[index];
        const pct = Math.round(((index + 1) / questions.length) * 100);
        els.progressLabel.textContent = `Situation ${index + 1} sur ${questions.length}`;
        els.progressPercent.textContent = `${pct} %`;
        els.progressBar.style.width = `${pct}%`;
        els.dimensionPill.textContent = q.dimension;
        els.scenario.textContent = q.scenario;
        els.answers.innerHTML = '';
        els.reflection.classList.add('hidden');
        els.reflection.innerHTML = '';

        q.options.forEach((option, optionIndex) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'answer';
          btn.setAttribute('role', 'radio');
          btn.setAttribute('aria-checked', selected[index] === optionIndex ? 'true' : 'false');
          btn.textContent = option.text;
          if (selected[index] === optionIndex) btn.classList.add('selected');
          btn.addEventListener('click', () => {
            selected[index] = optionIndex;
            renderQuestion();
          });
          els.answers.appendChild(btn);
        });

        if (selected[index] !== null) {
          const choice = q.options[selected[index]];
          els.reflection.innerHTML = `<strong>À retenir :</strong> ${choice.note}`;
          els.reflection.classList.remove('hidden');
        }

        els.back.disabled = index === 0;
        els.next.disabled = selected[index] === null;
        els.next.textContent = index === questions.length - 1 ? 'Voir mon bilan' : 'Continuer';
      }

      function buildResults() {
        let total = 0;
        const scores = Object.fromEntries(dimensions.map(d => [d, 0]));
        questions.forEach((q, i) => {
          const score = q.options[selected[i]].score;
          total += score;
          scores[q.dimension] += score;
        });

        els.score.textContent = total;
        if (total >= 16) {
          els.resultTitle.textContent = 'Vous contribuez activement à votre équipe';
          els.resultSummary.textContent = "Vos réponses montrent plusieurs habitudes qui favorisent une collaboration saine : soutien des autres, ouverture aux différentes perspectives, responsabilité et recherche de solutions communes.";
        } else if (total >= 10) {
          els.resultTitle.textContent = 'Vous avez de bonnes bases de collaboration';
          els.resultSummary.textContent = "Vous démontrez déjà plusieurs comportements positifs. Certaines situations vous offrent toutefois de bonnes occasions de renforcer vos habitudes de travail en équipe.";
        } else {
          els.resultTitle.textContent = 'Vous avez des occasions concrètes de progresser';
          els.resultSummary.textContent = "La collaboration est une compétence qui se développe avec la pratique. Vos réponses peuvent vous aider à choisir quelques comportements simples à essayer dans votre prochaine équipe.";
        }

        els.dimensionResults.innerHTML = '';
        dimensions.forEach(d => {
          const row = document.createElement('div');
          row.className = 'dimension-row';
          const pct = (scores[d] / 4) * 100;
          row.innerHTML = `
            <div class="dimension-head"><span>${d}</span><span>${scores[d]}/4</span></div>
            <div class="dimension-track" aria-label="${d} : ${scores[d]} sur 4"><div class="dimension-fill" style="width:${pct}%"></div></div>`;
          els.dimensionResults.appendChild(row);
        });

        const ordered = [...dimensions].sort((a, b) => scores[a] - scores[b]);
        const focus = ordered[0];
        const strength = [...dimensions].sort((a, b) => scores[b] - scores[a])[0];
        els.challenge.textContent = dimensionTips[focus];
        els.strength.textContent = dimensionStrengths[strength];
      }

      els.start.addEventListener('click', () => {
        index = 0;
        selected = Array(questions.length).fill(null);
        renderQuestion();
        show(els.quiz);
      });

      els.back.addEventListener('click', () => {
        if (index > 0) {
          index -= 1;
          renderQuestion();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });

      els.next.addEventListener('click', () => {
        if (selected[index] === null) return;
        if (index === questions.length - 1) {
          buildResults();
          show(els.results);
        } else {
          index += 1;
          renderQuestion();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });

      els.restart.addEventListener('click', () => {
        index = 0;
        selected = Array(questions.length).fill(null);
        show(els.intro);
      });

      els.print.addEventListener('click', () => window.print());
    })();
