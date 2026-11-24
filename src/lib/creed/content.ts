export type LevelId = 1 | 2 | 3 | 4 | 5;
export type ModelId = "clark" | "bueckers" | "watkins" | "curry";
export type Motion =
  | "form"
  | "pound"
  | "layup"
  | "slide"
  | "cross"
  | "pace"
  | "twoball"
  | "attack"
  | "kick"
  | "voice";
export type SpotId =
  | "layup"
  | "floater"
  | "close"
  | "ft"
  | "lelbow"
  | "relbow"
  | "lc3"
  | "rc3"
  | "lw3"
  | "rw3"
  | "top";
export type Track = "confidence" | "lead" | "aggression";
export type Position = "PG" | "SG" | "BOTH";
export type Hand = "R" | "L";

export type Drill = {
  id: string;
  title: string;
  minutes: number;
  setup: string;
  steps: string[];
  cue: string;
  motion: Motion;
  model?: ModelId;
  track?: SpotId | "pick";
  hands?: boolean;
  note?: boolean;
};

export type Workout = {
  id: string;
  level: LevelId;
  title: string;
  blurb: string;
  drillIds: string[];
};

export type Player = {
  id: ModelId;
  name: string;
  monogram: string;
  role: string;
  pillar: string;
  watch: string[];
  take: string;
  drillIds: string[];
};

export type Challenge = {
  id: string;
  track: Track;
  title: string;
  how: string;
  done: string;
};

export const XP = { drill: 20, bonus: 50, challenge: 35, shots: 15 } as const;

export const LEVELS: { id: LevelId; name: string; promise: string }[] = [
  { id: 1, name: "Foundation", promise: "Feet, form, and both hands." },
  { id: 2, name: "Handles", promise: "Low, tight, and a change of pace." },
  { id: 3, name: "Create", promise: "Your shot, off the catch and the dribble." },
  { id: 4, name: "Aggression", promise: "Attack the rim. Don't settle." },
  { id: 5, name: "Floor General", promise: "See it, say it, take the big one." },
];

export const LEVEL_NOTES: Record<LevelId, string> = {
  1: "Foundation is supposed to feel plain. Plain feet and a plain release are what make the hard stuff look easy.",
  2: "You can dribble. The dribble still has to end in a shot. Don't fall in love with the move.",
  3: "You have a shot. Use it on time — and drive when the jumper would be you settling.",
  4: "Attacking is a habit now. Next is making other people better while you still take the big one.",
  5: "Floor general is not a title. It's talking first, seeing second, and shooting when it's yours.",
};

export const SPOTS: { id: SpotId; label: string; short: string; x: number; y: number }[] = [
  { id: "lc3", label: "Left corner", short: "LC", x: 40, y: 46 },
  { id: "rc3", label: "Right corner", short: "RC", x: 260, y: 46 },
  { id: "layup", label: "Layup", short: "LAY", x: 150, y: 74 },
  { id: "close", label: "Close range", short: "IN", x: 116, y: 104 },
  { id: "floater", label: "Floater", short: "FL", x: 184, y: 104 },
  { id: "lw3", label: "Left wing", short: "LW", x: 46, y: 118 },
  { id: "rw3", label: "Right wing", short: "RW", x: 254, y: 118 },
  { id: "ft", label: "Free throw", short: "FT", x: 150, y: 156 },
  { id: "lelbow", label: "Left elbow", short: "LE", x: 78, y: 168 },
  { id: "relbow", label: "Right elbow", short: "RE", x: 222, y: 168 },
  { id: "top", label: "Top", short: "TOP", x: 150, y: 224 },
];

export const DRILLS: Drill[] = [
  {
    id: "first-step",
    title: "First step",
    minutes: 4,
    setup: "No ball at first. A line on the floor is your defender. Athletic stance: feet wider than shoulders, hips low, chest up.",
    steps: [
      "Load your outside foot. Push off, don't reach with the front foot. 8 reps each way.",
      "Add the ball. One hard dribble with the first step. The ball and the foot leave together.",
      "Eyes stay on a target ahead of you. If you look down, that rep starts over.",
    ],
    cue: "The first step is a push, not a hop.",
    motion: "pace",
    model: "watkins",
  },
  {
    id: "stationary-pound",
    title: "Stationary pounds",
    minutes: 6,
    setup: "One ball. Stance stays low the whole time. Pick a spot on the wall at eye level.",
    steps: [
      "Strong hand, waist high: 25 pounds. Ball stays below your hip.",
      "Strong hand, knee high: 25. Same rhythm, softer hand.",
      "Weak hand, waist then knee: 25 each.",
      "Switch hands every dribble: 30. Eyes never drop.",
    ],
    cue: "Push the ball. Don't slap it. Quiet wrist.",
    motion: "pound",
    hands: true,
  },
  {
    id: "form-shooting",
    title: "Form shooting",
    minutes: 8,
    setup: "Start one arm's length from the rim. One hand under the ball, guide hand on the side, elbow under the ball.",
    steps: [
      "10 one-hand shots. Hold the follow-through until the ball hits the net.",
      "10 with the guide hand. It does not push. It just rides.",
      "Back up to 5–8 feet. 20 shots. Same release. Feet still, knees bend, then rise.",
      "Log makes and misses. Do not end on a miss.",
    ],
    cue: "Elbow under the ball. Hold the finish like you're reaching into the net.",
    motion: "form",
    model: "curry",
    track: "close",
  },
  {
    id: "mikan",
    title: "Mikan finishes",
    minutes: 7,
    setup: "Under the rim. No dribble to start. Right-hand layup from the right side, left-hand from the left.",
    steps: [
      "10 each hand. Inside foot takeoff. Ball up on the backboard, high and soft.",
      "Add one dribble into the finish. 8 each hand.",
      "If you miss, stay on that hand until you make one. Then switch.",
    ],
    cue: "High off the glass. Protect the ball with your body, not your off arm.",
    motion: "layup",
    hands: true,
    track: "layup",
  },
  {
    id: "ft-routine",
    title: "Free-throw routine",
    minutes: 5,
    setup: "Same spot every time. Toes on the line, same breath, same dribbles.",
    steps: [
      "Build the routine out loud once: feet, breath, eyes, shoot.",
      "Shoot 10. Count makes. The routine does not change after a miss.",
      "If you rush one, back up and take the next one slower than you want to.",
    ],
    cue: "Misses don't get a new routine. Makes don't get a new routine.",
    motion: "form",
    model: "curry",
    track: "ft",
  },
  {
    id: "weak-hand",
    title: "Weak-hand control",
    minutes: 6,
    setup: "Only the weak hand touches the ball. Strong hand stays behind your back or on your hip.",
    steps: [
      "Stationary pounds, knee high: 30.",
      "Walk the ball up the court and back. Eyes up. 4 trips.",
      "Two hard dribbles and a jump stop. 8 reps. The ball stays on the outside.",
    ],
    cue: "Slow is allowed. Looking down is not.",
    motion: "pound",
    hands: true,
  },
  {
    id: "layup-both",
    title: "Layups, both hands",
    minutes: 8,
    setup: "Start at the wing. One or two dribbles. A cone or a shoe can be the defender.",
    steps: [
      "Right-hand layups: 8 makes. Inside foot, high finish.",
      "Left-hand layups: 8 makes. Do not switch the ball back to the strong hand.",
      "Alternate every trip. Call the hand before you start: \"Left.\" \"Right.\"",
    ],
    cue: "Say the hand. Then finish with that hand.",
    motion: "layup",
    hands: true,
    model: "watkins",
    track: "layup",
  },
  {
    id: "close-game",
    title: "Make-it, take-it",
    minutes: 7,
    setup: "Five spots inside the paint: both blocks, both short corners, and the middle. One make moves you.",
    steps: [
      "You must make the shot to move to the next spot. A miss stays.",
      "Go around twice. Count your misses. They matter.",
      "Last spot: two makes in a row, then you're done.",
    ],
    cue: "Same release when you miss. That's the whole drill.",
    motion: "form",
    track: "close",
  },
  {
    id: "slides",
    title: "Slides and closeouts",
    minutes: 5,
    setup: "No ball. Lane line to lane line, or about 15 feet.",
    steps: [
      "Defensive slide down and back, 6 trips. Stay low. Don't cross your feet.",
      "Close out: sprint two steps, then chop your feet, hands high. 8 reps.",
      "Add a voice: say \"ball\" every time your hands go up.",
    ],
    cue: "Low hips. Hands talk before your mouth does — then your mouth catches up.",
    motion: "slide",
  },
  {
    id: "ft-tired",
    title: "Free throws, a little tired",
    minutes: 4,
    setup: "Sprint to half court and back, or 8 jump-stops, then step to the line.",
    steps: [
      "Do that twice. 5 free throws after each sprint.",
      "Same routine as the calm ones. Tired is not an excuse to change your feet.",
    ],
    cue: "Games are tired free throws. Practice them tired.",
    motion: "form",
    track: "ft",
  },
  {
    id: "cross-series",
    title: "Crossover series",
    minutes: 7,
    setup: "Two cones, about 8 feet apart. Stay in a stance. The ball stays low — below the knee on the cross.",
    steps: [
      "Stationary crossover, 20. Tight, not wide. Shoulders stay quiet.",
      "Crossover walking through the cones, 6 trips. The cross happens before the cone, not at it.",
      "Crossover into a hard first step past the last cone. 6 each side.",
    ],
    cue: "Low and tight. A high crossover is a pass to the defender.",
    motion: "cross",
    hands: true,
  },
  {
    id: "btl",
    title: "Between the legs",
    minutes: 6,
    setup: "Feet wide enough for the ball. Eyes up. One cone in front of you.",
    steps: [
      "Stationary, right to left, 15. Then left to right, 15.",
      "Step with the cross: the ball goes through as your front foot lands. 8 each way.",
      "Into a layup angle: between the legs, then two dribbles to the rim. 6 makes.",
    ],
    cue: "The ball stays under you. If it swings wide, slow down and make it smaller.",
    motion: "cross",
    hands: true,
    track: "layup",
  },
  {
    id: "btb",
    title: "Behind the back",
    minutes: 6,
    setup: "Start stationary. The ball should come out in front of the receiving foot, not behind your heel.",
    steps: [
      "Stationary behind-the-back, 12 each way. Catch it low.",
      "Walking, one behind-the-back every three steps. 4 trips.",
      "Behind the back into a jump stop. Hold the ball. Eyes up. 8 reps.",
    ],
    cue: "It's a push around your hip, not a swing behind your body.",
    motion: "cross",
    hands: true,
  },
  {
    id: "hesitation",
    title: "Hesitation",
    minutes: 6,
    setup: "A cone is the defender. You are selling a slowdown, not actually stopping.",
    steps: [
      "Dribble hard, sit for a beat, then explode past the cone. 6 each side.",
      "The sit is one dribble, hips down, eyes up. Then the next dribble is the fastest one.",
      "Finish at the rim on the last four. Call \"burst\" when you go.",
    ],
    cue: "Change of speed beats a new move.",
    motion: "pace",
    model: "bueckers",
    track: "layup",
  },
  {
    id: "dribble-layup",
    title: "Handle into a layup",
    minutes: 6,
    setup: "Start at the top. The move is only useful if it ends in a finish.",
    steps: [
      "Crossover then layup. 5 makes.",
      "Between the legs then layup. 5 makes.",
      "Behind the back then layup. 4 makes. Weak hand allowed, and wanted.",
    ],
    cue: "The move is the setup. The layup is the point.",
    motion: "layup",
    model: "watkins",
    track: "layup",
  },
  {
    id: "two-ball",
    title: "Two-ball pounds",
    minutes: 6,
    setup: "Two basketballs. If you only have one, use a tennis ball or just skip to the next drill and add two minutes of weak-hand pounds.",
    steps: [
      "Both balls together, waist high: 30.",
      "Both balls together, knee high: 30.",
      "One high, one low, trade every 5 pounds. 4 sets.",
    ],
    cue: "If one ball runs away, reset both. Control over speed.",
    motion: "twoball",
    hands: true,
  },
  {
    id: "two-ball-alt",
    title: "Two-ball alternate",
    minutes: 6,
    setup: "Same two balls. Now they take turns hitting the floor.",
    steps: [
      "Alternating pounds in place: 40.",
      "Walk forward and back while alternating. 4 trips.",
      "Stop on a whistle you make yourself — say \"stop\" — and kill both balls. 6 reps.",
    ],
    cue: "Your eyes stay up while both balls are moving. That's the skill.",
    motion: "twoball",
    hands: true,
  },
  {
    id: "change-pace",
    title: "Change of pace",
    minutes: 7,
    setup: "Full court if you have it. Driveway length is fine. Three speeds: walk, jog, burst.",
    steps: [
      "Call the speed before you change it. 6 trips.",
      "Burst must last at least three hard dribbles. No one-dribble fake speed.",
      "Last two trips end in a pull-up at the elbow or a layup. You choose, out loud, before the burst.",
    ],
    cue: "Say it, then do it. Decisions get faster when you hear them.",
    motion: "pace",
    model: "bueckers",
    track: "pick",
  },
  {
    id: "combo",
    title: "Combo, then go",
    minutes: 7,
    setup: "Link two moves. The second one is the one that beats the cone.",
    steps: [
      "Between the legs into a crossover. 6 each direction.",
      "Hesitation into behind-the-back. 6.",
      "Pick your best combo and take it to a finish 6 times. Count makes.",
    ],
    cue: "Two moves max. A third move is usually you dancing.",
    motion: "cross",
    track: "layup",
  },
  {
    id: "eyes-up",
    title: "Eyes-up live",
    minutes: 5,
    setup: "Dribble anywhere. A parent, a wall clock, or your own fingers: something to see.",
    steps: [
      "Dribble and call out how many fingers a partner holds up. 60 seconds.",
      "No partner: dribble and read a short sentence off a wall or your phone, out loud, without looking at the ball.",
      "Finish with 10 strong-hand pounds and 10 weak-hand, eyes locked on one spot.",
    ],
    cue: "If the ball needs your eyes, it doesn't know you yet.",
    motion: "pace",
    model: "clark",
    hands: true,
  },
  {
    id: "form-tune",
    title: "Tune the release",
    minutes: 4,
    setup: "Close to the rim again. This is not a step backward. It's how the shot stays yours when the workouts get louder.",
    steps: [
      "5 one-hand makes.",
      "5 guide-hand makes. Hold the follow-through.",
      "5 from one step back. Same arc. Nothing new.",
    ],
    cue: "Same hand, same arc, every time you add a new way to shoot.",
    motion: "form",
    model: "curry",
    track: "close",
  },
  {
    id: "catch-shoot",
    title: "Catch and shoot",
    minutes: 8,
    setup: "Self-pass off the floor, or a partner. Feet hop into the catch so you land ready, toes toward the rim.",
    steps: [
      "Pick 3 spots. 5 shots each. Log the spot you're on.",
      "The ball comes to your shot pocket, not your chest. If the pass is bad, reset. Don't shoot a bad catch.",
      "Second time around: 5 more at the spot you shot worst.",
    ],
    cue: "Feet first. The shot is decided before the ball arrives.",
    motion: "form",
    model: "clark",
    track: "pick",
  },
  {
    id: "one-dribble",
    title: "One-dribble pull-up",
    minutes: 8,
    setup: "Start just outside where you can shoot comfortably. One dribble toward a side, then rise.",
    steps: [
      "Right-hand one-dribble, 8 shots. Left-hand, 8.",
      "The dribble is to the side and down, not up into your shot.",
      "Balance: both feet set before the ball leaves. If you fade, it doesn't count — shoot it again.",
    ],
    cue: "One dribble. Balanced feet. Then the same release as the form shot.",
    motion: "form",
    model: "clark",
    track: "pick",
  },
  {
    id: "off-screen",
    title: "Shot off a screen",
    minutes: 7,
    setup: "A chair, a cone, or a parent is the screen. You curl off it or fade off it.",
    steps: [
      "Curl: shoulder brushes the screen, catch, shoot. 8 shots.",
      "Fade: step away from the screen, catch, shoot. 8 shots.",
      "Say \"curl\" or \"fade\" before you move. Then log the spot.",
    ],
    cue: "You come off looking at the rim, not at the screen.",
    motion: "form",
    model: "curry",
    track: "pick",
  },
  {
    id: "ft-same",
    title: "Free throws, same shot",
    minutes: 4,
    setup: "The free throw is the catch-and-shoot with nobody guarding. Treat it that way.",
    steps: [
      "5 in a row of the routine.",
      "If you miss, the count stays honest. Tell yourself the make before the next one: \"This one.\"",
    ],
    cue: "Say \"this one\" before you shoot. Then shoot it the same way.",
    motion: "form",
    track: "ft",
  },
  {
    id: "floater",
    title: "Floater",
    minutes: 7,
    setup: "Start at the elbow or the lane line. One or two dribbles into the lane. Shoot before a big can block it — off one foot or two, high arc, soft.",
    steps: [
      "Right side, 8 shots. Ball leaves around the height of the backboard.",
      "Left side, 8. Same arc. Don't scoop from your hip.",
      "Log them as floaters. A layup doesn't count for this drill.",
    ],
    cue: "High and soft. You're scoring over the help, not through it.",
    motion: "layup",
    model: "watkins",
    track: "floater",
  },
  {
    id: "elbow-mid",
    title: "Elbow midrange",
    minutes: 7,
    setup: "Both elbows. This is a real shot, not a backup plan. Feet set, no lean.",
    steps: [
      "5 catch-and-shoot each elbow.",
      "5 one-dribble pull-ups each elbow.",
      "Stay on the worse elbow until you make 2 in a row.",
    ],
    cue: "Balanced. The midrange is how you score when they take away the rim and the three.",
    motion: "form",
    model: "bueckers",
    track: "pick",
  },
  {
    id: "shot-fake",
    title: "Shot fake, one dribble",
    minutes: 6,
    setup: "A cone is closing out. You sell the shot, they fly by, you take one dribble.",
    steps: [
      "Shot fake from your shot pocket — the ball goes up with your eyes, your feet don't leave if you're inside the line and might travel. 8 reps, no shot.",
      "Fake, one dribble, finish at the rim. 6 makes.",
      "Fake, one dribble, pull up if the cone \"stays down.\" You decide which. Say it.",
    ],
    cue: "The fake is only good if you're willing to shoot it for real next time.",
    motion: "form",
    track: "pick",
  },
  {
    id: "relocate",
    title: "Shoot and relocate",
    minutes: 7,
    setup: "You never stand and watch. After every shot, you move to the next spot before the ball stops bouncing.",
    steps: [
      "5 spots you choose. Shoot, then cut to the next one. Self-pass or rebound and go.",
      "Two laps. Log each spot.",
      "If you watch a shot all the way in, that lap starts over.",
    ],
    cue: "The shot is not the end of the play. Empty space is.",
    motion: "form",
    model: "curry",
    track: "pick",
  },
  {
    id: "ft-move",
    title: "Free throw after you move",
    minutes: 4,
    setup: "Relocate once from the wing to the line, set your feet, then shoot.",
    steps: [
      "Cut to the line, routine, shoot. 8 times.",
      "Same feet you use when you're calm.",
    ],
    cue: "Movement, then still. The still part is the shot.",
    motion: "form",
    track: "ft",
  },
  {
    id: "triple-attack",
    title: "Triple-threat attack",
    minutes: 7,
    setup: "Catch at the top or the wing. Feet set. You have three options. Today the answer is mostly go.",
    steps: [
      "Jab with the front foot, then explode the other way. 6 each side, finish at the rim.",
      "No jab: catch and go the same step. 6 finishes.",
      "Say \"attack\" before the ones you take downhill. Out loud.",
    ],
    cue: "A jab is a question. The first step is the answer. Don't ask twice.",
    motion: "attack",
    model: "watkins",
    track: "layup",
  },
  {
    id: "through-contact",
    title: "Finish through contact",
    minutes: 7,
    setup: "Use a rolled towel, a pad, or a parent. The bump is on your hip or shoulder. Nobody swings at the ball or your head. If it doesn't feel safe, skip the bump and finish with two feet as if contact is coming.",
    steps: [
      "One dribble, two-foot finish, ball in the outside hand. 6 each side, no bump.",
      "Same finish with a light hip bump. 4 each side. Body between the ball and the contact.",
      "If you lose the ball, you still go up. The habit is finishing the play.",
    ],
    cue: "Two feet. Ball high. Your body is the shield.",
    motion: "layup",
    model: "watkins",
    track: "layup",
  },
  {
    id: "dont-settle",
    title: "Don't settle",
    minutes: 8,
    setup: "A simple rule for one block of shots: the paint comes before the jumper.",
    steps: [
      "Get into the paint 8 times. Layup or floater only.",
      "Only after those 8 are you allowed 5 jumpers.",
      "If you catch yourself pulling up early, that one doesn't count and you go to the rim instead.",
    ],
    cue: "They have to guard the drive before your jumper means anything.",
    motion: "attack",
    model: "watkins",
    track: "pick",
  },
  {
    id: "inside-hand",
    title: "Inside-hand finish",
    minutes: 6,
    setup: "From the wing, dribble to the front of the rim and finish with the hand closer to the defense — the hand they don't expect.",
    steps: [
      "Right side, left-hand finish. 6 makes.",
      "Left side, right-hand finish. 6 makes.",
      "Go slower than game speed until the footwork is right. Inside foot still.",
    ],
    cue: "The inside hand keeps the ball away from the helper in the lane.",
    motion: "layup",
    model: "watkins",
    hands: true,
    track: "layup",
  },
  {
    id: "finish-talk",
    title: "Talk through the finish",
    minutes: 3,
    setup: "Same layups you already know. The new rep is your voice.",
    steps: [
      "Every trip, say \"I got it\" as you take off.",
      "8 finishes. If you go quiet, it doesn't count.",
    ],
    cue: "Aggressive players are loud before they're fancy.",
    motion: "voice",
    track: "layup",
  },
  {
    id: "drive-kick",
    title: "Drive and kick",
    minutes: 8,
    setup: "A cone in the lane is the helper. Two other cones on the wings are teammates. You drive until the helper has to step at you.",
    steps: [
      "Drive from the top. If you beat your cone, finish. 6 reps.",
      "If the lane cone steps over, jump-stop and pass to a wing cone. Hit it in the chest. 6 reps.",
      "Say \"finish\" or \"kick\" before you reach the lane.",
    ],
    cue: "You don't kick it early to avoid the layup. You kick it because help came.",
    motion: "kick",
    model: "clark",
  },
  {
    id: "counter",
    title: "Counter the cut-off",
    minutes: 7,
    setup: "Start a drive. A cone \"cuts you off\" toward the baseline or back to the middle. You have a second move.",
    steps: [
      "Baseline drive, spin back middle, finish. 5 makes.",
      "Middle drive, behind-the-back or cross away from the cut-off, finish or pull up. 6 reps.",
      "One counter. Not three.",
    ],
    cue: "When they take one path, you already know the other one.",
    motion: "kick",
    track: "pick",
  },
  {
    id: "putback",
    title: "Putback",
    minutes: 6,
    setup: "Throw the ball off the backboard, or shoot and follow it. You are not watching.",
    steps: [
      "Miss on purpose off the glass and go get it. 8 putbacks, either hand.",
      "Chin the ball. Then go back up. Don't bring it down to your waist.",
      "Call \"ball\" as you leave your feet.",
    ],
    cue: "The miss is still your play.",
    motion: "layup",
    track: "layup",
  },
  {
    id: "sprint-shoot",
    title: "Sprint, then shoot",
    minutes: 6,
    setup: "Sprint the length you have, touch the line, then catch and shoot. Game legs.",
    steps: [
      "6 catch-and-shoot from a spot you pick.",
      "4 one-dribble pull-ups after the sprint.",
      "Log them. Tired form should still look like your form.",
    ],
    cue: "Breathe, set your feet, then use the same shot.",
    motion: "form",
    model: "curry",
    track: "pick",
  },
  {
    id: "paint-first",
    title: "Paint touches",
    minutes: 5,
    setup: "Count paint touches, not makes. A touch is two feet inside the lane with the ball.",
    steps: [
      "Get 10 paint touches from the wing or the top.",
      "You may score, pass to a cone, or jump-stop. The touch is the goal.",
      "Say the number out loud as you hit it.",
    ],
    cue: "The lane is where guards get respected. Visit it on purpose.",
    motion: "attack",
    model: "watkins",
  },
  {
    id: "outlet-read",
    title: "Outlet decision",
    minutes: 7,
    setup: "Imagine a rebound. You are the guard. A cone behind you is the outlet. The floor in front of you is empty or crowded — you decide which, out loud.",
    steps: [
      "Catch the \"outlet\" (self-pass), then say \"push\" or \"pull up\" or \"pitch.\" 8 reps.",
      "Push means attack the rim. Pull up means a shot at the free-throw line extended. Pitch means a pass ahead to a wing cone.",
      "Don't do the same one more than twice in a row. See a new read.",
    ],
    cue: "You touch it, you decide. No three dribbles while you think.",
    motion: "kick",
    model: "clark",
    track: "pick",
  },
  {
    id: "drag-screen",
    title: "Early drag read",
    minutes: 8,
    setup: "A chair is a big setting a screen near the top. You use it on the first side or you reject it.",
    steps: [
      "Use the screen, turn the corner, finish or shoot. 6 reps. Say \"use.\"",
      "Reject it — dribble away from the chair — and finish. 6 reps. Say \"reject.\"",
      "Your call, 4 more. The word comes out before you pass the chair.",
    ],
    cue: "Call the read while it's happening. Point guards do it with their voice.",
    motion: "kick",
    model: "bueckers",
    track: "pick",
  },
  {
    id: "lead-warmup",
    title: "Lead the warmup",
    minutes: 6,
    setup: "You are the voice. Even if you are alone, you run the lines like a team is there.",
    steps: [
      "60 seconds: say the warmup out loud. Layup lines, who starts, \"go.\"",
      "Run one side of layups calling the next person — use a name, even if it's yours.",
      "End by telling the empty gym one thing today's practice is about. One sentence.",
    ],
    cue: "First voice. Short sentence. Then you go first.",
    motion: "voice",
    model: "bueckers",
  },
  {
    id: "late-clock",
    title: "Late clock",
    minutes: 7,
    setup: "You have about 8 seconds. Count them down out loud from 8. The shot or the drive has to leave before 2.",
    steps: [
      "6 reps from the wing. You may drive or shoot. The count is real.",
      "4 reps where you pass to a cone with 4 seconds left and relocate for a return pass.",
      "No rep that ends with you still holding it at zero.",
    ],
    cue: "Late clock is a decision you made early. Count so you can hear it.",
    motion: "form",
    model: "bueckers",
    track: "pick",
  },
  {
    id: "talk-circuit",
    title: "Talk circuit",
    minutes: 4,
    setup: "Four words, four spots. Jog to each and say the word like a teammate needs it.",
    steps: [
      "Top: \"I got ball.\"",
      "Wing: \"Screen left\" or \"screen right.\" Point when you say it.",
      "Lane: \"Help.\"",
      "Outlet: \"Outlet.\" Do two laps. Loud enough that a person across the gym would hear the word.",
    ],
    cue: "Point and name it. Noise without a point is just noise.",
    motion: "voice",
  },
  {
    id: "pnr-reads",
    title: "Pick-and-roll reads",
    minutes: 8,
    setup: "Chair is the screener. You come off and read an imaginary defense. Three reads only.",
    steps: [
      "Layup if the lane is open. Say \"score.\" 4 reps.",
      "Pocket pass to the chair if a big drops in the lane. Bounce it. Say \"pocket.\" 4 reps.",
      "Pull up if they go under the screen. Say \"under.\" 4 shots.",
    ],
    cue: "Three reads. You don't need a fourth one yet.",
    motion: "kick",
    model: "clark",
    track: "pick",
  },
  {
    id: "call-it",
    title: "Call the action",
    minutes: 6,
    setup: "Empty gym. You still call it. Use simple names you could say to a middle-school team.",
    steps: [
      "\"Ball\" — you want it. Say it 5 times from different spots, hand up.",
      "\"Floppy\" or just \"screens\" — walk through curling off two chairs. Talk the teammate through it.",
      "\"I got the wing\" — say it, then sprint there and be ready.",
    ],
    cue: "A play that lives in your head doesn't help anybody. Say it.",
    motion: "voice",
    model: "clark",
  },
  {
    id: "big-shot",
    title: "The big shot",
    minutes: 7,
    setup: "Pick the shot you would want with the game close. One spot. Build a tiny routine.",
    steps: [
      "Say the moment out loud: \"tie game, I want this.\"",
      "Routine, shoot. 10 shots. Log them.",
      "After each miss, say \"next one\" and step in the same way. No new spot.",
    ],
    cue: "You practice the shot you'll actually take. Then you don't apologize for taking it.",
    motion: "form",
    model: "bueckers",
    track: "pick",
  },
  {
    id: "help-talk",
    title: "Help-side voice",
    minutes: 5,
    setup: "Stand on the weak side. The ball is imaginary on the other wing. You are guarding nobody and everybody.",
    steps: [
      "10 possessions you count. Each one you say \"help,\" then \"I'm up\" as the drive comes, then \"back\" when it is kicked out.",
      "Point at the ball the whole time.",
      "Add \"screen\" once when you decide a screen arrived.",
    ],
    cue: "Helpers talk early. Late help is just fouling.",
    motion: "voice",
  },
  {
    id: "captain-note",
    title: "Captain's note",
    minutes: 4,
    setup: "Stop moving. This one is a sentence you will actually say.",
    steps: [
      "Write one thing you will say at the next practice or pickup. Short enough to remember.",
      "Say it out loud once, the way you'd say it to a teammate.",
      "That's the drill. Don't add a speech.",
    ],
    cue: "One sentence. Then you say it for real.",
    motion: "voice",
    model: "bueckers",
    note: true,
  },
];

export const WORKOUTS: Workout[] = [
  {
    id: "feet-form",
    level: 1,
    title: "Feet & Form",
    blurb: "Stance, a quiet handle, and a shot you can repeat.",
    drillIds: ["first-step", "stationary-pound", "form-shooting", "mikan", "ft-routine"],
  },
  {
    id: "both-hands",
    level: 1,
    title: "Both Hands",
    blurb: "The weak hand and the finish. No hiding.",
    drillIds: ["weak-hand", "layup-both", "close-game", "slides", "ft-tired"],
  },
  {
    id: "stay-low",
    level: 2,
    title: "Stay Low",
    blurb: "Crossover, between, behind — then into a layup.",
    drillIds: ["cross-series", "btl", "btb", "hesitation", "dribble-layup"],
  },
  {
    id: "pace",
    level: 2,
    title: "Pace",
    blurb: "Two balls, then a change of speed with your eyes up.",
    drillIds: ["two-ball", "two-ball-alt", "change-pace", "combo", "eyes-up"],
  },
  {
    id: "same-release",
    level: 3,
    title: "Same Release",
    blurb: "Catch, one dribble, off a screen. One shot.",
    drillIds: ["form-tune", "catch-shoot", "one-dribble", "off-screen", "ft-same"],
  },
  {
    id: "in-between",
    level: 3,
    title: "In Between",
    blurb: "Floater, elbow, fake. Score without living on the three.",
    drillIds: ["floater", "elbow-mid", "shot-fake", "relocate", "ft-move"],
  },
  {
    id: "downhill",
    level: 4,
    title: "Downhill",
    blurb: "The first step is an attack. Finish through a body.",
    drillIds: ["triple-attack", "through-contact", "dont-settle", "inside-hand", "finish-talk"],
  },
  {
    id: "draw-help",
    level: 4,
    title: "Draw Help",
    blurb: "Make two defenders guard you, then make them pay.",
    drillIds: ["drive-kick", "counter", "putback", "sprint-shoot", "paint-first"],
  },
  {
    id: "push-it",
    level: 5,
    title: "Push It",
    blurb: "You are the outlet. Push, pitch, or pull up.",
    drillIds: ["outlet-read", "drag-screen", "lead-warmup", "late-clock", "talk-circuit"],
  },
  {
    id: "quarterback",
    level: 5,
    title: "Quarterback",
    blurb: "Call it. Take the last one. Talk from the help side.",
    drillIds: ["pnr-reads", "call-it", "big-shot", "help-talk", "captain-note"],
  },
];

export const PLAYERS: Player[] = [
  {
    id: "clark",
    name: "Caitlin Clark",
    monogram: "CC",
    role: "Point guard",
    pillar: "Range",
    watch: [
      "The shot looks the same from deep and from close. Feet set, ball high, no extra dip when she's open.",
      "Her eyes are up while the ball is low. She sees the helper before she commits to the drive.",
      "She misses. She takes the next one the same way. The confidence is the decision, not the make.",
    ],
    take: "If my feet are set and nobody is in my space, I shoot. I don't wait for permission.",
    drillIds: ["catch-shoot", "one-dribble", "eyes-up", "outlet-read", "pnr-reads", "call-it"],
  },
  {
    id: "bueckers",
    name: "Paige Bueckers",
    monogram: "PB",
    role: "Point guard",
    pillar: "Control",
    watch: [
      "The midrange is a weapon. She rises balanced. She doesn't rush the release just because a taller player is near.",
      "She changes speed more than she changes moves. Slow makes the defense lean, then she goes.",
      "She talks early. A point, a name, an action. The team hears the play before it happens.",
    ],
    take: "I can slow the ball down and still be in charge. Smooth, then sudden.",
    drillIds: ["hesitation", "elbow-mid", "change-pace", "lead-warmup", "big-shot", "late-clock", "captain-note"],
  },
  {
    id: "watkins",
    name: "JuJu Watkins",
    monogram: "JW",
    role: "Shooting guard",
    pillar: "Attack",
    watch: [
      "If the lane is there, she doesn't dance at the three. The first step is downhill.",
      "She finishes through bodies. Two feet, ball high, her body between the ball and the defender.",
      "A miss doesn't change the next decision. She attacks again.",
    ],
    take: "The paint is mine first. Jumpers are what I earn after they guard the drive.",
    drillIds: ["first-step", "triple-attack", "through-contact", "dont-settle", "floater", "inside-hand", "paint-first"],
  },
  {
    id: "curry",
    name: "Steph Curry",
    monogram: "SC",
    role: "Shooting guard",
    pillar: "Form",
    watch: [
      "Guide hand is quiet. Elbow starts under the ball. He holds the follow-through until the net moves.",
      "Feet hop into the shot so he lands together, toes toward the rim, ready before the catch.",
      "He doesn't stand and watch. Shot or pass, he relocates to the next open spot.",
    ],
    take: "Same release every time. After I shoot, I move.",
    drillIds: ["form-shooting", "form-tune", "ft-routine", "off-screen", "relocate", "sprint-shoot"],
  },
];

export const CHALLENGES: Challenge[] = [
  {
    id: "call-for-it",
    track: "confidence",
    title: "Call for the ball 5 times",
    how: "In practice, pickup, or a game of 21. Hand up. Voice loud enough for the passer. It counts even if the pass never comes.",
    done: "You asked five times. Count them on your fingers after.",
  },
  {
    id: "first-voice",
    track: "lead",
    title: "Be the first voice in a huddle",
    how: "One sentence before anyone else talks. \"I'll take the wing.\" or \"I got ball.\" Then stop talking.",
    done: "You spoke first, and it was a real assignment, not a joke.",
  },
  {
    id: "ten-off-dribble",
    track: "aggression",
    title: "Take 10 shots off the dribble",
    how: "Any spot. They do not have to go in. Do not restart because you missed. Log them if you can.",
    done: "Ten shots left your hand off the dribble. Misses counted.",
  },
  {
    id: "lead-warmup-live",
    track: "lead",
    title: "Lead warmup for 2 minutes",
    how: "You start the line. You say go. If you're alone, run it like the team is behind you and say the cues anyway.",
    done: "You were the person who started it, for two minutes, without waiting to be asked.",
  },
  {
    id: "paint-before-jumper",
    track: "aggression",
    title: "Paint before a jumper",
    how: "In a game, pickup, or 1-on-1, get into the paint 8 times before you take a jumper. Layup, floater, or a kick-out.",
    done: "Eight paint touches happened first. You didn't sneak a jumper in the middle.",
  },
  {
    id: "name-the-make",
    track: "confidence",
    title: "Name the next make",
    how: "After every miss in a shooting block, say the next make out loud before you shoot again. \"This one.\"",
    done: "You said it after the misses, and you still took the shot.",
  },
  {
    id: "talk-defense",
    track: "lead",
    title: "Talk on defense for 10 possessions",
    how: "\"Ball.\" \"Help.\" \"Screen.\" \"Dead.\" Ten possessions in a row. Not perfect words. Early words.",
    done: "You were audible for ten straight. A quiet possession means you start the ten over.",
  },
  {
    id: "ask-last-shot",
    track: "confidence",
    title: "Ask for the last shot",
    how: "Knockout, 21, or the end of practice. Ask for it. Then take it. Make or miss, the ask was the work.",
    done: "You asked, and you shot it. You didn't hand it to someone louder.",
  },
  {
    id: "guard-best",
    track: "aggression",
    title: "Guard the best player for 5",
    how: "Five possessions. No hiding on the weak side. If they score, you stay. That's the rep.",
    done: "You took five in a row against the best guard out there.",
  },
  {
    id: "screen-and-name",
    track: "lead",
    title: "Screen and say the name",
    how: "Set five screens. Each time, say the name of the teammate you're screening for, loud enough for them.",
    done: "Five screens, five names. A silent screen doesn't count.",
  },
  {
    id: "say-it-out-loud",
    track: "confidence",
    title: "Say what you want the ball for",
    how: "Tell a coach, a parent, or a teammate one thing you want the ball for next time. Out loud. Not in your head.",
    done: "Another person heard the sentence. Example: \"I want it on the wing when I'm open.\"",
  },
  {
    id: "rim-run",
    track: "aggression",
    title: "Don't pull up early",
    how: "On three fast breaks — in a game or that you create for yourself — get two feet in the paint before you decide. Then layup or kick.",
    done: "Three breaks reached the paint before the decision. No early jumper.",
  },
];

const drillMap = new Map(DRILLS.map((d) => [d.id, d]));
const workoutMap = new Map(WORKOUTS.map((w) => [w.id, w]));
const spotMap = new Map(SPOTS.map((s) => [s.id, s]));

export function drillById(id: string): Drill {
  const drill = drillMap.get(id);
  if (!drill) throw new Error(`Unknown drill ${id}`);
  return drill;
}

export function workoutById(id: string): Workout {
  const workout = workoutMap.get(id);
  if (!workout) throw new Error(`Unknown workout ${id}`);
  return workout;
}

export function spotById(id: SpotId) {
  const spot = spotMap.get(id);
  if (!spot) throw new Error(`Unknown spot ${id}`);
  return spot;
}

export function workoutMinutes(workout: Workout): number {
  return workout.drillIds.reduce((sum, id) => sum + drillById(id).minutes, 0);
}

export function workoutForDrill(drillId: string): Workout | undefined {
  return WORKOUTS.find((w) => w.drillIds.includes(drillId));
}

export function unlockedLevel(finished: Record<string, number>): LevelId {
  let level: LevelId = 1;
  for (const current of [1, 2, 3, 4] as const) {
    const set = WORKOUTS.filter((w) => w.level === current);
    if (set.every((w) => (finished[w.id] ?? 0) > 0)) level = (current + 1) as LevelId;
    else break;
  }
  return level;
}

export function suggestedWorkout(finished: Record<string, number>, dayOfWeek: number | null): Workout {
  const level = unlockedLevel(finished);
  const current = WORKOUTS.filter((w) => w.level === level);
  const fallback = current[0] ?? WORKOUTS[0];
  if (dayOfWeek == null) return fallback;
  if (dayOfWeek === 1 || dayOfWeek === 4) return current[0] ?? fallback;
  if (dayOfWeek === 3 || dayOfWeek === 6) return current[1] ?? current[0] ?? fallback;
  return [...current].sort((a, b) => (finished[a.id] ?? 0) - (finished[b.id] ?? 0))[0] ?? fallback;
}

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function weekKey(d = new Date()): string {
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const mondayOffset = (date.getDay() + 6) % 7;
  date.setDate(date.getDate() - mondayOffset);
  return todayKey(date);
}

export function sameWeek(day: string, now = new Date()): boolean {
  const [y, m, d] = day.split("-").map(Number);
  if (!y || !m || !d) return false;
  return weekKey(new Date(y, m - 1, d)) === weekKey(now);
}

export function featuredChallenge(now = new Date()): Challenge {
  const monday = weekKey(now);
  const [y, m, d] = monday.split("-").map(Number);
  const weeks = Math.floor(Date.UTC(y, m - 1, d) / 604800000);
  return CHALLENGES[weeks % CHALLENGES.length];
}

export function nextStreak(streak: number, last: string | null, today: string): number {
  if (last === today) return Math.max(streak, 1);
  if (!last) return 1;
  if (dayGap(last, today) === 1) return streak + 1;
  return 1;
}

export function visibleStreak(streak: number, last: string | null, today: string): number {
  if (!last || streak <= 0) return 0;
  if (last === today) return streak;
  if (dayGap(last, today) === 1) return streak;
  return 0;
}

function dayGap(last: string, today: string): number {
  const [ay, am, ad] = last.split("-").map(Number);
  const [by, bm, bd] = today.split("-").map(Number);
  const a = new Date(ay, am - 1, ad).getTime();
  const b = new Date(by, bm - 1, bd).getTime();
  return Math.round((b - a) / 86400000);
}

export function formatClock(ms: number): string {
  const neg = ms < 0;
  const total = Math.floor(Math.abs(ms) / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${neg ? "+" : ""}${m}:${String(s).padStart(2, "0")}`;
}

export function pct(makes: number, attempts: number): number {
  if (!attempts) return 0;
  return Math.round((makes / attempts) * 100);
}

export function handLabel(hand: Hand): { strong: string; weak: string } {
  return hand === "R" ? { strong: "right", weak: "left" } : { strong: "left", weak: "right" };
}

export function emphasis(position: Position): string {
  if (position === "PG") return "See it before you dribble it. Then talk.";
  if (position === "SG") return "Same release. Then relocate.";
  return "A guard can score and run the team. Practice both.";
}

export function playerOrder(position: Position): Player[] {
  const rank: Record<Position, ModelId[]> = {
    PG: ["clark", "bueckers", "watkins", "curry"],
    SG: ["curry", "watkins", "clark", "bueckers"],
    BOTH: ["clark", "bueckers", "watkins", "curry"],
  };
  return rank[position].map((id) => PLAYERS.find((p) => p.id === id)!);
}

export function levelJustCleared(level: LevelId, before: Record<string, number>, after: Record<string, number>): boolean {
  const set = WORKOUTS.filter((w) => w.level === level);
  const was = set.every((w) => (before[w.id] ?? 0) > 0);
  const now = set.every((w) => (after[w.id] ?? 0) > 0);
  return now && !was;
}

export const TRACK_LABEL: Record<Track, string> = {
  confidence: "Confidence",
  lead: "Lead",
  aggression: "Aggression",
};
