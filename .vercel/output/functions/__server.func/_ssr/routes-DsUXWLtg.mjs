import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Play, c as Lock, d as Dumbbell, f as Check, i as Settings, l as House, o as Pause, r as Target, s as Megaphone, t as X, u as Flame } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DsUXWLtg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var XP = {
	drill: 20,
	bonus: 50,
	challenge: 35,
	shots: 15
};
var LEVELS = [
	{
		id: 1,
		name: "Foundation",
		promise: "Feet, form, and both hands."
	},
	{
		id: 2,
		name: "Handles",
		promise: "Low, tight, and a change of pace."
	},
	{
		id: 3,
		name: "Create",
		promise: "Your shot, off the catch and the dribble."
	},
	{
		id: 4,
		name: "Aggression",
		promise: "Attack the rim. Don't settle."
	},
	{
		id: 5,
		name: "Floor General",
		promise: "See it, say it, take the big one."
	}
];
var LEVEL_NOTES = {
	1: "Foundation is supposed to feel plain. Plain feet and a plain release are what make the hard stuff look easy.",
	2: "You can dribble. The dribble still has to end in a shot. Don't fall in love with the move.",
	3: "You have a shot. Use it on time — and drive when the jumper would be you settling.",
	4: "Attacking is a habit now. Next is making other people better while you still take the big one.",
	5: "Floor general is not a title. It's talking first, seeing second, and shooting when it's yours."
};
var SPOTS = [
	{
		id: "lc3",
		label: "Left corner",
		short: "LC",
		x: 40,
		y: 46
	},
	{
		id: "rc3",
		label: "Right corner",
		short: "RC",
		x: 260,
		y: 46
	},
	{
		id: "layup",
		label: "Layup",
		short: "LAY",
		x: 150,
		y: 74
	},
	{
		id: "close",
		label: "Close range",
		short: "IN",
		x: 116,
		y: 104
	},
	{
		id: "floater",
		label: "Floater",
		short: "FL",
		x: 184,
		y: 104
	},
	{
		id: "lw3",
		label: "Left wing",
		short: "LW",
		x: 46,
		y: 118
	},
	{
		id: "rw3",
		label: "Right wing",
		short: "RW",
		x: 254,
		y: 118
	},
	{
		id: "ft",
		label: "Free throw",
		short: "FT",
		x: 150,
		y: 156
	},
	{
		id: "lelbow",
		label: "Left elbow",
		short: "LE",
		x: 78,
		y: 168
	},
	{
		id: "relbow",
		label: "Right elbow",
		short: "RE",
		x: 222,
		y: 168
	},
	{
		id: "top",
		label: "Top",
		short: "TOP",
		x: 150,
		y: 224
	}
];
var DRILLS = [
	{
		id: "first-step",
		title: "First step",
		minutes: 4,
		setup: "No ball at first. A line on the floor is your defender. Athletic stance: feet wider than shoulders, hips low, chest up.",
		steps: [
			"Load your outside foot. Push off, don't reach with the front foot. 8 reps each way.",
			"Add the ball. One hard dribble with the first step. The ball and the foot leave together.",
			"Eyes stay on a target ahead of you. If you look down, that rep starts over."
		],
		cue: "The first step is a push, not a hop.",
		motion: "pace",
		model: "watkins"
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
			"Switch hands every dribble: 30. Eyes never drop."
		],
		cue: "Push the ball. Don't slap it. Quiet wrist.",
		motion: "pound",
		hands: true
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
			"Log makes and misses. Do not end on a miss."
		],
		cue: "Elbow under the ball. Hold the finish like you're reaching into the net.",
		motion: "form",
		model: "curry",
		track: "close"
	},
	{
		id: "mikan",
		title: "Mikan finishes",
		minutes: 7,
		setup: "Under the rim. No dribble to start. Right-hand layup from the right side, left-hand from the left.",
		steps: [
			"10 each hand. Inside foot takeoff. Ball up on the backboard, high and soft.",
			"Add one dribble into the finish. 8 each hand.",
			"If you miss, stay on that hand until you make one. Then switch."
		],
		cue: "High off the glass. Protect the ball with your body, not your off arm.",
		motion: "layup",
		hands: true,
		track: "layup"
	},
	{
		id: "ft-routine",
		title: "Free-throw routine",
		minutes: 5,
		setup: "Same spot every time. Toes on the line, same breath, same dribbles.",
		steps: [
			"Build the routine out loud once: feet, breath, eyes, shoot.",
			"Shoot 10. Count makes. The routine does not change after a miss.",
			"If you rush one, back up and take the next one slower than you want to."
		],
		cue: "Misses don't get a new routine. Makes don't get a new routine.",
		motion: "form",
		model: "curry",
		track: "ft"
	},
	{
		id: "weak-hand",
		title: "Weak-hand control",
		minutes: 6,
		setup: "Only the weak hand touches the ball. Strong hand stays behind your back or on your hip.",
		steps: [
			"Stationary pounds, knee high: 30.",
			"Walk the ball up the court and back. Eyes up. 4 trips.",
			"Two hard dribbles and a jump stop. 8 reps. The ball stays on the outside."
		],
		cue: "Slow is allowed. Looking down is not.",
		motion: "pound",
		hands: true
	},
	{
		id: "layup-both",
		title: "Layups, both hands",
		minutes: 8,
		setup: "Start at the wing. One or two dribbles. A cone or a shoe can be the defender.",
		steps: [
			"Right-hand layups: 8 makes. Inside foot, high finish.",
			"Left-hand layups: 8 makes. Do not switch the ball back to the strong hand.",
			"Alternate every trip. Call the hand before you start: \"Left.\" \"Right.\""
		],
		cue: "Say the hand. Then finish with that hand.",
		motion: "layup",
		hands: true,
		model: "watkins",
		track: "layup"
	},
	{
		id: "close-game",
		title: "Make-it, take-it",
		minutes: 7,
		setup: "Five spots inside the paint: both blocks, both short corners, and the middle. One make moves you.",
		steps: [
			"You must make the shot to move to the next spot. A miss stays.",
			"Go around twice. Count your misses. They matter.",
			"Last spot: two makes in a row, then you're done."
		],
		cue: "Same release when you miss. That's the whole drill.",
		motion: "form",
		track: "close"
	},
	{
		id: "slides",
		title: "Slides and closeouts",
		minutes: 5,
		setup: "No ball. Lane line to lane line, or about 15 feet.",
		steps: [
			"Defensive slide down and back, 6 trips. Stay low. Don't cross your feet.",
			"Close out: sprint two steps, then chop your feet, hands high. 8 reps.",
			"Add a voice: say \"ball\" every time your hands go up."
		],
		cue: "Low hips. Hands talk before your mouth does — then your mouth catches up.",
		motion: "slide"
	},
	{
		id: "ft-tired",
		title: "Free throws, a little tired",
		minutes: 4,
		setup: "Sprint to half court and back, or 8 jump-stops, then step to the line.",
		steps: ["Do that twice. 5 free throws after each sprint.", "Same routine as the calm ones. Tired is not an excuse to change your feet."],
		cue: "Games are tired free throws. Practice them tired.",
		motion: "form",
		track: "ft"
	},
	{
		id: "cross-series",
		title: "Crossover series",
		minutes: 7,
		setup: "Two cones, about 8 feet apart. Stay in a stance. The ball stays low — below the knee on the cross.",
		steps: [
			"Stationary crossover, 20. Tight, not wide. Shoulders stay quiet.",
			"Crossover walking through the cones, 6 trips. The cross happens before the cone, not at it.",
			"Crossover into a hard first step past the last cone. 6 each side."
		],
		cue: "Low and tight. A high crossover is a pass to the defender.",
		motion: "cross",
		hands: true
	},
	{
		id: "btl",
		title: "Between the legs",
		minutes: 6,
		setup: "Feet wide enough for the ball. Eyes up. One cone in front of you.",
		steps: [
			"Stationary, right to left, 15. Then left to right, 15.",
			"Step with the cross: the ball goes through as your front foot lands. 8 each way.",
			"Into a layup angle: between the legs, then two dribbles to the rim. 6 makes."
		],
		cue: "The ball stays under you. If it swings wide, slow down and make it smaller.",
		motion: "cross",
		hands: true,
		track: "layup"
	},
	{
		id: "btb",
		title: "Behind the back",
		minutes: 6,
		setup: "Start stationary. The ball should come out in front of the receiving foot, not behind your heel.",
		steps: [
			"Stationary behind-the-back, 12 each way. Catch it low.",
			"Walking, one behind-the-back every three steps. 4 trips.",
			"Behind the back into a jump stop. Hold the ball. Eyes up. 8 reps."
		],
		cue: "It's a push around your hip, not a swing behind your body.",
		motion: "cross",
		hands: true
	},
	{
		id: "hesitation",
		title: "Hesitation",
		minutes: 6,
		setup: "A cone is the defender. You are selling a slowdown, not actually stopping.",
		steps: [
			"Dribble hard, sit for a beat, then explode past the cone. 6 each side.",
			"The sit is one dribble, hips down, eyes up. Then the next dribble is the fastest one.",
			"Finish at the rim on the last four. Call \"burst\" when you go."
		],
		cue: "Change of speed beats a new move.",
		motion: "pace",
		model: "bueckers",
		track: "layup"
	},
	{
		id: "dribble-layup",
		title: "Handle into a layup",
		minutes: 6,
		setup: "Start at the top. The move is only useful if it ends in a finish.",
		steps: [
			"Crossover then layup. 5 makes.",
			"Between the legs then layup. 5 makes.",
			"Behind the back then layup. 4 makes. Weak hand allowed, and wanted."
		],
		cue: "The move is the setup. The layup is the point.",
		motion: "layup",
		model: "watkins",
		track: "layup"
	},
	{
		id: "two-ball",
		title: "Two-ball pounds",
		minutes: 6,
		setup: "Two basketballs. If you only have one, use a tennis ball or just skip to the next drill and add two minutes of weak-hand pounds.",
		steps: [
			"Both balls together, waist high: 30.",
			"Both balls together, knee high: 30.",
			"One high, one low, trade every 5 pounds. 4 sets."
		],
		cue: "If one ball runs away, reset both. Control over speed.",
		motion: "twoball",
		hands: true
	},
	{
		id: "two-ball-alt",
		title: "Two-ball alternate",
		minutes: 6,
		setup: "Same two balls. Now they take turns hitting the floor.",
		steps: [
			"Alternating pounds in place: 40.",
			"Walk forward and back while alternating. 4 trips.",
			"Stop on a whistle you make yourself — say \"stop\" — and kill both balls. 6 reps."
		],
		cue: "Your eyes stay up while both balls are moving. That's the skill.",
		motion: "twoball",
		hands: true
	},
	{
		id: "change-pace",
		title: "Change of pace",
		minutes: 7,
		setup: "Full court if you have it. Driveway length is fine. Three speeds: walk, jog, burst.",
		steps: [
			"Call the speed before you change it. 6 trips.",
			"Burst must last at least three hard dribbles. No one-dribble fake speed.",
			"Last two trips end in a pull-up at the elbow or a layup. You choose, out loud, before the burst."
		],
		cue: "Say it, then do it. Decisions get faster when you hear them.",
		motion: "pace",
		model: "bueckers",
		track: "pick"
	},
	{
		id: "combo",
		title: "Combo, then go",
		minutes: 7,
		setup: "Link two moves. The second one is the one that beats the cone.",
		steps: [
			"Between the legs into a crossover. 6 each direction.",
			"Hesitation into behind-the-back. 6.",
			"Pick your best combo and take it to a finish 6 times. Count makes."
		],
		cue: "Two moves max. A third move is usually you dancing.",
		motion: "cross",
		track: "layup"
	},
	{
		id: "eyes-up",
		title: "Eyes-up live",
		minutes: 5,
		setup: "Dribble anywhere. A parent, a wall clock, or your own fingers: something to see.",
		steps: [
			"Dribble and call out how many fingers a partner holds up. 60 seconds.",
			"No partner: dribble and read a short sentence off a wall or your phone, out loud, without looking at the ball.",
			"Finish with 10 strong-hand pounds and 10 weak-hand, eyes locked on one spot."
		],
		cue: "If the ball needs your eyes, it doesn't know you yet.",
		motion: "pace",
		model: "clark",
		hands: true
	},
	{
		id: "form-tune",
		title: "Tune the release",
		minutes: 4,
		setup: "Close to the rim again. This is not a step backward. It's how the shot stays yours when the workouts get louder.",
		steps: [
			"5 one-hand makes.",
			"5 guide-hand makes. Hold the follow-through.",
			"5 from one step back. Same arc. Nothing new."
		],
		cue: "Same hand, same arc, every time you add a new way to shoot.",
		motion: "form",
		model: "curry",
		track: "close"
	},
	{
		id: "catch-shoot",
		title: "Catch and shoot",
		minutes: 8,
		setup: "Self-pass off the floor, or a partner. Feet hop into the catch so you land ready, toes toward the rim.",
		steps: [
			"Pick 3 spots. 5 shots each. Log the spot you're on.",
			"The ball comes to your shot pocket, not your chest. If the pass is bad, reset. Don't shoot a bad catch.",
			"Second time around: 5 more at the spot you shot worst."
		],
		cue: "Feet first. The shot is decided before the ball arrives.",
		motion: "form",
		model: "clark",
		track: "pick"
	},
	{
		id: "one-dribble",
		title: "One-dribble pull-up",
		minutes: 8,
		setup: "Start just outside where you can shoot comfortably. One dribble toward a side, then rise.",
		steps: [
			"Right-hand one-dribble, 8 shots. Left-hand, 8.",
			"The dribble is to the side and down, not up into your shot.",
			"Balance: both feet set before the ball leaves. If you fade, it doesn't count — shoot it again."
		],
		cue: "One dribble. Balanced feet. Then the same release as the form shot.",
		motion: "form",
		model: "clark",
		track: "pick"
	},
	{
		id: "off-screen",
		title: "Shot off a screen",
		minutes: 7,
		setup: "A chair, a cone, or a parent is the screen. You curl off it or fade off it.",
		steps: [
			"Curl: shoulder brushes the screen, catch, shoot. 8 shots.",
			"Fade: step away from the screen, catch, shoot. 8 shots.",
			"Say \"curl\" or \"fade\" before you move. Then log the spot."
		],
		cue: "You come off looking at the rim, not at the screen.",
		motion: "form",
		model: "curry",
		track: "pick"
	},
	{
		id: "ft-same",
		title: "Free throws, same shot",
		minutes: 4,
		setup: "The free throw is the catch-and-shoot with nobody guarding. Treat it that way.",
		steps: ["5 in a row of the routine.", "If you miss, the count stays honest. Tell yourself the make before the next one: \"This one.\""],
		cue: "Say \"this one\" before you shoot. Then shoot it the same way.",
		motion: "form",
		track: "ft"
	},
	{
		id: "floater",
		title: "Floater",
		minutes: 7,
		setup: "Start at the elbow or the lane line. One or two dribbles into the lane. Shoot before a big can block it — off one foot or two, high arc, soft.",
		steps: [
			"Right side, 8 shots. Ball leaves around the height of the backboard.",
			"Left side, 8. Same arc. Don't scoop from your hip.",
			"Log them as floaters. A layup doesn't count for this drill."
		],
		cue: "High and soft. You're scoring over the help, not through it.",
		motion: "layup",
		model: "watkins",
		track: "floater"
	},
	{
		id: "elbow-mid",
		title: "Elbow midrange",
		minutes: 7,
		setup: "Both elbows. This is a real shot, not a backup plan. Feet set, no lean.",
		steps: [
			"5 catch-and-shoot each elbow.",
			"5 one-dribble pull-ups each elbow.",
			"Stay on the worse elbow until you make 2 in a row."
		],
		cue: "Balanced. The midrange is how you score when they take away the rim and the three.",
		motion: "form",
		model: "bueckers",
		track: "pick"
	},
	{
		id: "shot-fake",
		title: "Shot fake, one dribble",
		minutes: 6,
		setup: "A cone is closing out. You sell the shot, they fly by, you take one dribble.",
		steps: [
			"Shot fake from your shot pocket — the ball goes up with your eyes, your feet don't leave if you're inside the line and might travel. 8 reps, no shot.",
			"Fake, one dribble, finish at the rim. 6 makes.",
			"Fake, one dribble, pull up if the cone \"stays down.\" You decide which. Say it."
		],
		cue: "The fake is only good if you're willing to shoot it for real next time.",
		motion: "form",
		track: "pick"
	},
	{
		id: "relocate",
		title: "Shoot and relocate",
		minutes: 7,
		setup: "You never stand and watch. After every shot, you move to the next spot before the ball stops bouncing.",
		steps: [
			"5 spots you choose. Shoot, then cut to the next one. Self-pass or rebound and go.",
			"Two laps. Log each spot.",
			"If you watch a shot all the way in, that lap starts over."
		],
		cue: "The shot is not the end of the play. Empty space is.",
		motion: "form",
		model: "curry",
		track: "pick"
	},
	{
		id: "ft-move",
		title: "Free throw after you move",
		minutes: 4,
		setup: "Relocate once from the wing to the line, set your feet, then shoot.",
		steps: ["Cut to the line, routine, shoot. 8 times.", "Same feet you use when you're calm."],
		cue: "Movement, then still. The still part is the shot.",
		motion: "form",
		track: "ft"
	},
	{
		id: "triple-attack",
		title: "Triple-threat attack",
		minutes: 7,
		setup: "Catch at the top or the wing. Feet set. You have three options. Today the answer is mostly go.",
		steps: [
			"Jab with the front foot, then explode the other way. 6 each side, finish at the rim.",
			"No jab: catch and go the same step. 6 finishes.",
			"Say \"attack\" before the ones you take downhill. Out loud."
		],
		cue: "A jab is a question. The first step is the answer. Don't ask twice.",
		motion: "attack",
		model: "watkins",
		track: "layup"
	},
	{
		id: "through-contact",
		title: "Finish through contact",
		minutes: 7,
		setup: "Use a rolled towel, a pad, or a parent. The bump is on your hip or shoulder. Nobody swings at the ball or your head. If it doesn't feel safe, skip the bump and finish with two feet as if contact is coming.",
		steps: [
			"One dribble, two-foot finish, ball in the outside hand. 6 each side, no bump.",
			"Same finish with a light hip bump. 4 each side. Body between the ball and the contact.",
			"If you lose the ball, you still go up. The habit is finishing the play."
		],
		cue: "Two feet. Ball high. Your body is the shield.",
		motion: "layup",
		model: "watkins",
		track: "layup"
	},
	{
		id: "dont-settle",
		title: "Don't settle",
		minutes: 8,
		setup: "A simple rule for one block of shots: the paint comes before the jumper.",
		steps: [
			"Get into the paint 8 times. Layup or floater only.",
			"Only after those 8 are you allowed 5 jumpers.",
			"If you catch yourself pulling up early, that one doesn't count and you go to the rim instead."
		],
		cue: "They have to guard the drive before your jumper means anything.",
		motion: "attack",
		model: "watkins",
		track: "pick"
	},
	{
		id: "inside-hand",
		title: "Inside-hand finish",
		minutes: 6,
		setup: "From the wing, dribble to the front of the rim and finish with the hand closer to the defense — the hand they don't expect.",
		steps: [
			"Right side, left-hand finish. 6 makes.",
			"Left side, right-hand finish. 6 makes.",
			"Go slower than game speed until the footwork is right. Inside foot still."
		],
		cue: "The inside hand keeps the ball away from the helper in the lane.",
		motion: "layup",
		model: "watkins",
		hands: true,
		track: "layup"
	},
	{
		id: "finish-talk",
		title: "Talk through the finish",
		minutes: 3,
		setup: "Same layups you already know. The new rep is your voice.",
		steps: ["Every trip, say \"I got it\" as you take off.", "8 finishes. If you go quiet, it doesn't count."],
		cue: "Aggressive players are loud before they're fancy.",
		motion: "voice",
		track: "layup"
	},
	{
		id: "drive-kick",
		title: "Drive and kick",
		minutes: 8,
		setup: "A cone in the lane is the helper. Two other cones on the wings are teammates. You drive until the helper has to step at you.",
		steps: [
			"Drive from the top. If you beat your cone, finish. 6 reps.",
			"If the lane cone steps over, jump-stop and pass to a wing cone. Hit it in the chest. 6 reps.",
			"Say \"finish\" or \"kick\" before you reach the lane."
		],
		cue: "You don't kick it early to avoid the layup. You kick it because help came.",
		motion: "kick",
		model: "clark"
	},
	{
		id: "counter",
		title: "Counter the cut-off",
		minutes: 7,
		setup: "Start a drive. A cone \"cuts you off\" toward the baseline or back to the middle. You have a second move.",
		steps: [
			"Baseline drive, spin back middle, finish. 5 makes.",
			"Middle drive, behind-the-back or cross away from the cut-off, finish or pull up. 6 reps.",
			"One counter. Not three."
		],
		cue: "When they take one path, you already know the other one.",
		motion: "kick",
		track: "pick"
	},
	{
		id: "putback",
		title: "Putback",
		minutes: 6,
		setup: "Throw the ball off the backboard, or shoot and follow it. You are not watching.",
		steps: [
			"Miss on purpose off the glass and go get it. 8 putbacks, either hand.",
			"Chin the ball. Then go back up. Don't bring it down to your waist.",
			"Call \"ball\" as you leave your feet."
		],
		cue: "The miss is still your play.",
		motion: "layup",
		track: "layup"
	},
	{
		id: "sprint-shoot",
		title: "Sprint, then shoot",
		minutes: 6,
		setup: "Sprint the length you have, touch the line, then catch and shoot. Game legs.",
		steps: [
			"6 catch-and-shoot from a spot you pick.",
			"4 one-dribble pull-ups after the sprint.",
			"Log them. Tired form should still look like your form."
		],
		cue: "Breathe, set your feet, then use the same shot.",
		motion: "form",
		model: "curry",
		track: "pick"
	},
	{
		id: "paint-first",
		title: "Paint touches",
		minutes: 5,
		setup: "Count paint touches, not makes. A touch is two feet inside the lane with the ball.",
		steps: [
			"Get 10 paint touches from the wing or the top.",
			"You may score, pass to a cone, or jump-stop. The touch is the goal.",
			"Say the number out loud as you hit it."
		],
		cue: "The lane is where guards get respected. Visit it on purpose.",
		motion: "attack",
		model: "watkins"
	},
	{
		id: "outlet-read",
		title: "Outlet decision",
		minutes: 7,
		setup: "Imagine a rebound. You are the guard. A cone behind you is the outlet. The floor in front of you is empty or crowded — you decide which, out loud.",
		steps: [
			"Catch the \"outlet\" (self-pass), then say \"push\" or \"pull up\" or \"pitch.\" 8 reps.",
			"Push means attack the rim. Pull up means a shot at the free-throw line extended. Pitch means a pass ahead to a wing cone.",
			"Don't do the same one more than twice in a row. See a new read."
		],
		cue: "You touch it, you decide. No three dribbles while you think.",
		motion: "kick",
		model: "clark",
		track: "pick"
	},
	{
		id: "drag-screen",
		title: "Early drag read",
		minutes: 8,
		setup: "A chair is a big setting a screen near the top. You use it on the first side or you reject it.",
		steps: [
			"Use the screen, turn the corner, finish or shoot. 6 reps. Say \"use.\"",
			"Reject it — dribble away from the chair — and finish. 6 reps. Say \"reject.\"",
			"Your call, 4 more. The word comes out before you pass the chair."
		],
		cue: "Call the read while it's happening. Point guards do it with their voice.",
		motion: "kick",
		model: "bueckers",
		track: "pick"
	},
	{
		id: "lead-warmup",
		title: "Lead the warmup",
		minutes: 6,
		setup: "You are the voice. Even if you are alone, you run the lines like a team is there.",
		steps: [
			"60 seconds: say the warmup out loud. Layup lines, who starts, \"go.\"",
			"Run one side of layups calling the next person — use a name, even if it's yours.",
			"End by telling the empty gym one thing today's practice is about. One sentence."
		],
		cue: "First voice. Short sentence. Then you go first.",
		motion: "voice",
		model: "bueckers"
	},
	{
		id: "late-clock",
		title: "Late clock",
		minutes: 7,
		setup: "You have about 8 seconds. Count them down out loud from 8. The shot or the drive has to leave before 2.",
		steps: [
			"6 reps from the wing. You may drive or shoot. The count is real.",
			"4 reps where you pass to a cone with 4 seconds left and relocate for a return pass.",
			"No rep that ends with you still holding it at zero."
		],
		cue: "Late clock is a decision you made early. Count so you can hear it.",
		motion: "form",
		model: "bueckers",
		track: "pick"
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
			"Outlet: \"Outlet.\" Do two laps. Loud enough that a person across the gym would hear the word."
		],
		cue: "Point and name it. Noise without a point is just noise.",
		motion: "voice"
	},
	{
		id: "pnr-reads",
		title: "Pick-and-roll reads",
		minutes: 8,
		setup: "Chair is the screener. You come off and read an imaginary defense. Three reads only.",
		steps: [
			"Layup if the lane is open. Say \"score.\" 4 reps.",
			"Pocket pass to the chair if a big drops in the lane. Bounce it. Say \"pocket.\" 4 reps.",
			"Pull up if they go under the screen. Say \"under.\" 4 shots."
		],
		cue: "Three reads. You don't need a fourth one yet.",
		motion: "kick",
		model: "clark",
		track: "pick"
	},
	{
		id: "call-it",
		title: "Call the action",
		minutes: 6,
		setup: "Empty gym. You still call it. Use simple names you could say to a middle-school team.",
		steps: [
			"\"Ball\" — you want it. Say it 5 times from different spots, hand up.",
			"\"Floppy\" or just \"screens\" — walk through curling off two chairs. Talk the teammate through it.",
			"\"I got the wing\" — say it, then sprint there and be ready."
		],
		cue: "A play that lives in your head doesn't help anybody. Say it.",
		motion: "voice",
		model: "clark"
	},
	{
		id: "big-shot",
		title: "The big shot",
		minutes: 7,
		setup: "Pick the shot you would want with the game close. One spot. Build a tiny routine.",
		steps: [
			"Say the moment out loud: \"tie game, I want this.\"",
			"Routine, shoot. 10 shots. Log them.",
			"After each miss, say \"next one\" and step in the same way. No new spot."
		],
		cue: "You practice the shot you'll actually take. Then you don't apologize for taking it.",
		motion: "form",
		model: "bueckers",
		track: "pick"
	},
	{
		id: "help-talk",
		title: "Help-side voice",
		minutes: 5,
		setup: "Stand on the weak side. The ball is imaginary on the other wing. You are guarding nobody and everybody.",
		steps: [
			"10 possessions you count. Each one you say \"help,\" then \"I'm up\" as the drive comes, then \"back\" when it is kicked out.",
			"Point at the ball the whole time.",
			"Add \"screen\" once when you decide a screen arrived."
		],
		cue: "Helpers talk early. Late help is just fouling.",
		motion: "voice"
	},
	{
		id: "captain-note",
		title: "Captain's note",
		minutes: 4,
		setup: "Stop moving. This one is a sentence you will actually say.",
		steps: [
			"Write one thing you will say at the next practice or pickup. Short enough to remember.",
			"Say it out loud once, the way you'd say it to a teammate.",
			"That's the drill. Don't add a speech."
		],
		cue: "One sentence. Then you say it for real.",
		motion: "voice",
		model: "bueckers",
		note: true
	}
];
var WORKOUTS = [
	{
		id: "feet-form",
		level: 1,
		title: "Feet & Form",
		blurb: "Stance, a quiet handle, and a shot you can repeat.",
		drillIds: [
			"first-step",
			"stationary-pound",
			"form-shooting",
			"mikan",
			"ft-routine"
		]
	},
	{
		id: "both-hands",
		level: 1,
		title: "Both Hands",
		blurb: "The weak hand and the finish. No hiding.",
		drillIds: [
			"weak-hand",
			"layup-both",
			"close-game",
			"slides",
			"ft-tired"
		]
	},
	{
		id: "stay-low",
		level: 2,
		title: "Stay Low",
		blurb: "Crossover, between, behind — then into a layup.",
		drillIds: [
			"cross-series",
			"btl",
			"btb",
			"hesitation",
			"dribble-layup"
		]
	},
	{
		id: "pace",
		level: 2,
		title: "Pace",
		blurb: "Two balls, then a change of speed with your eyes up.",
		drillIds: [
			"two-ball",
			"two-ball-alt",
			"change-pace",
			"combo",
			"eyes-up"
		]
	},
	{
		id: "same-release",
		level: 3,
		title: "Same Release",
		blurb: "Catch, one dribble, off a screen. One shot.",
		drillIds: [
			"form-tune",
			"catch-shoot",
			"one-dribble",
			"off-screen",
			"ft-same"
		]
	},
	{
		id: "in-between",
		level: 3,
		title: "In Between",
		blurb: "Floater, elbow, fake. Score without living on the three.",
		drillIds: [
			"floater",
			"elbow-mid",
			"shot-fake",
			"relocate",
			"ft-move"
		]
	},
	{
		id: "downhill",
		level: 4,
		title: "Downhill",
		blurb: "The first step is an attack. Finish through a body.",
		drillIds: [
			"triple-attack",
			"through-contact",
			"dont-settle",
			"inside-hand",
			"finish-talk"
		]
	},
	{
		id: "draw-help",
		level: 4,
		title: "Draw Help",
		blurb: "Make two defenders guard you, then make them pay.",
		drillIds: [
			"drive-kick",
			"counter",
			"putback",
			"sprint-shoot",
			"paint-first"
		]
	},
	{
		id: "push-it",
		level: 5,
		title: "Push It",
		blurb: "You are the outlet. Push, pitch, or pull up.",
		drillIds: [
			"outlet-read",
			"drag-screen",
			"lead-warmup",
			"late-clock",
			"talk-circuit"
		]
	},
	{
		id: "quarterback",
		level: 5,
		title: "Quarterback",
		blurb: "Call it. Take the last one. Talk from the help side.",
		drillIds: [
			"pnr-reads",
			"call-it",
			"big-shot",
			"help-talk",
			"captain-note"
		]
	}
];
var PLAYERS = [
	{
		id: "clark",
		name: "Caitlin Clark",
		monogram: "CC",
		role: "Point guard",
		pillar: "Range",
		watch: [
			"The shot looks the same from deep and from close. Feet set, ball high, no extra dip when she's open.",
			"Her eyes are up while the ball is low. She sees the helper before she commits to the drive.",
			"She misses. She takes the next one the same way. The confidence is the decision, not the make."
		],
		take: "If my feet are set and nobody is in my space, I shoot. I don't wait for permission.",
		drillIds: [
			"catch-shoot",
			"one-dribble",
			"eyes-up",
			"outlet-read",
			"pnr-reads",
			"call-it"
		]
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
			"She talks early. A point, a name, an action. The team hears the play before it happens."
		],
		take: "I can slow the ball down and still be in charge. Smooth, then sudden.",
		drillIds: [
			"hesitation",
			"elbow-mid",
			"change-pace",
			"lead-warmup",
			"big-shot",
			"late-clock",
			"captain-note"
		]
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
			"A miss doesn't change the next decision. She attacks again."
		],
		take: "The paint is mine first. Jumpers are what I earn after they guard the drive.",
		drillIds: [
			"first-step",
			"triple-attack",
			"through-contact",
			"dont-settle",
			"floater",
			"inside-hand",
			"paint-first"
		]
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
			"He doesn't stand and watch. Shot or pass, he relocates to the next open spot."
		],
		take: "Same release every time. After I shoot, I move.",
		drillIds: [
			"form-shooting",
			"form-tune",
			"ft-routine",
			"off-screen",
			"relocate",
			"sprint-shoot"
		]
	}
];
var CHALLENGES = [
	{
		id: "call-for-it",
		track: "confidence",
		title: "Call for the ball 5 times",
		how: "In practice, pickup, or a game of 21. Hand up. Voice loud enough for the passer. It counts even if the pass never comes.",
		done: "You asked five times. Count them on your fingers after."
	},
	{
		id: "first-voice",
		track: "lead",
		title: "Be the first voice in a huddle",
		how: "One sentence before anyone else talks. \"I'll take the wing.\" or \"I got ball.\" Then stop talking.",
		done: "You spoke first, and it was a real assignment, not a joke."
	},
	{
		id: "ten-off-dribble",
		track: "aggression",
		title: "Take 10 shots off the dribble",
		how: "Any spot. They do not have to go in. Do not restart because you missed. Log them if you can.",
		done: "Ten shots left your hand off the dribble. Misses counted."
	},
	{
		id: "lead-warmup-live",
		track: "lead",
		title: "Lead warmup for 2 minutes",
		how: "You start the line. You say go. If you're alone, run it like the team is behind you and say the cues anyway.",
		done: "You were the person who started it, for two minutes, without waiting to be asked."
	},
	{
		id: "paint-before-jumper",
		track: "aggression",
		title: "Paint before a jumper",
		how: "In a game, pickup, or 1-on-1, get into the paint 8 times before you take a jumper. Layup, floater, or a kick-out.",
		done: "Eight paint touches happened first. You didn't sneak a jumper in the middle."
	},
	{
		id: "name-the-make",
		track: "confidence",
		title: "Name the next make",
		how: "After every miss in a shooting block, say the next make out loud before you shoot again. \"This one.\"",
		done: "You said it after the misses, and you still took the shot."
	},
	{
		id: "talk-defense",
		track: "lead",
		title: "Talk on defense for 10 possessions",
		how: "\"Ball.\" \"Help.\" \"Screen.\" \"Dead.\" Ten possessions in a row. Not perfect words. Early words.",
		done: "You were audible for ten straight. A quiet possession means you start the ten over."
	},
	{
		id: "ask-last-shot",
		track: "confidence",
		title: "Ask for the last shot",
		how: "Knockout, 21, or the end of practice. Ask for it. Then take it. Make or miss, the ask was the work.",
		done: "You asked, and you shot it. You didn't hand it to someone louder."
	},
	{
		id: "guard-best",
		track: "aggression",
		title: "Guard the best player for 5",
		how: "Five possessions. No hiding on the weak side. If they score, you stay. That's the rep.",
		done: "You took five in a row against the best guard out there."
	},
	{
		id: "screen-and-name",
		track: "lead",
		title: "Screen and say the name",
		how: "Set five screens. Each time, say the name of the teammate you're screening for, loud enough for them.",
		done: "Five screens, five names. A silent screen doesn't count."
	},
	{
		id: "say-it-out-loud",
		track: "confidence",
		title: "Say what you want the ball for",
		how: "Tell a coach, a parent, or a teammate one thing you want the ball for next time. Out loud. Not in your head.",
		done: "Another person heard the sentence. Example: \"I want it on the wing when I'm open.\""
	},
	{
		id: "rim-run",
		track: "aggression",
		title: "Don't pull up early",
		how: "On three fast breaks — in a game or that you create for yourself — get two feet in the paint before you decide. Then layup or kick.",
		done: "Three breaks reached the paint before the decision. No early jumper."
	}
];
var drillMap = new Map(DRILLS.map((d) => [d.id, d]));
var workoutMap = new Map(WORKOUTS.map((w) => [w.id, w]));
var spotMap = new Map(SPOTS.map((s) => [s.id, s]));
function drillById(id) {
	const drill = drillMap.get(id);
	if (!drill) throw new Error(`Unknown drill ${id}`);
	return drill;
}
function workoutById(id) {
	const workout = workoutMap.get(id);
	if (!workout) throw new Error(`Unknown workout ${id}`);
	return workout;
}
function spotById(id) {
	const spot = spotMap.get(id);
	if (!spot) throw new Error(`Unknown spot ${id}`);
	return spot;
}
function workoutMinutes(workout) {
	return workout.drillIds.reduce((sum, id) => sum + drillById(id).minutes, 0);
}
function workoutForDrill(drillId) {
	return WORKOUTS.find((w) => w.drillIds.includes(drillId));
}
function unlockedLevel(finished) {
	let level = 1;
	for (const current of [
		1,
		2,
		3,
		4
	]) if (WORKOUTS.filter((w) => w.level === current).every((w) => (finished[w.id] ?? 0) > 0)) level = current + 1;
	else break;
	return level;
}
function suggestedWorkout(finished, dayOfWeek) {
	const level = unlockedLevel(finished);
	const current = WORKOUTS.filter((w) => w.level === level);
	const fallback = current[0] ?? WORKOUTS[0];
	if (dayOfWeek == null) return fallback;
	if (dayOfWeek === 1 || dayOfWeek === 4) return current[0] ?? fallback;
	if (dayOfWeek === 3 || dayOfWeek === 6) return current[1] ?? current[0] ?? fallback;
	return [...current].sort((a, b) => (finished[a.id] ?? 0) - (finished[b.id] ?? 0))[0] ?? fallback;
}
function todayKey(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function weekKey(d = /* @__PURE__ */ new Date()) {
	const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
	const mondayOffset = (date.getDay() + 6) % 7;
	date.setDate(date.getDate() - mondayOffset);
	return todayKey(date);
}
function sameWeek(day, now = /* @__PURE__ */ new Date()) {
	const [y, m, d] = day.split("-").map(Number);
	if (!y || !m || !d) return false;
	return weekKey(new Date(y, m - 1, d)) === weekKey(now);
}
function featuredChallenge(now = /* @__PURE__ */ new Date()) {
	const [y, m, d] = weekKey(now).split("-").map(Number);
	return CHALLENGES[Math.floor(Date.UTC(y, m - 1, d) / 6048e5) % CHALLENGES.length];
}
function nextStreak(streak, last, today) {
	if (last === today) return Math.max(streak, 1);
	if (!last) return 1;
	if (dayGap(last, today) === 1) return streak + 1;
	return 1;
}
function visibleStreak(streak, last, today) {
	if (!last || streak <= 0) return 0;
	if (last === today) return streak;
	if (dayGap(last, today) === 1) return streak;
	return 0;
}
function dayGap(last, today) {
	const [ay, am, ad] = last.split("-").map(Number);
	const [by, bm, bd] = today.split("-").map(Number);
	const a = new Date(ay, am - 1, ad).getTime();
	const b = new Date(by, bm - 1, bd).getTime();
	return Math.round((b - a) / 864e5);
}
function formatClock(ms) {
	const neg = ms < 0;
	const total = Math.floor(Math.abs(ms) / 1e3);
	const m = Math.floor(total / 60);
	const s = total % 60;
	return `${neg ? "+" : ""}${m}:${String(s).padStart(2, "0")}`;
}
function pct(makes, attempts) {
	if (!attempts) return 0;
	return Math.round(makes / attempts * 100);
}
function handLabel(hand) {
	return hand === "R" ? {
		strong: "right",
		weak: "left"
	} : {
		strong: "left",
		weak: "right"
	};
}
function emphasis(position) {
	if (position === "PG") return "See it before you dribble it. Then talk.";
	if (position === "SG") return "Same release. Then relocate.";
	return "A guard can score and run the team. Practice both.";
}
function playerOrder(position) {
	return {
		PG: [
			"clark",
			"bueckers",
			"watkins",
			"curry"
		],
		SG: [
			"curry",
			"watkins",
			"clark",
			"bueckers"
		],
		BOTH: [
			"clark",
			"bueckers",
			"watkins",
			"curry"
		]
	}[position].map((id) => PLAYERS.find((p) => p.id === id));
}
function levelJustCleared(level, before, after) {
	const set = WORKOUTS.filter((w) => w.level === level);
	const was = set.every((w) => (before[w.id] ?? 0) > 0);
	return set.every((w) => (after[w.id] ?? 0) > 0) && !was;
}
var TRACK_LABEL = {
	confidence: "Confidence",
	lead: "Lead",
	aggression: "Aggression"
};
var LEGACY_TABS = {
	today: "dashboard",
	train: "workouts",
	shots: "shotlab",
	film: "coach",
	creed: "coach",
	dashboard: "dashboard",
	workouts: "workouts",
	shotlab: "shotlab",
	coach: "coach"
};
function normalizeTab(value) {
	if (typeof value === "string" && value in LEGACY_TABS) return LEGACY_TABS[value];
	return "dashboard";
}
var emptyProfile = {
	name: "",
	position: "BOTH",
	hand: "R",
	sound: true
};
function uid() {
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
function withDelta(session, now) {
	const delta = session.running && session.anchor ? Math.max(0, now - session.anchor) : 0;
	return {
		...session,
		workoutMs: session.workoutMs + delta,
		drillMs: session.drillMs + delta,
		anchor: session.running ? now : null
	};
}
function entriesFrom(shots, day, source) {
	return Object.entries(shots).filter(([, value]) => value && value.attempts > 0).map(([spot, value]) => ({
		id: uid(),
		day,
		spot,
		makes: value.makes,
		attempts: value.attempts,
		source
	}));
}
function shotBonus(entries, shotXpDay, day) {
	if (entries.reduce((sum, entry) => sum + entry.attempts, 0) >= 10 && shotXpDay !== day) return {
		xp: XP.shots,
		shotXpDay: day
	};
	return {
		xp: 0,
		shotXpDay
	};
}
var fresh = {
	profile: emptyProfile,
	tab: "dashboard",
	xp: 0,
	streak: 0,
	lastActive: null,
	finished: {},
	lastDone: {},
	challenges: [],
	shots: [],
	shotXpDay: null,
	session: null,
	summary: null,
	courtDraft: {},
	courtSpot: "top",
	note: "",
	seen: {}
};
var useCreed = create()(persist((set, get) => ({
	...fresh,
	setTab: (tab) => set({ tab }),
	setProfile: (patch) => set({ profile: {
		...get().profile,
		...patch
	} }),
	startWorkout: (id) => {
		const workout = workoutById(id);
		const level = unlockedLevel(get().finished);
		if (workout.level > level) return;
		set({
			summary: null,
			session: {
				workoutId: id,
				index: 0,
				checked: workout.drillIds.map(() => false),
				running: true,
				workoutMs: 0,
				drillMs: 0,
				anchor: Date.now(),
				shots: {},
				spot: "top"
			}
		});
	},
	pause: () => set((state) => {
		if (!state.session) return state;
		return { session: {
			...withDelta(state.session, Date.now()),
			running: false,
			anchor: null
		} };
	}),
	resume: () => set((state) => {
		if (!state.session) return state;
		return { session: {
			...state.session,
			running: true,
			anchor: Date.now()
		} };
	}),
	tick: (now) => set((state) => {
		if (!state.session?.running || state.session.anchor == null) return state;
		const delta = now - state.session.anchor;
		if (delta < 180) return state;
		return { session: {
			...state.session,
			workoutMs: state.session.workoutMs + delta,
			drillMs: state.session.drillMs + delta,
			anchor: now
		} };
	}),
	setSessionSpot: (spot) => set((state) => state.session ? { session: {
		...state.session,
		spot
	} } : state),
	addSessionShot: (result, spot) => set((state) => {
		if (!state.session) return state;
		const current = state.session.shots[spot] ?? {
			makes: 0,
			attempts: 0
		};
		return { session: {
			...state.session,
			spot,
			shots: {
				...state.session.shots,
				[spot]: {
					makes: current.makes + (result === "make" ? 1 : 0),
					attempts: current.attempts + 1
				}
			}
		} };
	}),
	completeDrill: () => {
		const state = get();
		if (!state.session) return;
		const now = Date.now();
		const live = withDelta(state.session, now);
		const workout = workoutById(live.workoutId);
		const checked = live.checked.slice();
		checked[live.index] = true;
		if (!(live.index >= workout.drillIds.length - 1)) {
			set({ session: {
				...live,
				checked,
				index: live.index + 1,
				drillMs: 0,
				anchor: live.running ? now : null
			} });
			return;
		}
		const day = todayKey();
		const drillXp = workout.drillIds.length * XP.drill + XP.bonus;
		const logged = entriesFrom(live.shots, day, "workout");
		const bonus = shotBonus(logged, state.shotXpDay, day);
		const finished = {
			...state.finished,
			[workout.id]: (state.finished[workout.id] ?? 0) + 1
		};
		const cleared = levelJustCleared(workout.level, state.finished, finished);
		const before = unlockedLevel(state.finished);
		const after = unlockedLevel(finished);
		set({
			session: null,
			xp: state.xp + drillXp + bonus.xp,
			streak: nextStreak(state.streak, state.lastActive, day),
			lastActive: day,
			finished,
			lastDone: {
				...state.lastDone,
				[workout.id]: day
			},
			shots: [...logged, ...state.shots].slice(0, 500),
			shotXpDay: bonus.shotXpDay,
			summary: {
				workoutId: workout.id,
				xp: drillXp + bonus.xp,
				minutes: Math.max(1, Math.round(live.workoutMs / 6e4)),
				unlocked: after > before,
				cleared,
				level: workout.level
			}
		});
	},
	abandon: () => set({ session: null }),
	dismissSummary: () => set({
		summary: null,
		tab: "dashboard"
	}),
	setCourtSpot: (spot) => set({ courtSpot: spot }),
	addCourtShot: (result) => set((state) => {
		const spot = state.courtSpot;
		const current = state.courtDraft[spot] ?? {
			makes: 0,
			attempts: 0
		};
		return { courtDraft: {
			...state.courtDraft,
			[spot]: {
				makes: current.makes + (result === "make" ? 1 : 0),
				attempts: current.attempts + 1
			}
		} };
	}),
	logCourt: () => {
		const state = get();
		const day = todayKey();
		const logged = entriesFrom(state.courtDraft, day, "court");
		if (!logged.length) return 0;
		const bonus = shotBonus(logged, state.shotXpDay, day);
		set({
			shots: [...logged, ...state.shots].slice(0, 500),
			courtDraft: {},
			xp: state.xp + bonus.xp,
			shotXpDay: bonus.shotXpDay
		});
		return bonus.xp;
	},
	completeChallenge: (id) => {
		const state = get();
		const day = todayKey();
		if (state.challenges.some((item) => item.id === id && item.day === day)) return false;
		set({
			challenges: [{
				id,
				day
			}, ...state.challenges].slice(0, 200),
			xp: state.xp + XP.challenge,
			streak: nextStreak(state.streak, state.lastActive, day),
			lastActive: day
		});
		return true;
	},
	setNote: (note) => set({ note: note.slice(0, 180) }),
	toggleSeen: (id, index) => set((state) => {
		const current = state.seen[id]?.slice() ?? [
			false,
			false,
			false
		];
		current[index] = !current[index];
		return { seen: {
			...state.seen,
			[id]: current
		} };
	}),
	resetProgress: () => set({
		...fresh,
		profile: get().profile
	})
}), {
	name: "court-creed-v1",
	version: 1,
	migrate: (persisted) => {
		const state = persisted ?? {};
		return {
			...state,
			tab: normalizeTab(state.tab)
		};
	},
	onRehydrateStorage: () => (state) => {
		if (!state) return;
		state.tab = normalizeTab(state.tab);
		if (state.session?.running) {
			state.session.running = false;
			state.session.anchor = null;
		}
	}
}));
function shotTotals(entries) {
	return {
		makes: entries.reduce((sum, entry) => sum + entry.makes, 0),
		attempts: entries.reduce((sum, entry) => sum + entry.attempts, 0)
	};
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-sm tracking-widest text-muted uppercase",
		children
	});
}
function PrimaryButton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		...props,
		className: cn("flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 font-semibold text-bg disabled:cursor-not-allowed disabled:opacity-40", className)
	});
}
function QuietButton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		...props,
		className: cn("flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 font-semibold text-fg disabled:cursor-not-allowed disabled:opacity-40", className)
	});
}
function Meter({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "block h-1.5 overflow-hidden rounded-full bg-line",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block h-full bg-primary",
			style: { width: `${Math.max(0, Math.min(100, value))}%` }
		})
	});
}
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "confidence",
		label: "Confidence"
	},
	{
		id: "lead",
		label: "Lead"
	},
	{
		id: "aggression",
		label: "Aggression"
	}
];
function CreedTrack({ now, nested = false }) {
	const challenges = useCreed((state) => state.challenges);
	const complete = useCreed((state) => state.completeChallenge);
	const note = useCreed((state) => state.note);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const featured = now ? featuredChallenge(now) : CHALLENGES[0];
	const today = now ? todayKey(now) : null;
	const list = CHALLENGES.filter((item) => item.id !== featured.id && (filter === "all" || item.track === filter));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: nested ? "px-4 pt-4" : "px-4 pt-5",
		children: [
			!nested && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Creed" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-4xl leading-none tracking-wide",
					children: "Confidence. Lead. Attack."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Drills build the skill. These build the habit of using it. A week sticks when you do the hard one out loud."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: cn("rounded-xl border border-primary bg-surface p-4", nested ? "" : "mt-5"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-sm tracking-widest text-primary uppercase",
						children: ["This week · ", TRACK_LABEL[featured.track]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl leading-none tracking-wide",
						children: featured.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: featured.how
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: ["Done looks like: ", featured.done]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChallengeButton, {
						id: featured.id,
						today,
						done: challenges,
						onDone: complete
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex gap-2 overflow-x-auto",
				children: FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(item.id),
					className: cn("h-11 shrink-0 rounded-full border px-3 text-sm", filter === item.id ? "border-primary bg-primary text-bg" : "border-line text-fg"),
					children: item.label
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: list.map((item) => {
					const doneToday = today ? challenges.some((entry) => entry.id === item.id && entry.day === today) : false;
					const doneWeek = now ? challenges.some((entry) => entry.id === item.id && sameWeek(entry.day, now)) : false;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-line p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm tracking-widest text-muted uppercase",
								children: TRACK_LABEL[item.track]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-lg leading-tight",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: item.how
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm",
								children: ["Done looks like: ", item.done]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChallengeButton, {
								id: item.id,
								today,
								done: challenges,
								onDone: complete
							}),
							doneWeek && !doneToday && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: "Logged earlier this week."
							})
						]
					}, item.id);
				})
			}),
			note.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-6 border-l-2 border-primary pl-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm tracking-widest text-muted uppercase",
					children: "Your sentence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: note
				})]
			})
		]
	});
}
function ChallengeButton({ id, today, done, onDone }) {
	if (today ? done.some((entry) => entry.id === id && entry.day === today) : false) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logged, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
		type: "button",
		className: "mt-4",
		onClick: () => onDone(id),
		children: "I did this"
	});
}
function Logged() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-4 flex items-center gap-2 text-sm text-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), " Logged today"]
	});
}
function Film({ nested = false }) {
	const position = useCreed((state) => state.profile.position);
	const seen = useCreed((state) => state.seen);
	const toggle = useCreed((state) => state.toggleSeen);
	const finished = useCreed((state) => state.finished);
	const start = useCreed((state) => state.startWorkout);
	const [open, setOpen] = (0, import_react.useState)(null);
	const level = unlockedLevel(finished);
	const players = playerOrder(position);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: nested ? "px-4 pt-4" : "px-4 pt-5",
		children: [!nested && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Film" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl leading-none tracking-wide",
				children: "Borrow one habit."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Four guards. You are not supposed to be them. Watch a minute with the sound down and look for one thing."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: cn("space-y-3", nested ? "" : "mt-5"),
			children: players.map((player) => {
				const expanded = open === player.id;
				const checks = seen[player.id] ?? [
					false,
					false,
					false
				];
				const workouts = uniqueWorkouts(player.drillIds);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-line bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-center gap-4 p-4 text-left",
						"aria-expanded": expanded,
						onClick: () => setOpen(expanded ? null : player.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-4xl leading-none text-primary",
							children: player.monogram
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-sm tracking-widest text-muted uppercase",
									children: player.pillar
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-lg leading-tight",
									children: player.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm text-muted",
									children: player.role
								})
							]
						})]
					}), expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-line px-4 pt-3 pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Watch for"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 space-y-2",
								children: player.watch.map((line, index) => {
									const on = Boolean(checks[index]);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggle(player.id, index),
										className: "flex w-full items-start gap-3 text-left text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("mt-0.5 flex size-6 shrink-0 items-center justify-center rounded border", on ? "border-primary bg-primary text-bg" : "border-line"),
											"aria-hidden": "true",
											children: on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line })]
									}) }, line);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm tracking-widest text-muted uppercase",
								children: "Take this"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 border-l-2 border-primary pl-3",
								children: player.take
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted",
								children: "Train it"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 space-y-2",
								children: workouts.map((id) => {
									const workout = workoutById(id);
									const locked = workout.level > level;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
										type: "button",
										disabled: locked,
										onClick: () => start(id),
										children: locked ? `${workout.title} · opens at level ${workout.level}` : `Start ${workout.title}`
									}, id);
								})
							})
						]
					})]
				}, player.id);
			})
		})]
	});
}
function uniqueWorkouts(drillIds) {
	const ids = [];
	for (const drillId of drillIds) {
		const workout = workoutForDrill(drillId);
		if (workout && !ids.includes(workout.id)) ids.push(workout.id);
	}
	return ids;
}
/** App shell: one content column and a fixed bottom bar, same on every section. */
function Scaffold({ children, navigation }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-lg pb-nav",
			children
		}), navigation]
	});
}
function BottomNavigationBar({ items, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed inset-x-0 bottom-0 z-20 border-t border-line bg-bg",
		"aria-label": "Sections",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-lg pb-safe",
			children: items.map((item) => {
				const Icon = item.icon;
				const on = value === item.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-current": on ? "page" : void 0,
					onClick: () => onChange(item.id),
					className: cn("relative flex min-h-14 flex-1 flex-col items-center justify-center gap-1 px-1 text-xs leading-none", on ? "text-fg" : "text-muted"),
					children: [
						on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 top-0 mx-auto h-0.5 w-8 bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							strokeWidth: on ? 2.4 : 1.8
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap",
							children: item.label
						})
					]
				}, item.id);
			})
		})
	});
}
function MotionCourt({ motion }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "motion relative overflow-hidden rounded-xl bg-court text-bg",
		"data-motion": motion,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 300 168",
				className: "block w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "16",
							y: "10",
							width: "268",
							height: "148"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "122",
							y1: "22",
							x2: "178",
							y2: "22",
							strokeWidth: "3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "150",
							cy: "34",
							r: "8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "150",
							y1: "34",
							x2: "150",
							y2: "22"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "112",
							y: "22",
							width: "76",
							height: "78"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 22 V68 A 110 72 0 0 0 260 68 V22" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "player" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "cone cone-a" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "cone cone-b" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ball" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ball ball-b" })
		]
	});
}
function ShotCourt({ selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 300 268",
		className: "w-full select-none rounded-xl bg-court text-bg",
		role: "group",
		"aria-label": "Half court",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "16",
					y: "12",
					width: "268",
					height: "244"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "120",
					y1: "26",
					x2: "180",
					y2: "26",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "150",
					cy: "40",
					r: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "150",
					y1: "40",
					x2: "150",
					y2: "26"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "112",
					y: "26",
					width: "76",
					height: "108"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "150",
					cy: "134",
					r: "28"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 26 V90 A 118 88 0 0 0 268 90 V26" })
			]
		}), SPOTS.map((spot) => {
			const on = spot.id === selected;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				role: "button",
				tabIndex: 0,
				"aria-label": spot.label,
				"aria-pressed": on,
				onClick: () => onSelect(spot.id),
				onKeyDown: (event) => {
					if (event.key === "Enter" || event.key === " ") {
						event.preventDefault();
						onSelect(spot.id);
					}
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: spot.x,
					cy: spot.y,
					r: "16",
					className: on ? "fill-primary" : "fill-court",
					stroke: "currentColor",
					strokeWidth: "2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: spot.x,
					y: spot.y + 3,
					textAnchor: "middle",
					fontSize: "8",
					fontWeight: "700",
					className: "fill-bg",
					style: { fontFamily: "Outfit, sans-serif" },
					children: spot.short
				})]
			}, spot.id);
		})]
	});
}
function beep() {
	const Ctx = window.AudioContext;
	if (!Ctx) return;
	const ctx = new Ctx();
	const osc = ctx.createOscillator();
	const gain = ctx.createGain();
	osc.type = "sine";
	osc.frequency.value = 698;
	gain.gain.value = .035;
	osc.connect(gain);
	gain.connect(ctx.destination);
	osc.start();
	gain.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + .22);
	osc.stop(ctx.currentTime + .24);
	window.setTimeout(() => void ctx.close(), 400);
}
function SessionScreen() {
	const session = useCreed((state) => state.session);
	if (useCreed((state) => state.summary) && !session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary, {});
	if (!session) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveSession, {});
}
function LiveSession() {
	const session = useCreed((state) => state.session);
	const profile = useCreed((state) => state.profile);
	const note = useCreed((state) => state.note);
	const tick = useCreed((state) => state.tick);
	const pause = useCreed((state) => state.pause);
	const resume = useCreed((state) => state.resume);
	const complete = useCreed((state) => state.completeDrill);
	const abandon = useCreed((state) => state.abandon);
	const setSpot = useCreed((state) => state.setSessionSpot);
	const setNote = useCreed((state) => state.setNote);
	const [leaving, setLeaving] = (0, import_react.useState)(false);
	const warned = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!session?.running) return;
		const id = window.setInterval(() => tick(Date.now()), 250);
		return () => window.clearInterval(id);
	}, [session?.running, tick]);
	(0, import_react.useEffect)(() => {
		const onHide = () => {
			if (document.hidden) pause();
		};
		document.addEventListener("visibilitychange", onHide);
		return () => document.removeEventListener("visibilitychange", onHide);
	}, [pause]);
	(0, import_react.useEffect)(() => {
		if (!session) return;
		const current = drillById(workoutById(session.workoutId).drillIds[session.index]);
		if (!(session.drillMs >= current.minutes * 6e4)) {
			warned.current = false;
			return;
		}
		if (!warned.current) {
			warned.current = true;
			if (useCreed.getState().profile.sound) beep();
		}
	}, [session]);
	if (!session) return null;
	const workout = workoutById(session.workoutId);
	const drill = drillById(workout.drillIds[session.index]);
	const remaining = drill.minutes * 6e4 - session.drillMs;
	const overtime = remaining < 0;
	const last = session.index === workout.drillIds.length - 1;
	const spot = drill.track === "pick" ? session.spot : drill.track ?? null;
	const tally = spot ? session.shots[spot] : void 0;
	const hands = handLabel(profile.hand);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-dvh max-w-lg px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-10 bg-bg pt-4 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
						workout.title,
						" · ",
						session.index + 1,
						"/",
						workout.drillIds.length
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-sm tracking-wide text-muted tabular-nums",
						children: [
							formatClock(session.workoutMs),
							" / ",
							workoutMinutes(workout),
							":00"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex size-11 items-center justify-center rounded-lg border border-line",
							onClick: () => session.running ? pause() : resume(),
							"aria-label": session.running ? "Pause" : "Resume",
							children: session.running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex size-11 items-center justify-center rounded-lg border border-line",
							onClick: () => setLeaving(true),
							"aria-label": "End workout",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-1",
					children: workout.drillIds.map((id, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1 flex-1 rounded-full", index <= session.index ? "bg-primary" : "bg-line") }, id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionCourt, { motion: drill.motion }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl leading-none tracking-wide",
					children: drill.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("font-display text-4xl leading-none tabular-nums", overtime && "text-primary"),
					children: formatClock(remaining)
				})]
			}),
			overtime && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-primary",
				children: "Time's up. Finish the rep, or mark it done."
			}),
			drill.model && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm tracking-widest text-muted uppercase",
				children: ["Study · ", drill.model === "clark" ? "Clark" : drill.model === "bueckers" ? "Bueckers" : drill.model === "watkins" ? "Watkins" : "Curry"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 border-l-2 border-primary pl-3 text-lg leading-snug",
				children: drill.cue
			}),
			drill.hands && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					"Strong hand is your ",
					hands.strong,
					". Weak hand is your ",
					hands.weak,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: drill.setup
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 space-y-2",
				children: drill.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg leading-none text-primary tabular-nums",
						children: index + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step })]
				}, step))
			}),
			drill.note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: "The sentence you'll say"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: note,
					onChange: (event) => setNote(event.target.value),
					rows: 3,
					maxLength: 180,
					placeholder: "I want the ball on the wing.",
					className: "mt-2 w-full resize-none rounded-lg border border-line bg-surface px-3 py-3 text-fg outline-none focus-visible:border-primary"
				})]
			}),
			spot && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [
					drill.track === "pick" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex gap-2 overflow-x-auto pb-1",
						children: SPOTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSpot(item.id),
							className: cn("h-11 shrink-0 rounded-full border px-3 text-sm", item.id === spot ? "border-primary bg-primary text-bg" : "border-line text-fg"),
							children: item.short
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotButtons, {
						spot,
						makes: tally?.makes ?? 0,
						attempts: tally?.attempts ?? 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Don't end on a miss. One more make, then you're done."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky bottom-0 bg-bg pt-4 pb-safe",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "button",
					onClick: () => complete(),
					children: last ? "Finish workout" : "Done with this drill"
				})
			}),
			leaving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 flex items-end justify-center bg-bg/80 px-4 pb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-lg rounded-xl border border-line bg-surface p-5",
					role: "dialog",
					"aria-modal": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl tracking-wide",
							children: "Leave this workout?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "This session won't be saved. Shots you tapped stay only if you finish."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
								type: "button",
								onClick: () => setLeaving(false),
								children: "Stay"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
								type: "button",
								onClick: () => abandon(),
								children: "Leave"
							})]
						})
					]
				})
			})
		]
	});
}
function ShotButtons({ spot, makes, attempts }) {
	const add = useCreed((state) => state.addSessionShot);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl tracking-wide",
			children: spotById(spot).label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "tabular-nums text-muted",
			children: [
				makes,
				"/",
				attempts
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 grid grid-cols-2 gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
			type: "button",
			onClick: () => add("miss", spot),
			children: "Miss"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
			type: "button",
			onClick: () => add("make", spot),
			children: "Make"
		})]
	})] });
}
function Summary() {
	const summary = useCreed((state) => state.summary);
	const streak = useCreed((state) => state.streak);
	const dismiss = useCreed((state) => state.dismissSummary);
	if (!summary) return null;
	const workout = workoutById(summary.workoutId);
	const next = summary.unlocked ? LEVELS.find((level) => level.id === summary.level + 1) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col justify-between px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Work logged" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl leading-none tracking-wide",
				children: workout.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted",
				children: [summary.minutes, " min on the floor"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 font-display text-6xl leading-none tabular-nums",
				children: ["+", summary.xp]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm tracking-widest text-muted uppercase",
				children: "XP"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 font-display text-3xl tabular-nums",
				children: [streak, "-day streak"]
			}),
			summary.cleared && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 border-l-2 border-primary pl-3 text-lg",
				children: LEVEL_NOTES[summary.level]
			}),
			next && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-lg",
				children: [next.name, " is open."]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
			type: "button",
			onClick: () => dismiss(),
			children: "Back to today"
		})]
	});
}
function Shots() {
	const draft = useCreed((state) => state.courtDraft);
	const spot = useCreed((state) => state.courtSpot);
	const setSpot = useCreed((state) => state.setCourtSpot);
	const add = useCreed((state) => state.addCourtShot);
	const log = useCreed((state) => state.logCourt);
	const shots = useCreed((state) => state.shots);
	const [loggedXp, setLoggedXp] = (0, import_react.useState)(null);
	const draftEntries = Object.values(draft);
	const draftMakes = draftEntries.reduce((sum, item) => sum + (item?.makes ?? 0), 0);
	const draftAttempts = draftEntries.reduce((sum, item) => sum + (item?.attempts ?? 0), 0);
	const here = draft[spot] ?? {
		makes: 0,
		attempts: 0
	};
	const totals = shotTotals(shots);
	const rows = SPOTS.map((item) => {
		const bag = shots.filter((entry) => entry.spot === item.id);
		const makes = bag.reduce((sum, entry) => sum + entry.makes, 0);
		const attempts = bag.reduce((sum, entry) => sum + entry.attempts, 0);
		return {
			...item,
			makes,
			attempts
		};
	}).sort((a, b) => b.attempts - a.attempts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Shot Lab" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 flex items-end justify-between gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl leading-none tracking-wide",
					children: "Makes count. Misses count."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					"Left and right are yours, facing the basket.",
					" ",
					totals.attempts > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums text-fg",
						children: [
							"All time ",
							totals.makes,
							"/",
							totals.attempts,
							" · ",
							pct(totals.makes, totals.attempts),
							"%"
						]
					}) : "Nothing logged yet."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotCourt, {
					selected: spot,
					onSelect: setSpot
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-baseline justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-wide",
					children: spotById(spot).label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "tabular-nums text-muted",
					children: [
						here.makes,
						"/",
						here.attempts,
						here.attempts > 0 ? ` · ${pct(here.makes, here.attempts)}%` : ""
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
					type: "button",
					onClick: () => add("miss"),
					children: "Miss"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "button",
					onClick: () => add("make"),
					children: "Make"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted tabular-nums",
				children: [
					"This session ",
					draftMakes,
					"/",
					draftAttempts,
					draftAttempts > 0 ? ` · ${pct(draftMakes, draftAttempts)}%` : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
				type: "button",
				className: "mt-3",
				disabled: draftAttempts === 0,
				onClick: () => setLoggedXp(log()),
				children: "Log this session"
			}),
			loggedXp !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: loggedXp > 0 ? ` Logged. +${loggedXp} XP for 10 shots.` : " Logged."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 font-display text-2xl tracking-wide",
				children: "By spot"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-3",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSpot(row.id),
					className: "block w-full text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-baseline justify-between gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-muted",
							children: row.attempts > 0 ? `${row.makes}/${row.attempts} · ${pct(row.makes, row.attempts)}%` : "—"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, { value: row.attempts ? pct(row.makes, row.attempts) : 0 })
					})]
				}) }, row.id))
			})
		]
	});
}
var NAV = [
	{
		id: "dashboard",
		label: "Dashboard",
		icon: House
	},
	{
		id: "workouts",
		label: "Workouts",
		icon: Dumbbell
	},
	{
		id: "shotlab",
		label: "Shot Lab",
		icon: Target
	},
	{
		id: "coach",
		label: "Coach",
		icon: Megaphone
	}
];
function useNow() {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => setNow(/* @__PURE__ */ new Date()), []);
	return now;
}
function Screen() {
	const tab = useCreed((state) => state.tab);
	const session = useCreed((state) => state.session);
	const summary = useCreed((state) => state.summary);
	const now = useNow();
	const [settingsOpen, setSettingsOpen] = (0, import_react.useState)(false);
	const [coachPane, setCoachPane] = (0, import_react.useState)("film");
	if (session || summary) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionScreen, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scaffold, {
		navigation: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNavigationBar, {
			items: NAV,
			value: tab,
			onChange: (id) => useCreed.getState().setTab(id)
		}),
		children: [
			tab === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {
				now,
				onSettings: () => setSettingsOpen(true),
				onOpenCoach: () => {
					setCoachPane("creed");
					useCreed.getState().setTab("coach");
				}
			}),
			tab === "workouts" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workouts, {}),
			tab === "shotlab" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shots, {}),
			tab === "coach" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coach, {
				now,
				pane: coachPane,
				onPane: setCoachPane
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSheet, {
				open: settingsOpen,
				onOpenChange: setSettingsOpen
			})
		]
	});
}
function Dashboard({ now, onSettings, onOpenCoach }) {
	const profile = useCreed((state) => state.profile);
	const xp = useCreed((state) => state.xp);
	const streak = useCreed((state) => state.streak);
	const lastActive = useCreed((state) => state.lastActive);
	const finished = useCreed((state) => state.finished);
	const lastDone = useCreed((state) => state.lastDone);
	const shots = useCreed((state) => state.shots);
	const challenges = useCreed((state) => state.challenges);
	const start = useCreed((state) => state.startWorkout);
	const level = unlockedLevel(finished);
	const levelMeta = LEVELS[level - 1];
	const current = WORKOUTS.filter((workout) => workout.level === level);
	const cleared = current.filter((workout) => (finished[workout.id] ?? 0) > 0).length;
	const suggested = suggestedWorkout(finished, now ? now.getDay() : null);
	const other = current.find((workout) => workout.id !== suggested.id);
	const today = now ? todayKey(now) : null;
	const doneToday = today != null && lastDone[suggested.id] === today;
	const shownStreak = now ? visibleStreak(streak, lastActive, todayKey(now)) : streak;
	const totals = shotTotals(shots);
	const fresh = xp === 0 && challenges.length === 0 && Object.keys(finished).length === 0;
	const name = profile.name.trim();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Dashboard" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-3xl leading-none tracking-wide",
						children: "COURT CREED"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 block h-1 w-10 bg-primary" })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1 font-display text-xl tabular-nums",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4 text-primary" }), shownStreak]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsButton, { onOpen: onSettings })]
				})]
			}),
			name ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onSettings,
				className: "mt-5 block text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-4xl leading-none tracking-wide",
					children: name.toUpperCase()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-1 block text-sm text-muted",
					children: [
						profile.position === "BOTH" ? "Guard" : profile.position,
						" · ",
						levelMeta.name
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onSettings,
				className: "mt-5 block text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-3xl leading-none tracking-wide",
					children: "Your jersey"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-1 block text-sm text-muted",
					children: [
						"Tap to add a name · ",
						profile.position === "BOTH" ? "Guard" : profile.position,
						" · ",
						levelMeta.name
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm",
				children: emphasis(profile.position)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted tabular-nums",
						children: [xp, " XP"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: level < 5 ? `${cleared} of 2 to open the next level` : cleared === 2 ? "All five levels open" : `${cleared} of 2 on this level`
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, { value: level === 5 && cleared === 2 ? 100 : cleared / 2 * 100 })
				})]
			}),
			fresh && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm text-muted",
				children: "Built for a guard heading into 7th. The workouts get harder only after you finish both in a level. The other track — calling for the ball, talking first, attacking when you might miss — is how it shows up in a game."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-5 rounded-xl border border-line bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: doneToday ? "Done today" : "Today's work" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-4xl leading-none tracking-wide",
						children: suggested.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							workoutMinutes(suggested),
							" min · ",
							levelMeta.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: suggested.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						type: "button",
						className: "mt-4",
						onClick: () => start(suggested.id),
						children: doneToday ? "Run it again" : "Start workout"
					}),
					other && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "mt-3 h-11 w-full text-sm text-muted",
						onClick: () => start(other.id),
						children: [
							"Or ",
							other.title,
							" · ",
							workoutMinutes(other),
							" min"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onOpenCoach,
				className: "mt-3 w-full rounded-xl border border-line p-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "This week" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block font-display text-2xl leading-tight tracking-wide",
					children: (now ? featuredChallenge(now) : CHALLENGES[0]).title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-5 grid grid-cols-3 gap-3 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Workouts",
						value: String(Object.values(finished).reduce((sum, n) => sum + n, 0))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Challenges",
						value: String(challenges.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Shots",
						value: totals.attempts ? `${totals.makes}/${totals.attempts}` : "—"
					})
				]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line px-2 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-2xl leading-none tabular-nums",
			children: value
		})]
	});
}
function Workouts() {
	const finished = useCreed((state) => state.finished);
	const start = useCreed((state) => state.startWorkout);
	const level = unlockedLevel(finished);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Workouts" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl leading-none tracking-wide",
				children: "It builds with you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Five levels. Both workouts open the next one. You can always come back — the best guards still do Feet & Form."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 space-y-6",
				children: LEVELS.map((item) => {
					const open = item.id <= level;
					const workouts = WORKOUTS.filter((workout) => workout.level === item.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-5xl leading-none tabular-nums",
								children: String(item.id).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-2xl tracking-wide",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: item.promise
							})
						] }), !open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
							className: "size-5 text-muted",
							"aria-label": "Locked"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-2",
						children: workouts.map((workout) => {
							const count = finished[workout.id] ?? 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: !open,
								onClick: () => start(workout.id),
								className: "flex w-full items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 text-left disabled:cursor-not-allowed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-lg leading-tight",
									children: workout.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-sm text-muted",
									children: [
										workoutMinutes(workout),
										" min · ",
										workout.drillIds.length,
										" drills",
										!open ? ` · finish level ${item.id - 1}` : ""
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg tabular-nums text-muted",
									children: count > 0 ? `×${count}` : "—"
								})]
							}, workout.id);
						})
					})] }, item.id);
				})
			})
		]
	});
}
function Coach({ now, pane, onPane }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Coach" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl leading-none tracking-wide",
				children: pane === "film" ? "Borrow one habit." : "Confidence. Lead. Attack."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: pane === "film" ? "Film first. Watch a minute with the sound down and take one thing to the floor." : "Then the creed. Drills build the skill. These build the habit of using it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-2 gap-2",
				role: "tablist",
				"aria-label": "Coach",
				children: [["film", "Film"], ["creed", "Creed"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": pane === id,
					onClick: () => onPane(id),
					className: cn("h-11 rounded-lg border text-sm", pane === id ? "border-primary bg-primary text-bg" : "border-line"),
					children: label
				}, id))
			})
		]
	}), pane === "film" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, { nested: true }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreedTrack, {
		now,
		nested: true
	})] });
}
function SettingsButton({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: onOpen,
		className: "flex size-11 items-center justify-center rounded-lg border border-line",
		"aria-label": "Settings",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" })
	});
}
function SettingsSheet({ open, onOpenChange }) {
	const profile = useCreed((state) => state.profile);
	const setProfile = useCreed((state) => state.setProfile);
	const reset = useCreed((state) => state.resetProgress);
	const [confirming, setConfirming] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			onOpenChange(next);
			if (!next) setConfirming(false);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-40 bg-bg/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed inset-x-0 bottom-0 z-50 mx-auto max-h-dvh w-full max-w-lg overflow-y-auto rounded-t-xl border border-line bg-surface p-5 text-fg outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-3xl tracking-wide",
					children: "Jersey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-1 text-sm text-muted",
					children: "Saved on this phone."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 block text-sm",
					children: ["Name on the jersey", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: profile.name,
						maxLength: 16,
						onChange: (event) => setProfile({ name: event.target.value.replace(/[^a-zA-Z0-9' -]/g, "") }),
						placeholder: "Your name",
						className: "mt-2 h-12 w-full rounded-lg border border-line bg-bg px-3 text-base text-fg outline-none focus-visible:border-primary"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm",
					children: "Position"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-3 gap-2",
					children: [
						"PG",
						"SG",
						"BOTH"
					].map((position) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setProfile({ position }),
						className: cn("h-11 rounded-lg border text-sm", profile.position === position ? "border-primary bg-primary text-bg" : "border-line"),
						children: position === "BOTH" ? "Both" : position
					}, position))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm",
					children: "Strong hand"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-2 gap-2",
					children: ["R", "L"].map((hand) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setProfile({ hand }),
						className: cn("h-11 rounded-lg border text-sm", profile.hand === hand ? "border-primary bg-primary text-bg" : "border-line"),
						children: hand === "R" ? "Right" : "Left"
					}, hand))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setProfile({ sound: !profile.sound }),
					className: "mt-4 flex h-12 w-full items-center justify-between rounded-lg border border-line px-3 text-sm",
					children: ["Timer chime", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.sound ? "On" : "Off" })]
				}),
				!confirming ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-6 h-11 text-sm text-muted",
					onClick: () => setConfirming(true),
					children: "Reset progress"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "This clears workouts, shots, streak, and XP. Your name stays."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
							type: "button",
							onClick: () => setConfirming(false),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
							type: "button",
							onClick: () => {
								reset();
								setConfirming(false);
								onOpenChange(false);
							},
							children: "Reset"
						})]
					})]
				})
			]
		})] })
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {});
}
//#endregion
export { Home as component };
