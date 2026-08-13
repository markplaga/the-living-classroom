"use client";

import { useState } from "react";

const notes = [
  {
    type: "Playmaking",
    grade: "Fifth grade",
    title: "The Conference of the Birds",
    text: "A Persian mystery play shaped through Attar’s poem, twelve speaking roles, live music, lantern light, and seven valleys of colored silk.",
    tone: "rose",
    image: "/images/note-playmaking.webp",
    imageAlt: "Wet-on-wet watercolor of a Persian lantern, birds, colored silks, and Mount Qaf at twilight",
  },
  {
    type: "Classroom life",
    grade: "Grades four & five",
    title: "One community, two grades",
    text: "Rhythm, room design, and the practical art of holding two distinct classes without losing the feeling of a shared whole.",
    tone: "ochre",
    image: "/images/note-rhythm.webp",
    imageAlt: "Watercolor still life of two main lesson books, beeswax blocks, chalk, and green silk",
  },
  {
    type: "Social practice",
    grade: "All grades",
    title: "Belonging is something we make",
    text: "Small, repeatable practices for noticing isolation, repairing harm, and helping every child become a needed member of the class.",
    tone: "sage",
    image: "/images/note-belonging.webp",
    imageAlt: "Watercolor of wooden figures forming a welcoming circle with one figure approaching",
  },
];

const libraryItems = [
  { category: "Curriculum", grade: "Grade 5", title: "Botany as relationship", description: "A block arc that moves from encounter and gesture to exact observation, drawing, and scientific language." },
  { category: "Playmaking", grade: "Grade 5", title: "The Conference of the Birds", description: "Roles, valley colors, live music, staging language, and ways to keep a large spiritual story child-centered." },
  { category: "Curriculum", grade: "Grade 4", title: "Fractions you can feel", description: "Movement, handwork, food, story, and pictorial practice before abstraction." },
  { category: "Belonging", grade: "All grades", title: "A map of the social field", description: "A quiet weekly practice for noticing centers, edges, alliances, and the children who are becoming invisible." },
  { category: "Class rhythm", grade: "Grades 4–5", title: "Two classes, one breathing day", description: "A sample rhythm for separate main lessons, shared rituals, transitions, and limited support-teacher time." },
  { category: "Playmaking", grade: "All grades", title: "Casting without creating a hierarchy", description: "How to distribute challenge, visibility, movement, music, and responsibility rather than focusing merely on line counts." },
  { category: "Belonging", grade: "All grades", title: "After harm: the return to community", description: "A restorative sequence that protects the harmed child without turning another child into the class problem." },
  { category: "Teacher practice", grade: "For adults", title: "The evening review, renewed", description: "A brief observation practice that separates what happened from the story we immediately told about it." },
  { category: "Curriculum", grade: "Grades 4–5", title: "Main lesson pages with many doorways", description: "Ways to preserve beauty and rigor while supporting dysgraphia, processing differences, and varied forms of expression." },
];

const categories = ["All", "Curriculum", "Playmaking", "Belonging", "Class rhythm", "Teacher practice"];

const yearHighlights = [
  {
    number: "01",
    title: "Two grades, one social whole",
    text: "Third and fourth grade kept distinct main lessons while sharing morning verse, songs, meals, movement, closing, and the growing identity of a “Forest of 20.”",
  },
  {
    number: "02",
    title: "Work that became real",
    text: "The shelter block became a museum; practical mathematics became a Third Grade Store; farming, textiles, building, geography, and writing met one another through purposeful work.",
  },
  {
    number: "03",
    title: "Story entered the room",
    text: "Plays, seasonal stories, verses, music, and movement carried academic and social work. This included Corn Maidens of Hawikuh and a year of class-created performance.",
  },
  {
    number: "04",
    title: "The class became curriculum",
    text: "Parent evenings, home visits, careful observation, support planning, class councils, and repeated social repair were not additions to teaching. They were part of the teaching itself.",
  },
];

const inclusionPaths = [
  {
    label: "Neurodivergence",
    title: "Change the environment as well as the expectation.",
    text: "Fidgets, movement, quiet work, errands, reduced writing load, multiple forms of response, sensory awareness, and regulation supports can preserve rigor while widening access.",
    practices: ["Observe before interpreting", "Normalize useful supports", "Offer meaningful participation", "Keep diagnosis from becoming destiny"],
  },
  {
    label: "LGBTQ+ belonging",
    title: "Human dignity is not an extracurricular topic.",
    text: "Names, pronouns, family belonging, representation, adult intervention, and repair belong to the culture of a school. Developmental appropriateness must never become a reason to postpone dignity.",
    practices: ["Respect names and pronouns", "Welcome many forms of family", "Interrupt bias without spectacle", "Let children experience belonging"],
  },
  {
    label: "Behavior & social life",
    title: "Warmth and boundaries belong together.",
    text: "Behavior carries information, but it also affects a community. The teacher protects the group, looks beneath the behavior, and creates a concrete path toward accountability and return.",
    practices: ["Disapprove of harm without shaming", "Strengthen the social field", "Use class meetings with care", "Practice repair and re-entry"],
  },
];

const bookChapters = [
  "Standing at the Threshold",
  "The Teacher as the First Environment",
  "Relationship Before Curriculum",
  "The Teacher’s Vision",
  "Rhythm Before Management",
  "The Hidden Curriculum",
  "Rückschau and the Inner Life",
  "The Child Is Becoming",
];

const galleryTracks = [
  { medium: "Watercolor & veil painting", image: "/images/note-playmaking.webp", alt: "Watercolor lantern, birds, and flowing color" },
  { medium: "Chalkboard drawing", image: "/images/waldorf-classroom.webp", alt: "Waldorf classroom with a botanical chalkboard drawing" },
  { medium: "Crayon, charcoal & pastel", image: "/images/ruckschau.webp", alt: "Charcoal and chalk evening classroom study" },
  { medium: "Main lesson books", image: "/images/about-teacher.webp", alt: "Painted teacher desk with a main lesson book and art materials" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleItems = activeCategory === "All"
    ? libraryItems
    : libraryItems.filter((item) => item.category === activeCategory);

  return (
    <main>
      <div className="paper-grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Living Classroom home">
          <span className="brand-mark">✦</span>
          <span>
            <b>The Living Classroom</b>
            <small>Notes from a Waldorf teacher</small>
          </span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          <a href="#curriculum" onClick={() => setMenuOpen(false)}>Curriculum</a>
          <a href="#plays" onClick={() => setMenuOpen(false)}>Plays</a>
          <a href="#inclusion" onClick={() => setMenuOpen(false)}>Inclusion</a>
          <a href="#book" onClick={() => setMenuOpen(false)}>The book</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a className="nav-pill" href="#about" onClick={() => setMenuOpen(false)}>About Robyne</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-wash wash-one" />
        <div className="hero-wash wash-two" />
        <div className="hero-copy">
          <p className="eyebrow">Practice · Imagination · Belonging</p>
          <h1>Teaching is a living art.</h1>
          <p className="hero-lede">
            Reflections from a working Waldorf classroom on curriculum,
            inclusion, classroom social life, and the inner work of teaching,
            all grounded in imagination, insight, and care.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#curriculum">Explore the work</a>
            <a className="text-link" href="#steiner-now">Why “living” Waldorf? <span>→</span></a>
          </div>
        </div>
        <div className="hero-art">
          <img
            src="/images/waldorf-classroom.webp"
            alt="A luminous watercolor Waldorf classroom with natural wood, silk cloths, lesson books, a nature table, and a botanical chalkboard"
          />
          <p>“Receive the children in reverence; educate them in love.”</p>
        </div>
        <p className="margin-note">From the classroom, not above it</p>
      </section>

      <section className="welcome" aria-labelledby="welcome-title">
        <p className="section-number">01</p>
        <div>
          <p className="kicker">A commons for working teachers</p>
          <h2 id="welcome-title">Beautiful things to use.<br />Difficult things to think through.</h2>
        </div>
        <p className="welcome-copy">
          Here you will find practical work you can carry into school tomorrow,
          alongside questions that deserve more time: How do we teach the
          children actually before us? How does a class become a community?
          What should we preserve, transform, or release?
        </p>
      </section>

      <section className="year-section" id="year">
        <div className="year-heading">
          <p className="section-number">02</p>
          <div>
            <p className="kicker">From the 2025–2026 classroom</p>
            <h2>What one unusual year taught me about holding two classes</h2>
          </div>
          <p>
            This was an innovative teaching model with an extraordinary degree
            of planning, coordination, curriculum vision, and social care.
            These are not claims of perfection. They are field notes from work
            that asked the teacher to keep adapting.
          </p>
        </div>
        <div className="year-grid">
          {yearHighlights.map((item) => (
            <article key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="privacy-note">
          Classroom examples on this site are generalized and identifying
          details are changed or omitted. The pedagogical learning belongs in
          public conversation; children’s private stories do not.
        </p>
      </section>

      <section className="notes-section" id="curriculum">
        <div className="section-heading">
          <div>
            <p className="kicker">New from the classroom</p>
            <h2>Field notes & shared work</h2>
          </div>
          <a className="text-link" href="#library">Browse the full library <span>→</span></a>
        </div>
        <div className="note-grid">
          {notes.map((note, index) => (
            <article className={`note-card ${note.tone}`} key={note.title}>
              <div className="note-top">
                <span>{note.type}</span>
                <span>0{index + 1}</span>
              </div>
              <div className="card-art">
                <img src={note.image} alt={note.imageAlt} />
              </div>
              <p className="grade">{note.grade}</p>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <a href="#library" aria-label={`Read ${note.title}`}>Open field note <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="living-question" id="steiner-now">
        <p className="section-number">03</p>
        <div className="question-copy">
          <p className="kicker light">Steiner in this age</p>
          <h2>We must ask not only, “What did Steiner say?” but also, “What is the child asking of us now?”</h2>
        </div>
        <div className="question-side">
          <p>
            The inheritance is valuable when it sharpens observation, protects
            childhood, and frees the teacher to create. It becomes rigid when
            an old indication replaces the living child.
          </p>
          <a className="button pale" href="#research">Enter the inquiry</a>
        </div>
      </section>

      <section className="play-feature" id="plays">
        <div className="play-visual">
          <img
            src="/images/conference-birds.webp"
            alt="Wet-on-wet watercolor of twelve birds circling Mount Qaf above a Persian lantern and seven flowing silks"
          />
        </div>
        <div className="play-copy">
          <p className="kicker">Inside the play studio</p>
          <p className="overline">Current work · Fifth grade · 45–60 minutes</p>
          <h2>A Persian mystery play for twelve young actors</h2>
          <p className="dropcap">
            The birds set out to find the Simorgh and pass through seven
            valleys that ask them to loosen certainty, fear, pride, and the
            wish to travel alone. Attar’s great poem becomes a class journey
            told with lanterns, Persian modes, one carpet, and flowing silk.
          </p>
          <div className="play-details">
            <div><b>12</b><span>speaking roles, held in balance</span></div>
            <div><b>7</b><span>valleys, each carried by color</span></div>
            <div><b>1</b><span>ensemble becoming a flock</span></div>
          </div>
          <a className="button primary" href="#library">See the playmaking notes</a>
        </div>
      </section>

      <section className="belonging-section" id="belonging">
        <div className="belonging-intro">
          <p className="section-number">03</p>
          <div>
            <p className="kicker">The social life of the class</p>
            <h2>Inclusion is not where a child sits. It is whether they are known, needed, and able to participate.</h2>
          </div>
          <p>
            A warm classroom can still have an edge. A beautiful rhythm can
            still leave one child outside it. Social health asks for active
            observation, designed participation, clear limits, and a path back
            after conflict.
          </p>
        </div>
        <div className="practice-list">
          <article>
            <span>01</span>
            <h3>Watch the margins</h3>
            <p>Notice who is interrupted, imitated, rescued, avoided, over-helped, or never chosen. Patterns matter more than isolated moments.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Design real participation</h3>
            <p>Build multiple ways to speak, move, make, record, rehearse, and contribute. Belonging grows through meaningful roles.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Repair without exile</h3>
            <p>Protect the harmed child, name the boundary, invite accountability, and create a concrete way to re-enter community.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Keep learner variability visible</h3>
            <p>Support should change the environment as well as the child. Beauty and rigor can live beside choice, access, and accommodation.</p>
          </article>
        </div>
      </section>

      <section className="inclusion-hub" id="inclusion">
        <div className="inclusion-heading">
          <p className="section-number">04</p>
          <div>
            <p className="kicker light">Inclusion through a Steiner lens</p>
            <h2>See the whole human being. Change what prevents participation.</h2>
          </div>
          <p>
            A spiritual picture of the child should deepen our responsibility,
            never excuse us from evidence, accommodation, direct protection, or
            honest attention to power.
          </p>
        </div>
        <div className="inclusion-grid">
          {inclusionPaths.map((path) => (
            <article key={path.label}>
              <p className="inclusion-label">{path.label}</p>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
              <ul>
                {path.practices.map((practice) => <li key={practice}>{practice}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="companions-strip">
          <div>
            <span>Companion on the path</span>
            <b>Kim John Payne</b>
            <p>Simplicity, developmental discipline, social inclusion, and whole-community responses to exclusion.</p>
          </div>
          <div>
            <span>Companion on the path</span>
            <b>Raelee Peirce</b>
            <p>Attachment-developmental parenting, inner life, compassionate behavior support, and values-led family culture.</p>
          </div>
          <div>
            <span>My working principle</span>
            <b>Belonging must be experienced</b>
            <p>Children should not have to explain or perform inclusion in order to receive dignity, protection, and a needed place.</p>
          </div>
        </div>
      </section>

      <section className="library-section" id="library">
        <div className="section-heading library-heading">
          <div>
            <p className="kicker">The working library</p>
            <h2>Take what serves.<br />Adapt what must live.</h2>
          </div>
          <p>Plans, processes, questions, and unfinished work shared in a spirit of collegial exchange.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter library by topic">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? "active" : ""}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="library-grid" aria-live="polite">
          {visibleItems.map((item, index) => (
            <article key={item.title}>
              <div className="library-meta"><span>{item.grade}</span><span>0{index + 1}</span></div>
              <p>{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.title === "The evening review, renewed" ? (
                <a className="library-read-link" href="#evening-review">Read the full practice <span>↓</span></a>
              ) : (
                <span className="coming-label">Field note in progress</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="book-section" id="book">
        <div className="book-cover">
          <p>A book in progress</p>
          <h2>The First Grade Journey</h2>
          <span>A mentor’s guide for the new Waldorf teacher</span>
        </div>
        <div className="book-copy">
          <p className="kicker">From The Living Classroom</p>
          <h3>Teaching is the preparation of conditions.</h3>
          <p className="book-lede">
            “Again and again I discovered that when something was not working
            in the classroom, the solution was rarely more instruction.
            Instead, it required preparation of the self, the space, the
            rhythm, beauty, relationship, and observation.”
          </p>
          <p>
            The developing manuscript combines opening stories, Steiner’s
            lens, practical classroom guidance, Robyne’s notebook, the child’s
            point of view, reflective questions, and companions for further
            study. It is written for the teacher standing at the door,
            wondering whether they are ready.
          </p>
          <div className="chapter-list">
            {bookChapters.map((chapter, index) => (
              <span key={chapter}><i>{String(index + 1).padStart(2, "0")}</i>{chapter}</span>
            ))}
          </div>
          <p className="manuscript-note">
            The website will share selected essays as they are revised; the
            complete manuscript remains a distinct work in progress.
          </p>
        </div>
      </section>

      <section className="ruckschau-section" id="evening-review">
        <div className="ruckschau-sky">
          <img
            src="/images/ruckschau.webp"
            alt="Charcoal, chalk, and watercolor evening scene of a lamp, closing book, empty classroom, moon, and approaching dawn"
          />
          <div className="reverse-hours">
            <span>sleep</span><i>←</i><span>evening</span><i>←</i><span>school</span><i>←</i><span>morning</span>
          </div>
          <p>see · release · learn</p>
        </div>

        <div className="ruckschau-intro">
          <p className="section-number">04</p>
          <div>
            <p className="kicker light">A teacher’s inner practice</p>
            <h2><i>Rückschau</i><br />The evening review</h2>
          </div>
          <div className="term-note">
            <p className="term">Rück · schau</p>
            <p><b>German:</b> a looking back, retrospect, or review.</p>
            <p>
              Pronounced approximately <i>RUEK-shou</i>. It is sometimes
              written without the umlaut as <i>Rueckschau</i>.
            </p>
          </div>
        </div>

        <div className="ruckschau-opening">
          <p className="large-first">
            At the end of a teaching day, memory usually returns as a tangle:
            the interruption, the lesson that opened beautifully, the child
            whose face changed, the words we wish we had chosen differently.
            Rückschau gives this material another form.
          </p>
          <div>
            <p>
              Steiner’s exercise is to let the day pass before the inner eye
              in pictures, moving <b>backward from evening toward morning</b>.
              Reversing the accustomed sequence asks thought to stop riding
              passively along the track laid down by events.
            </p>
            <p>
              In its anthroposophical setting, this is spiritual schooling:
              an exercise in inner freedom, wakefulness, and learning from
              life. For the teacher, it can also become an act of reverent
              re-seeing. It means meeting the day again without immediately defending,
              diagnosing, or judging.
            </p>
          </div>
        </div>

        <aside className="essential-distinction">
          <span>Not a verdict</span>
          <blockquote>
            “We should not want to have been better, but want to become better.”
          </blockquote>
          <p>
            Steiner repeatedly cautioned against regret in the review. The
            point is not to put the teacher on trial, but to make experience
            available for development.
          </p>
        </aside>

        <div className="practice-heading">
          <div>
            <p className="kicker">The core practice</p>
            <h3>Seven quiet minutes, from the last scene to the first</h3>
          </div>
          <p>
            This sequence stays close to Steiner’s descriptions. Begin small.
            Continuity matters more than completeness or vividness.
          </p>
        </div>

        <ol className="review-steps">
          <li>
            <span>01</span>
            <div>
              <h4>Come to stillness</h4>
              <p>Sit or lie down before sleep. Put away notes and messages. Let the body settle; do not manufacture a special mood.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h4>Begin with now</h4>
              <p>Picture the moment just completed: closing a book, brushing your teeth, turning off a lamp. Start with the concrete.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h4>Move backward in scenes</h4>
              <p>Evening, journey home, dismissal, last lesson, lunch, main lesson, arrival. Let one scene give way to the one before it.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h4>Make pictures, not explanations</h4>
              <p>Recall gesture, color, placement, sound, faces, movement, and sequence. “She stood by the blue shelf” comes before “she was avoiding the group.”</p>
            </div>
          </li>
          <li>
            <span>05</span>
            <div>
              <h4>Include yourself in the picture</h4>
              <p>See the teacher as one figure among the others. Notice where you stood, how you moved, and what your face and voice may have carried.</p>
            </div>
          </li>
          <li>
            <span>06</span>
            <div>
              <h4>Pass through without prosecution</h4>
              <p>Notice warmth, discomfort, or surprise, but do not pause to argue the case. No self-punishment; no rewriting the scene.</p>
            </div>
          </li>
          <li>
            <span>07</span>
            <div>
              <h4>Reach the morning, then release</h4>
              <p>When you arrive at waking or the first morning image, stop. Let the pictures go. Do not force a conclusion before sleep.</p>
            </div>
          </li>
        </ol>

        <div className="teacher-adaptation">
          <div className="adaptation-title">
            <p className="kicker light">A contemporary adaptation</p>
            <h3>Returning to the classroom without turning the review into planning</h3>
            <p>
              The following second movement is my teacher-practice adaptation,
              not a prescribed formula from Steiner.
            </p>
          </div>
          <div className="adaptation-cards">
            <article>
              <span>After the full review</span>
              <h4>Hold one threshold</h4>
              <p>Return briefly to one moment when the atmosphere changed. Do not solve it. Ask only: <i>What did I actually perceive?</i></p>
            </article>
            <article>
              <span>At the social edge</span>
              <h4>Remember the unseen child</h4>
              <p>Who received little true attention? Picture that child without diagnosis, agenda, or a story about what they need.</p>
            </article>
            <article>
              <span>The following morning</span>
              <h4>Choose one earthly deed</h4>
              <p>Only after sleep, translate insight into one modest action: change a transition, move closer, ask a question, repair a word.</p>
            </article>
          </div>
        </div>

        <div className="review-forms">
          <article>
            <p className="column-label">When you have seven minutes</p>
            <h3>The full thread</h3>
            <p>Move from the present moment back to waking. Keep a steady tempo. Let minor scenes pass; they often reveal the day’s real texture.</p>
          </article>
          <article>
            <p className="column-label rose-text">When you are exhausted</p>
            <h3>Three scenes backward</h3>
            <p>Picture the last classroom moment, one middle moment, and the first meeting with the class, in that order. Close without analysis.</p>
          </article>
          <article>
            <p className="column-label ochre-text">When a day was painful</p>
            <h3>Stay within your window</h3>
            <p>Shorten the review, keep to neutral sensory detail, or pause the exercise. Spiritual practice should not become forced re-exposure.</p>
          </article>
        </div>

        <div className="not-review">
          <div>
            <p className="kicker">Keep the vessel clear</p>
            <h3>Rückschau is not…</h3>
          </div>
          <ul>
            <li>a performance evaluation</li>
            <li>a list of children’s faults</li>
            <li>a search for occult explanations</li>
            <li>a rehearsal of tomorrow’s confrontations</li>
            <li>a substitute for documentation or safeguarding</li>
            <li>an exercise to assign to young children</li>
          </ul>
        </div>

        <div className="child-caution">
          <span>Important boundary</span>
          <p>
            Steiner explicitly distinguished this adult spiritual exercise
            from ordinary remembering and warned against imposing the backward
            review on children. On this site, Rückschau is presented as
            <b> inner work for the adult teacher</b>, never as a classroom task.
          </p>
        </div>

        <div className="ruckschau-sources">
          <div>
            <p className="kicker">Read the source tradition</p>
            <h3>Texts behind this practice</h3>
          </div>
          <div className="ruckschau-source-list">
            <a href="https://rsarchive.org/Practice/Backward_Review.html" target="_blank" rel="noreferrer">
              <span>Overview</span>
              <b>The Backward Review Exercise</b>
              <small>Rudolf Steiner Archive ↗</small>
            </a>
            <a href="https://rsarchive.org/Lectures/GA266I/English/SOL2024/19070129e02.html" target="_blank" rel="noreferrer">
              <span>Evening review</span>
              <b>Pictures, reverse sequence, and learning without regret</b>
              <small>Esoteric Lessons, GA 266/I · 1907 ↗</small>
            </a>
            <a href="https://rsarchive.org/Lectures/GA297/English/SOL2024/19201008p01.html" target="_blank" rel="noreferrer">
              <span>Education</span>
              <b>Reversal as inner emancipation, with a warning about children</b>
              <small>The Idea and Practice of Waldorf Education, GA 297 · 1920 ↗</small>
            </a>
            <a href="https://rsarchive.org/Lectures/GA267/English/SOL2025/07_I_Am_It_Thinks_She_Feels_He_Wills.html" target="_blank" rel="noreferrer">
              <span>Practical form</span>
              <b>A pictorial review in five to seven minutes</b>
              <small>Soul Exercises I, GA 267 ↗</small>
            </a>
            <a href="https://www.waldorf-resources.org/en/single-view/soul-hygiene-and-longevity-for-teachers" target="_blank" rel="noreferrer">
              <span>Teacher life</span>
              <b>Soul hygiene and longevity for teachers</b>
              <small>Waldorf Resources · contemporary reflection ↗</small>
            </a>
          </div>
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="research-lead">
          <p className="section-number">05</p>
          <div>
            <p className="kicker">A living relationship to the tradition</p>
            <h2>Steiner’s work can be a lens. It cannot become a substitute for seeing.</h2>
          </div>
        </div>

        <div className="research-columns">
          <article>
            <p className="column-label">Carry forward</p>
            <h3>Practices that still open the classroom</h3>
            <ul>
              <li>Close observation of the particular child</li>
              <li>Arts as ways of knowing, not decoration</li>
              <li>Embodied, practical, sensory experience</li>
              <li>Rhythm that supports attention and recovery</li>
              <li>Wonder, story, nature, and moral imagination</li>
              <li>Teacher freedom joined to disciplined preparation</li>
            </ul>
          </article>
          <article>
            <p className="column-label rose-text">Examine honestly</p>
            <h3>Inherited ideas that require clear judgment</h3>
            <ul>
              <li>Racial and cultural hierarchies in historical texts</li>
              <li>Eurocentric curriculum presented as universal</li>
              <li>Fixed stage pictures that override development</li>
              <li>Gendered expectations and essentialism</li>
              <li>Spiritual language used to explain away disability</li>
              <li>Rules about media that replace media education</li>
            </ul>
          </article>
          <article>
            <p className="column-label ochre-text">Meet this age</p>
            <h3>A Waldorf response to the present child</h3>
            <ul>
              <li>Use UDL to anticipate learner variability</li>
              <li>Teach digital discernment, authorship, and limits</li>
              <li>Build culturally sustaining curriculum</li>
              <li>Make belonging observable, not aspirational</li>
              <li>Pair spiritual insight with evidence and assessment</li>
              <li>Ask whether every practice enlarges freedom</li>
            </ul>
          </article>
        </div>

        <div className="evidence-note">
          <div>
            <p className="kicker">What the research suggests</p>
            <h3>Convergences worth noticing</h3>
          </div>
          <p>
            Recent Waldorf scholarship emphasizes curriculum as something
            translated and transformed in context; inclusive education research
            centers participation and the removal of barriers; arts research
            supports embodied and sensory teacher formation; and current
            guidance on technology argues for purposeful use that supports,
            rather than replaces, human teaching.
          </p>
        </div>

        <div className="source-grid">
          <a href="https://www.simplicityparenting.com/" target="_blank" rel="noreferrer">
            <span>Family rhythm</span>
            <b>Simplicity Parenting</b>
            <small>Kim John Payne · official resources ↗</small>
          </a>
          <a href="https://www.simplicityparenting.com/lectures" target="_blank" rel="noreferrer">
            <span>Social inclusion</span>
            <b>Practical tools for exclusion, teasing, and community response</b>
            <small>Kim John Payne · Social Inclusion Approach ↗</small>
          </a>
          <a href="https://www.simplicityparenting.com/blog/raelee-peirce" target="_blank" rel="noreferrer">
            <span>Parenting</span>
            <b>Attachment, development, and the inner life of family</b>
            <small>Raelee Peirce · coach profile ↗</small>
          </a>
          <a href="https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1306092/full" target="_blank" rel="noreferrer">
            <span>Waldorf curriculum</span>
            <b>Translating, transmitting and transforming Waldorf curricula</b>
            <small>Martyn Rawson · Frontiers in Education, 2024 ↗</small>
          </a>
          <a href="https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2023.1345697/full" target="_blank" rel="noreferrer">
            <span>Inclusion</span>
            <b>Inclusive Waldorf schools today</b>
            <small>Ulrike Barth et al. · Frontiers in Education, 2024 ↗</small>
          </a>
          <a href="https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1363254/full" target="_blank" rel="noreferrer">
            <span>Teacher formation</span>
            <b>Artistic practice in Waldorf teacher education</b>
            <small>Peter Lutzker · Frontiers in Education, 2024 ↗</small>
          </a>
          <a href="https://udlguidelines.cast.org/" target="_blank" rel="noreferrer">
            <span>Learner variability</span>
            <b>Universal Design for Learning Guidelines 3.0</b>
            <small>CAST · Current framework ↗</small>
          </a>
          <a href="https://schoolguide.casel.org/focus-area-3/classroom/a-supportive-classroom-environment/" target="_blank" rel="noreferrer">
            <span>Belonging</span>
            <b>A supportive classroom environment</b>
            <small>CASEL · Evidence-based classroom guidance ↗</small>
          </a>
          <a href="https://gem-report-2020.unesco.org/thematic/" target="_blank" rel="noreferrer">
            <span>Inclusive education</span>
            <b>Inclusion and education</b>
            <small>UNESCO Global Education Monitoring Report ↗</small>
          </a>
          <a href="https://www.waldorfeducation.org/wp-content/uploads/2023/09/AWSNA_StrategicPrioritiesUpdatedFeb21.pdf" target="_blank" rel="noreferrer">
            <span>Historical responsibility</span>
            <b>Innovating for the next 100 years</b>
            <small>AWSNA strategic priorities ↗</small>
          </a>
          <a href="https://www.unesco.org/en/articles/unesco-issues-urgent-call-appropriate-use-technology-education" target="_blank" rel="noreferrer">
            <span>Technology</span>
            <b>Technology should support human connection</b>
            <small>UNESCO · GEM Report guidance ↗</small>
          </a>
        </div>
        <p className="research-disclaimer">
          This site distinguishes between spiritual-pedagogical interpretation
          and empirical evidence. Sources are offered for inquiry, not as proof
          that every traditional Waldorf practice is research-established.
        </p>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-heading">
          <div>
            <p className="kicker">The visual archive</p>
            <h2>Art by grade, medium, and block</h2>
          </div>
          <p>
            This space is being prepared for Robyne’s classroom work and,
            later, carefully attributed contributions from other teachers and
            artists. The images below are collection covers. They are not student work.
          </p>
        </div>
        <div className="grade-key" aria-label="Planned gallery grade filters">
          {["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grades 6–8"].map((grade) => <span key={grade}>{grade}</span>)}
        </div>
        <div className="gallery-grid">
          {galleryTracks.map((track) => (
            <article key={track.medium}>
              <div><img src={track.image} alt={track.alt} /></div>
              <p>Collection in preparation</p>
              <h3>{track.medium}</h3>
              <span>Browse by grade when the archive opens →</span>
            </article>
          ))}
        </div>
        <div className="contribute-panel">
          <div>
            <p className="kicker light">A curated commons</p>
            <h3>Teachers will be able to offer work for consideration.</h3>
          </div>
          <div>
            <p>
              Each submission will include the contributor’s name, grade,
              medium, block or lesson, a short description, and confirmation
              that they have permission to share it. Nothing will appear
              publicly until Robyne approves it.
            </p>
            <p className="coming-soon">Submission portal · next development phase</p>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-art">
          <img
            src="/images/about-teacher.webp"
            alt="Watercolor still life of a teacher’s desk with a main lesson book, paints, charcoal, chalk, silk, candle, leaves, and a wooden bird"
          />
          <p>head<br />heart<br />hands</p>
        </div>
        <div className="about-copy">
          <p className="kicker light">About the teacher</p>
          <h2>I’m Robyne. I have taught in Waldorf classrooms for more than twenty years.</h2>
          <p className="about-lede">
            I believe a teacher’s authority should grow from relationship,
            preparation, candor, and love rather than certainty.
          </p>
          <p>
            I share work here while it is still warm from the classroom:
            curriculum experiments, plays shaped around actual children,
            questions about social life, and reflections on what Waldorf
            education can become when we meet our own time with open eyes.
          </p>
          <a className="button pale" href="#library">Explore the working library</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">✦</span>
          <div><b>The Living Classroom</b><p>Curriculum, playmaking, and inquiry from a Waldorf teacher.</p></div>
        </div>
        <div className="footer-links">
          <a href="#curriculum">Curriculum</a>
          <a href="#plays">Plays</a>
          <a href="#inclusion">Inclusion</a>
          <a href="#book">The book</a>
          <a href="#gallery">Gallery</a>
          <a href="#evening-review">Rückschau</a>
          <a href="#research">Research</a>
        </div>
        <p className="footer-note">Made in a spirit of collegial sharing. © 2026 Robyne</p>
      </footer>
    </main>
  );
}
