const { useState } = React;

// New Icons for Shot Shapes
const CornerRightUp = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'M10 14L15 9L20 14' }), React.createElement('path', { d: 'M4 4H11V11' }));

const CornerLeftUp = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'M14 14L9 9L4 14' }), React.createElement('path', { d: 'M20 4H13V11' }));

const ArrowRight = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'm12 5 7 7-7 7' }), React.createElement('path', { d: 'M5 12h14' }));

const ChevronsRight = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'm13 17 5-5-5-5' }), React.createElement('path', { d: 'm6 17 5-5-5-5' }));

const ChevronsDown = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'm7 6 5 5 5-5' }), React.createElement('path', { d: 'm7 13 5 5 5-5' }));

// Existing Icons
const TreePine = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'm17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z' }), React.createElement('path', { d: 'M12 22V12' }));

const Waves = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' }), React.createElement('path', { d: 'M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' }), React.createElement('path', { d: 'M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' }));

const Target = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('circle', { cx: 12, cy: 12, r: 10 }), React.createElement('circle', { cx: 12, cy: 12, r: 6 }), React.createElement('circle', { cx: 12, cy: 12, r: 2 }));

const Compass = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('circle', { cx: 12, cy: 12, r: 10 }), React.createElement('polygon', { points: '16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88' }));

const ArrowUp = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'm5 12 7-7 7 7' }), React.createElement('path', { d: 'M12 19V5' }));

const ArrowDown = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'm5 12 7 7 7-7' }), React.createElement('path', { d: 'M12 5v14' }));

const Mountain = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'm8 3 4 8 5-5 5 15H2L8 3z' }));

const Layers = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'm12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z' }), React.createElement('path', { d: 'm22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65' }), React.createElement('path', { d: 'm22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65' }));

const ArrowLeft = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'm12 19-7-7 7-7' }), React.createElement('path', { d: 'M19 12H5' }));

const ChevronRight = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2
}, React.createElement('path', { d: 'm9 18 6-6-6-6' }));


// Database Architecture
const liesDB = {
  surfaces: {
    fairway: {
      id: 'fairway',
      name: 'Fairway',
      type: 'surface',
      difficulty_score: 2,
      icon: TreePine,
      color: 'emerald',
      description: 'Short, well-manicured grass providing clean contact.'
    },
    light_rough: {
      id: 'light_rough',
      name: 'Light Rough',
      type: 'surface',
      difficulty_score: 4,
      icon: TreePine,
      color: 'green',
      description: 'Manageable rough with some grass interference'
    },
    heavy_rough: {
      id: 'heavy_rough',
      name: 'Heavy Rough',
      type: 'surface',
      difficulty_score: 7,
      icon: TreePine,
      color: 'amber',
      description: 'Dense rough requiring power and precision'
    },
    tight_lie: {
      id: 'tight_lie',
      name: 'Tight Lie',
      type: 'surface',
      difficulty_score: 6,
      icon: Target,
      color: 'orange',
      description: 'Thin turf requiring clean contact'
    },
    bunker_clean: {
      id: 'bunker_clean',
      name: 'Bunker (Clean)',
      type: 'surface',
      difficulty_score: 5,
      icon: Waves,
      color: 'yellow',
      description: 'Good sand lie in bunker'
    },
    bunker_fried_egg: {
      id: 'bunker_fried_egg',
      name: 'Bunker (Fried Egg)',
      type: 'surface',
      difficulty_score: 8,
      icon: Waves,
      color: 'red',
      description: 'Ball buried in sand - extremely difficult'
    },
    divot: {
      id: 'divot',
      name: 'Divot',
      type: 'surface',
      difficulty_score: 7,
      icon: Target,
      color: 'stone',
      description: 'Ball sitting in old divot mark'
    },
    mud_ball: {
      id: 'mud_ball',
      name: 'Mud Ball',
      type: 'surface',
      difficulty_score: 6,
      icon: Compass,
      color: 'brown',
      description: 'Ball covered with mud affecting flight'
    }
  },
  slopes: {
    uphill: {
      id: 'uphill',
      name: 'Uphill',
      type: 'slope',
      difficulty_score: 3,
      icon: ArrowUp,
      color: 'blue',
      description: 'Ball sitting on upward slope'
    },
    downhill: {
      id: 'downhill',
      name: 'Downhill',
      type: 'slope',
      difficulty_score: 5,
      icon: ArrowDown,
      color: 'indigo',
      description: 'Ball sitting on downward slope'
    },
    ball_above_feet: {
      id: 'ball_above_feet',
      name: 'Ball Above Feet',
      type: 'slope',
      difficulty_score: 4,
      icon: Mountain,
      color: 'cyan',
      description: 'Ball higher than your feet'
    },
    ball_below_feet: {
      id: 'ball_below_feet',
      name: 'Ball Below Feet',
      type: 'slope',
      difficulty_score: 6,
      icon: Layers,
      color: 'purple',
      description: 'Ball lower than your feet'
    }
  },
  shot_shapes: {
    high_fade: {
      id: 'high_fade',
      name: 'High Fade',
      type: 'shot_shape',
      difficulty_score: 5,
      icon: CornerRightUp,
      color: 'pink',
      description: 'Ball starts straight, curves gently right, lands soft with spin'
    },
    high_draw: {
      id: 'high_draw',
      name: 'High Draw',
      type: 'shot_shape',
      difficulty_score: 5,
      icon: CornerLeftUp,
      color: 'teal',
      description: 'Ball starts straight, curves gently left, gains extra distance'
    },
    hook: {
      id: 'hook',
      name: 'Hook',
      type: 'shot_shape',
      difficulty_score: 7,
      icon: ArrowLeft,
      color: 'rose',
      description: 'Ball curves sharply left, useful for working around obstacles'
    },
    slice: {
      id: 'slice',
      name: 'Slice',
      type: 'shot_shape',
      difficulty_score: 7,
      icon: ArrowRight,
      color: 'fuchsia',
      description: 'Ball curves sharply right with shorter flight (usually unintentional)'
    },
    knockdown: {
      id: 'knockdown',
      name: 'Knockdown',
      type: 'shot_shape',
      difficulty_score: 6,
      icon: ArrowDown,
      color: 'lime',
      description: 'Low penetrating flight that cuts through wind'
    },
    flop_shot: {
      id: 'flop_shot',
      name: 'Flop Shot',
      type: 'shot_shape',
      difficulty_score: 8,
      icon: ArrowUp,
      color: 'sky',
      description: 'High arcing shot that lands softly with minimal roll'
    },
    bump_run: {
      id: 'bump_run',
      name: 'Bump & Run',
      type: 'shot_shape',
      difficulty_score: 3,
      icon: ChevronsRight,
      color: 'violet',
      description: 'Low running shot that bounces and rolls toward target'
    },
    punch_shot: {
      id: 'punch_shot',
      name: 'Punch Shot',
      type: 'shot_shape',
      difficulty_score: 4,
      icon: ChevronsDown,
      color: 'emerald',
      description: 'Low controlled escape shot to get back in play from trouble'
    }
  },
  // New Driver Quick Fix data structure
  driver_quick_fixes: {
    slice_fix: {
      id: 'slice_fix',
      name: 'Slice Fix',
      type: 'driver_quick_fix',
      difficulty_score: 1, // Arbitrary, as it's a fix, not a lie
      icon: CornerRightUp,
      color: 'red',
      description: 'Ball curves left to right'
    },
    hook_fix: {
      id: 'hook_fix',
      name: 'Hook Fix',
      type: 'driver_quick_fix',
      difficulty_score: 1,
      icon: CornerLeftUp,
      color: 'rose',
      description: 'Ball curves right to left'
    },
    popup_fix: {
      id: 'popup_fix',
      name: 'Pop-up Fix',
      type: 'driver_quick_fix',
      difficulty_score: 1,
      icon: ArrowUp,
      color: 'sky',
      description: 'Ball goes extremely high, no distance'
    },
    topping_fix: {
      id: 'topping_fix',
      name: 'Topping Fix',
      type: 'driver_quick_fix',
      difficulty_score: 1,
      icon: ArrowDown,
      color: 'teal',
      description: 'Ball rolls on ground'
    },
    fat_shot_fix: {
      id: 'fat_shot_fix',
      name: 'Fat Shot Fix',
      type: 'driver_quick_fix',
      difficulty_score: 1,
      icon: Layers,
      color: 'brown',
      description: 'Hit ground before ball'
    },
    snap_hook_fix: {
      id: 'snap_hook_fix',
      name: 'Snap Hook Fix',
      type: 'driver_quick_fix',
      difficulty_score: 1,
      icon: ArrowLeft,
      color: 'purple',
      description: 'Ball darts hard left immediately'
    },
    push_fix: {
      id: 'push_fix',
      name: 'Push Fix',
      type: 'driver_quick_fix',
      difficulty_score: 1,
      icon: ArrowRight,
      color: 'orange',
      description: 'Ball flies straight right'
    },
    pull_fix: {
      id: 'pull_fix',
      name: 'Pull Fix',
      type: 'driver_quick_fix',
      difficulty_score: 1,
      icon: Compass, // Using Compass for directional error
      color: 'indigo',
      description: 'Ball flies straight left'
    }
  }
};

const adviceDB = {
  // Surface advice
  fairway: {
    intermediate: {
      setup: "Standard stance and ball position.",
      swing: "Focus on ball-first contact with clean turf interaction.",
      club: "Any club in your bag works well.",
      expected: "Predictable ball flight with optimal spin."
    }
  },
  light_rough: {
    intermediate: {
      setup: "Slightly wider stance, ball position normal to slightly back",
      swing: "Steeper angle of attack, accelerate through impact",
      club: "Take one extra club, expect reduced spin",
      expected: "Slightly reduced distance and spin, manageable trajectory"
    }
  },
  heavy_rough: {
    intermediate: {
      setup: "Slightly wider stance, ball back in stance, hands forward",
      swing: "Steeper swing path to cut through grass, accelerate through impact",
      club: "Take 1-2 clubs more, consider hybrid over long iron",
      expected: "Reduced distance, lower trajectory, less spin"
    }
  },
  tight_lie: {
    intermediate: {
      setup: "Ball back in stance, hands forward, narrow stance",
      swing: "Steep descending blow, hit ball first then turf",
      club: "Consider one less club, avoid chunky contact",
      expected: "Lower ball flight, increased roll, precision required"
    }
  },
  bunker_clean: {
    intermediate: {
      setup: "Open stance, ball forward, feet dug in for stability",
      swing: "Hit sand first, accelerate through impact zone",
      club: "Sand wedge or lob wedge, open face slightly",
      expected: "High trajectory, soft landing, good distance control"
    }
  },
  bunker_fried_egg: {
    intermediate: {
      setup: "Open stance, open clubface dramatically, ball forward",
      swing: "Steep angle of attack, hit 2-3 inches behind ball with force",
      club: "Most lofted wedge available, consider 60° if available",
      expected: "Ball will come out low and run significantly"
    }
  },
  divot: {
    intermediate: {
      setup: "Ball back in stance, hands well forward, narrow stance",
      swing: "Very steep angle of attack, hit down and through",
      club: "Take one extra club, expect lower trajectory",
      expected: "Lower ball flight, reduced distance, but manageable"
    }
  },
  mud_ball: {
    intermediate: {
      setup: "Normal setup, avoid touching ball during address",
      swing: "Smooth tempo, avoid spinning the ball excessively",
      club: "Expect unpredictable ball flight, aim for center of green",
      expected: "Unpredictable flight pattern, usually reduced distance"
    }
  },
  // Slope advice
  uphill: {
    intermediate: {
      setup: "Adjust spine angle to match slope, more weight on downhill foot",
      swing: "Swing along the slope plane, follow through up the hill",
      club: "Take 1-2 clubs more due to higher trajectory",
      expected: "Higher ball flight, shorter carry, soft landing"
    }
  },
  downhill: {
    intermediate: {
      setup: "Spine perpendicular to slope, ball back in stance",
      swing: "Swing down the slope, low follow-through, stay balanced",
      club: "Take 1-2 clubs less, ball will fly lower and farther",
      expected: "Lower trajectory, increased roll, harder to stop"
    }
  },
  ball_above_feet: {
    intermediate: {
      setup: "Stand more upright, grip up on club, ball tends to draw",
      swing: "Maintain balance, ball will tend to hook/draw",
      club: "Aim right of target, consider one club less",
      expected: "Ball curves right-to-left, slightly increased distance"
    }
  },
  ball_below_feet: {
    intermediate: {
      setup: "Bend more at waist, grip down on club, maintain balance",
      swing: "Stay down through impact, ball will tend to fade/slice",
      club: "Aim left of target, consider one club more",
      expected: "Ball curves left-to-right, slightly reduced distance"
    }
  },
  // Shot Shape advice
  high_fade: {
    intermediate: {
      setup: "Align feet slightly left of target, create open stance",
      grip: "Weaken grip by turning hands left, lighten pressure",
      ball: "Position in center of stance for balanced contact",
      swing: "Cut across ball at impact, maintain open clubface through finish",
      best_for: "Approach shots, stopping ball quickly on greens",
      description: "Ball starts straight, curves gently right, lands soft with spin"
    }
  },
  high_draw: {
    intermediate: {
      setup: "Move ball position closer to left foot in stance",
      grip: "Strengthen grip by rotating right hand over left",
      swing: "Create shallower swing plane, inside-to-out path",
      feel: "Release hands naturally, let clubface close smoothly",
      best_for: "Tee shots for distance, long iron approaches",
      description: "Ball starts straight, curves gently left, gains extra distance"
    }
  },
  hook: {
    intermediate: {
      setup: "Position ball well forward near left foot",
      grip: "Very strong grip - close right hand significantly over left",
      swing: "Take club back on pronounced inside path",
      feel: "Wrap club around body on backswing and through impact",
      best_for: "Getting around trees, severe doglegs left",
      description: "Ball curves sharply left, useful for working around obstacles"
    }
  },
  slice: {
    intermediate: {
      setup: "Open stance with feet aimed left of target",
      grip: "Very weak grip - hands rotated well left on handle",
      swing: "Outside-to-in swing path across the ball",
      feel: "Lead wrist stays extended through impact, clubface open",
      best_for: "Severe doglegs right, working around right-side obstacles",
      description: "Ball curves sharply right with shorter flight (usually unintentional)"
    }
  },
  knockdown: {
    intermediate: {
      setup: "Shift weight to left foot, move ball back in stance",
      club: "Choose one less loft than normal distance requires",
      swing: "Three-quarter backswing with controlled tempo",
      follow: "Keep finish low and abbreviated, punch through ball",
      best_for: "Windy conditions, staying under tree branches",
      description: "Low penetrating flight that cuts through wind"
    }
  },
  flop_shot: {
    intermediate: {
      setup: "Wide stance with feet well apart, ball near left foot",
      grip: "Open clubface significantly before taking grip",
      club: "Use lob wedge or sand wedge for maximum loft",
      swing: "Make full swing with slow, smooth tempo throughout",
      best_for: "Short-sided pins, clearing bunkers close to target",
      description: "High arcing shot that lands softly with minimal roll"
    }
  },
  bump_run: {
    intermediate: {
      setup: "Narrow stance, choke down on grip for control",
      ball: "Position back in stance for downward strike",
      swing: "Minimal wrist hinge, half or quarter swing length",
      club: "Can use any club - 7-iron through pitching wedge common",
      best_for: "Just off green, firm conditions, simple approach",
      description: "Low running shot that bounces and rolls toward target"
    }
  },
  punch_shot: {
    intermediate: {
      setup: "Narrow stance with feet close together, ball back",
    swing: "Shortened backswing, focus on hitting down on ball",
      follow: "Abbreviated finish, keep hands ahead of clubhead",
      feel: "Punch down and through with authority, no scooping",
      best_for: "Under trees, from rough, getting back to fairway",
      description: "Low controlled escape shot to get back in play from trouble"
    }
  },
  // Advice for Driver Quick Fixes
  slice_fix: {
    intermediate: {
      steps: [
        "Strengthen your grip - rotate both hands clockwise so you see 2-3 knuckles on left hand",
        "Swing from inside-out - feel like you're hitting from 4 o'clock to 10 o'clock",
        "Close clubface 2-3 degrees at address",
        "Keep right shoulder lower than left at impact"
      ]
    }
  },
  hook_fix: {
    intermediate: {
      steps: [
        "Weaken your grip - rotate hands counter-clockwise, see only 1-2 knuckles on left hand",
        "Hold clubface open through impact, don't let wrists roll over",
        "Feel like you're swinging slightly out-to-in",
        "Keep left wrist flat at impact"
      ]
    }
  },
  popup_fix: {
    intermediate: {
      steps: [
        "Tee ball so only 1/3 shows above driver crown",
        "Set up with ball opposite left heel, not forward of it",
        "Sweep ball off tee with level or slightly ascending blow",
        "Keep spine tilted away from target at impact"
      ]
    }
  },
  topping_fix: {
    intermediate: {
      steps: [
        "Keep eyes on back of ball until well after impact",
        "Maintain original spine angle - don't stand up during swing",
        "Feel like you're hitting the equator of the ball",
        "Make practice swings brushing grass, not digging"
      ]
    }
  },
  fat_shot_fix: {
    intermediate: {
      steps: [
        "Position ball off inside of left heel",
        "60% of weight on right foot at address",
        "Transfer weight to left side on downswing",
        "Brush tee after ball contact, not before"
      ]
    }
  },
  snap_hook_fix: {
    intermediate: {
      steps: [
        "Check grip pressure - hold club like holding a bird",
        "Feel clubface stays square to swing path through impact",
        "Swing at 80% speed for better control",
        "Keep right palm facing target longer through impact"
      ]
    }
  },
  push_fix: {
    intermediate: {
      steps: [
        "Actively rotate hips and shoulders through impact",
        "Feel left hip clearing out of the way",
        "Don't let arms get stuck behind body",
        "Finish with belt buckle facing target"
      ]
    }
  },
  pull_fix: {
    intermediate: {
      steps: [
        "Start downswing with lower body, not arms/shoulders",
        "Feel club dropping behind you before coming through",
        "Keep right elbow close to body on downswing",
        "Let arms extend naturally through impact zone"
      ]
    }
  }
};

const comboModifiersDB = {
  'fairway+uphill': {
    difficulty_adjustment: -1,
    priority_tip: "Favorable combination - perfect setup for high, soft approach",
    club_adjustment: "+1-2 clubs",
    ball_flight: "High trajectory with soft landing"
  },
  'heavy_rough+downhill': {
    difficulty_adjustment: +3,
    priority_tip: "EXTREMELY DIFFICULT - Consider laying up or alternate strategy",
    club_adjustment: "Very unpredictable - focus on advancing ball safely",
    ball_flight: "Unpredictable flight path and distance"
  }
};

// Database Query Functions
const dbQueries = {
  getLie: (id, type) => {
    if (type === 'surface') return liesDB.surfaces[id];
    if (type === 'slope') return liesDB.slopes[id];
    if (type === 'shot_shape') return liesDB.shot_shapes[id];
    if (type === 'driver_quick_fix') return liesDB.driver_quick_fixes[id]; // New type
    return null;
  },
  
  getAdvice: (lieId, skillLevel = 'intermediate') => {
    return adviceDB[lieId]?.[skillLevel] || adviceDB[lieId]?.intermediate;
  },
  
  getComboModifier: (surfaceId, slopeId) => {
    const key = `${surfaceId}+${slopeId}`;
    return comboModifiersDB[key];
  },
  
  calculateComboDifficulty: (surfaceId, slopeId) => {
    const surface = liesDB.surfaces[surfaceId];
    const slope = liesDB.slopes[slopeId];
    const modifier = dbQueries.getComboModifier(surfaceId, slopeId);
    
    let baseDifficulty = surface.difficulty_score + slope.difficulty_score;
    if (modifier) {
      baseDifficulty += modifier.difficulty_adjustment;
    }
    
    return Math.min(Math.max(baseDifficulty, 1), 10);
  },
  
  getAllSurfaces: () => Object.values(liesDB.surfaces),
  getAllSlopes: () => Object.values(liesDB.slopes),
  getAllShotShapes: () => Object.values(liesDB.shot_shapes),
  getAllDriverQuickFixes: () => Object.values(liesDB.driver_quick_fixes) // New getter
};

const QuickCaddieApp = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLie, setSelectedLie] = useState(null); // Unified state for selected lie
  const [selectedSurface, setSelectedSurface] = useState(null);
  const [selectedSlope, setSelectedSlope] = useState(null);
  const [comboStep, setComboStep] = useState('surface');

  // Helper function for color classes
  const getColorClass = (color) => {
    const colorClasses = {
      emerald: 'bg-emerald-100 text-emerald-600',
      green: 'bg-green-100 text-green-600',
      amber: 'bg-amber-100 text-amber-600',
      orange: 'bg-orange-100 text-orange-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      red: 'bg-red-100 text-red-600',
      stone: 'bg-stone-100 text-stone-600',
      brown: 'bg-amber-100 text-amber-700',
      blue: 'bg-blue-100 text-blue-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      cyan: 'bg-cyan-100 text-cyan-600',
      purple: 'bg-purple-100 text-purple-600',
      pink: 'bg-pink-100 text-pink-600', // New color for shot shapes
      teal: 'bg-teal-100 text-teal-600', // New color for shot shapes
      rose: 'bg-rose-100 text-rose-600', // New color for shot shapes
      fuchsia: 'bg-fuchsia-100 text-fuchsia-600', // New color for shot shapes
      lime: 'bg-lime-100 text-lime-600', // New color for shot shapes
      sky: 'bg-sky-100 text-sky-600', // New color for shot shapes
      violet: 'bg-violet-100 text-violet-600' // New color for shot shapes
    };
    return colorClasses[color] || 'bg-gray-100 text-gray-600';
  };

  // Navigation functions
  const goHome = () => {
    setCurrentView('home');
    setSelectedCategory(null);
    setSelectedLie(null);
    setSelectedSurface(null);
    setSelectedSlope(null);
    setComboStep('surface');
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'combo') {
      setCurrentView('combo-surface');
      setComboStep('surface');
    } else if (category === 'shot_shape') {
      setCurrentView('shot-shape-category');
    } else if (category === 'driver_quick_fix') { // New category
      setCurrentView('driver-quick-fix-category');
    }
    else {
      setCurrentView('category');
    }
  };

  const selectLie = (lie) => {
    setSelectedLie(lie); // Set the unified selected lie
    setCurrentView('result');
  };

  const selectComboSurface = (surface) => {
    setSelectedSurface(surface);
    setComboStep('slope');
    setCurrentView('combo-slope');
  };

  const selectComboSlope = (slope) => {
    setSelectedSlope(slope);
    setCurrentView('combo-result');
  };

  const skipSlope = () => {
    setSelectedSlope(null);
    setCurrentView('combo-result');
  };

  // Home screen matching the design
  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-600">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <div className="text-white mb-4">
          <span className="text-4xl">⛳</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Quick Caddie</h1>
        <h2 className="text-2xl text-white/90 mb-2">Choose Your Lie Type</h2>
        <p className="text-white/80">Select a category to get started</p>
      </div>

      {/* Categories - now a 2x2 grid */}
      <div className="px-6 pb-8 grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Changed to grid */}
        <button
          onClick={() => selectCategory('surface')}
          className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                <TreePine className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">Surface</h3>
                <p className="text-gray-600">Grass, sand, divots, and ground conditions</p>
                <p className="text-sm text-gray-500">8 options</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
        </button>

        <button
          onClick={() => selectCategory('slope')}
          className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center">
                <Mountain className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">Slope</h3>
                <p className="text-gray-600">Uphill, downhill, and sidehill positions</p>
                <p className="text-sm text-gray-500">4 options</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
        </button>

        <button
          onClick={() => selectCategory('shot_shape')}
          className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-600" /> {/* Using Target for now */}
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">Shot Shape</h3>
                <p className="text-gray-600">Control ball flight for specific situations</p>
                <p className="text-sm text-gray-500">8 options</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
        </button>

        <button
          onClick={() => selectCategory('combo')}
          className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">Build a Combo</h3>
                <p className="text-gray-600">Combine surface + slope for realistic scenarios</p>
                <p className="text-sm text-gray-500">Mix & Match options</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
        </button>

        {/* New Driver Quick Fix button */}
        <button
          onClick={() => selectCategory('driver_quick_fix')}
          className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] md:col-span-2" // Span full width on md and up
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                <Compass className="w-6 h-6 text-blue-600" /> {/* Using Compass for Driver Quick Fix category icon */}
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">Driver Quick Fix</h3>
                <p className="text-gray-600">Fast solutions for common driver issues</p>
                <p className="text-sm text-gray-500">8 options</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
        </button>
      </div>
    </div>
  );

  // Combo surface selection matching the design
  const renderComboSurface = () => {
    const surfaces = dbQueries.getAllSurfaces();

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <div className="flex items-center px-4 py-4">
            <button onClick={goHome} className="mr-4">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold">Build a Combo Lie</h1>
              <p className="text-blue-100">Step 1 of 2: Select surface condition</p>
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="px-4 pb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                <span className="text-white font-medium">Surface</span>
              </div>
              <div className="flex-1 h-0.5 bg-white/30"></div>
              <div className="flex items-center space-x-2">
                <div className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                <span className="text-white/70">Slope</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Step 1: Choose Surface Condition</h2>
            <p className="text-gray-600">Select the primary surface where your ball lies</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {surfaces.map((surface) => {
              const IconComponent = surface.icon;
              return (
                <button
                  key={surface.id}
                  onClick={() => selectComboSurface(surface)}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] border border-gray-100"
                >
                  <div className="text-center">
                    <div className={`${getColorClass(surface.color)} rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{surface.name}</h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Result screen matching the design
  const renderResult = () => {
    const lie = selectedLie; // Use the unified selectedLie
    const advice = dbQueries.getAdvice(lie.id);
    const IconComponent = lie.icon;

    // Dynamically render advice based on lie type
    const renderAdviceDetails = () => {
      if (lie.type === 'shot_shape') {
        return (
          <div className="space-y-3 ml-4">
            {advice.setup && (
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-900">Setup:</strong>
                  <span className="text-gray-700 ml-1">{advice.setup}</span>
                </div>
              </div>
            )}
            {advice.grip && (
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-900">Grip:</strong>
                  <span className="text-gray-700 ml-1">{advice.grip}</span>
                </div>
              </div>
            )}
            {advice.ball && (
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-900">Ball Position:</strong>
                  <span className="text-gray-700 ml-1">{advice.ball}</span>
                </div>
              </div>
            )}
            {advice.swing && (
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-900">Swing:</strong>
                  <span className="text-gray-700 ml-1">{advice.swing}</span>
                </div>
              </div>
            )}
            {advice.feel && (
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-900">Feel:</strong>
                  <span className="text-gray-700 ml-1">{advice.feel}</span>
                </div>
              </div>
            )}
            {advice.club && (
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-900">Club:</strong>
                  <span className="text-gray-700 ml-1">{advice.club}</span>
                </div>
              </div>
            )}
            {advice.follow && (
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-900">Follow Through:</strong>
                  <span className="text-gray-700 ml-1">{advice.follow}</span>
                </div>
              </div>
            )}
            {advice.best_for && (
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-900">Best For:</strong>
                  <span className="text-gray-700 ml-1">{advice.best_for}</span>
                </div>
              </div>
            )}
          </div>
        );
      } else if (lie.type === 'driver_quick_fix') { // New branch for driver quick fixes
        return (
          <div className="space-y-3 ml-4">
            {advice.steps && advice.steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        );
      }
      else {
        // Existing advice structure for surface and slope
        return (
          <div className="space-y-3 ml-4">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <strong className="text-gray-900">Setup:</strong>
                <span className="text-gray-700 ml-1">{advice.setup}</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <strong className="text-gray-900">Swing:</strong>
                <span className="text-gray-700 ml-1">{advice.swing}</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <strong className="text-gray-900">Club:</strong>
                <span className="text-gray-700 ml-1">{advice.club}</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <strong className="text-gray-900">Expected:</strong>
                <span className="text-gray-700 ml-1">{advice.expected}</span>
              </div>
            </div>
          </div>
        );
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-green-500 text-white">
          <div className="flex items-center px-4 py-4">
            <button onClick={goHome} className="mr-4">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold">How to Play</h1>
              <p className="text-green-100">{lie.name}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Lie info card */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6 border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className={`${getColorClass(lie.color)} rounded-full w-16 h-16 flex items-center justify-center`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{lie.name}</h2>
                <p className="text-gray-600 italic">{lie.description}</p>
              </div>
            </div>
          </div>

          {/* Advice section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className={`border-l-4 ${lie.type === 'driver_quick_fix' ? 'border-blue-500' : 'border-green-500'} p-6`}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {lie.type === 'driver_quick_fix' ? 'Quick Fix Steps' : 'How to Play This Shot'}
              </h3>
              
              <div className="space-y-4">
                {renderAdviceDetails()}
              </div>
            </div>

            {/* Back button */}
            <div className="p-6 pt-0">
              <button
                onClick={goHome}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Lie Selection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Combo slope selection screen
  const renderComboSlope = () => {
    const slopes = dbQueries.getAllSlopes();

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <div className="flex items-center px-4 py-4">
            <button onClick={goHome} className="mr-4">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold">Build a Combo Lie</h1>
              <p className="text-blue-100">Step 2 of 2: Select slope (Optional)</p>
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="px-4 pb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                <span className="text-white/70">Surface</span>
              </div>
              <div className="flex-1 h-0.5 bg-white"></div>
              <div className="flex items-center space-x-2">
                <div className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                <span className="text-white font-medium">Slope</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Selected surface */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6 border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className={`${getColorClass(selectedSurface.color)} rounded-full w-10 h-10 flex items-center justify-center`}>
                <selectedSurface.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Selected: {selectedSurface.name}</h3>
                <p className="text-sm text-gray-600">{selectedSurface.description}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Step 2: Choose Slope Condition</h2>
            <p className="text-gray-600">Select the slope where your ball lies (optional)</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {slopes.map((slope) => {
              const IconComponent = slope.icon;
              return (
                <button
                  key={slope.id}
                  onClick={() => selectComboSlope(slope)}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] border border-gray-100"
                >
                  <div className="text-center">
                    <div className={`${getColorClass(slope.color)} rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{slope.name}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={skipSlope}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-colors"
          >
            Skip Slope - Surface Only
          </button>
        </div>
      </div>
    );
  };

  // Combo result screen
  const renderComboResult = () => {
    const title = selectedSlope ? 
      `${selectedSurface.name} + ${selectedSlope.name}` : 
      selectedSurface.name;

    const combinedDifficulty = selectedSlope ? 
      dbQueries.calculateComboDifficulty(selectedSurface.id, selectedSlope.id) : 
      selectedSurface.difficulty_score;

    // Generate cohesive combo advice as a golf instructor would
    const generateComboAdvice = () => {
      const surfaceAdvice = dbQueries.getAdvice(selectedSurface.id);
      const slopeAdvice = selectedSlope ? dbQueries.getAdvice(selectedSlope.id) : null;
      const modifier = selectedSlope ? dbQueries.getComboModifier(selectedSurface.id, selectedSlope.id) : null;

      if (!selectedSlope) {
        return {
          setup: surfaceAdvice.setup,
          swing: surfaceAdvice.swing,
          club: surfaceAdvice.club,
          expected: surfaceAdvice.expected,
          strategy: "Focus on executing clean contact with this surface condition."
        };
      }

      // Combine advice for specific surface + slope combinations
      let combinedAdvice = {};

      // Priority warning for extremely difficult combos
      if (modifier && modifier.priority_tip.includes("EXTREMELY DIFFICULT")) {
        combinedAdvice.strategy = modifier.priority_tip + " Your primary goal is advancing the ball safely, not distance.";
        combinedAdvice.setup = "Take extra time to assess this lie. Consider if laying up to a better position is the smart play.";
        combinedAdvice.swing = "Make a controlled, conservative swing. Don't try to be a hero - get the ball back in play.";
        combinedAdvice.club = modifier.club_adjustment;
        combinedAdvice.expected = modifier.ball_flight + " Distance and accuracy will be severely compromised.";
        return combinedAdvice;
      }

      // Generate contextual advice based on specific combinations
      const surfaceId = selectedSurface.id;
      const slopeId = selectedSlope.id;

      // Fairway combinations
      if (surfaceId === 'fairway' && slopeId === 'uphill') {
        combinedAdvice = {
          strategy: "Excellent lie! This uphill fairway shot sets up perfectly for a high, soft approach.",
          setup: "Position ball slightly forward, align spine with the slope, and put more weight on your downhill (back) foot.",
          swing: "Swing up the slope with confidence. Let the hill help launch the ball high.",
          club: "Take 1-2 clubs more than normal distance. The upslope will reduce carry but give you a soft landing.",
          expected: "High, towering ball flight that lands softly. Perfect for attacking pins."
        };
      }
      else if (surfaceId === 'fairway' && slopeId === 'downhill') {
        combinedAdvice = {
          strategy: "Good lie but tricky slope. Focus on control over distance.",
          setup: "Ball back in stance, spine perpendicular to slope. Keep your balance centered.",
          swing: "Swing down the slope with a lower follow-through. Don't fight the slope.",
          club: "Take 1-2 clubs LESS than normal. Ball will fly lower and run significantly.",
          expected: "Lower trajectory with lots of run. Plan for the ball to release toward the pin."
        };
      }
      else if (surfaceId === 'fairway' && slopeId === 'ball_above_feet') {
        combinedAdvice = {
          strategy: "Perfect contact opportunity with natural draw bias from the slope.",
          setup: "Stand more upright, grip down on the club, and aim RIGHT of your target.",
          swing: "Make a smooth, balanced swing. The slope will naturally close the clubface.",
          club: "Consider one less club - you'll get a slight distance boost from the draw.",
          expected: "Strong right-to-left ball flight. Aim right and let the slope work for you."
        };
      }
      else if (surfaceId === 'fairway' && slopeId === 'ball_below_feet') {
        combinedAdvice = {
          strategy: "Great lie but requires precision. The slope will want to fade the ball.",
          setup: "Bend more from your waist, grip down for control, and aim LEFT of your target.",
          swing: "Stay down through impact - don't come up early. Ball will want to slice.",
          club: "Take one extra club and aim well left of the pin.",
          expected: "Left-to-right ball flight. Aim left and trust your setup."
        };
      }
      // Heavy rough combinations
      else if (surfaceId === 'heavy_rough' && slopeId === 'downhill') {
        combinedAdvice = {
          strategy: "DANGER ZONE! This is tour-level difficulty. Consider your options carefully.",
          setup: "Ball way back, hands forward, steep spine angle to match slope. Widen stance for stability.",
          swing: "Steep, powerful swing to cut through grass. Commit fully but stay balanced.",
          club: "Take your most lofted club that can advance the ball meaningfully. Distance is secondary.",
          expected: "Extremely unpredictable. Ball may come out low and run, or pop up and drop. Play for position."
        };
      }
      else if (surfaceId === 'heavy_rough' && slopeId === 'uphill') {
        combinedAdvice = {
          strategy: "Challenging but manageable. The upslope actually helps get the ball airborne.",
          setup: "Ball back, hands forward, spine matching slope. The hill is your friend here.",
          swing: "Aggressive, steep swing up the slope. Let the hill help lift the ball out.",
          club: "Take 2-3 clubs more than normal. You'll lose significant distance but gain height.",
          expected: "Higher trajectory than typical rough shots. Ball will come out softer."
        };
      }
      // Tight lie combinations
      else if (surfaceId === 'tight_lie' && slopeId === 'ball_below_feet') {
        combinedAdvice = {
          strategy: "Tour-level shot! Requires exceptional precision and commitment.",
          setup: "Ball back, hands forward, bend significantly at waist. Grip down at least 2 inches.",
          swing: "Ultra-steep angle of attack. Pick the ball clean - no margin for error.",
          club: "Take 2 clubs more and aim well left. You need all the help you can get.",
          expected: "Low, fading ball flight. Any miss will likely be a shank or thin shot."
        };
      }
      else if (surfaceId === 'tight_lie' && slopeId === 'uphill') {
        combinedAdvice = {
          strategy: "The upslope helps with this tight lie by providing a better angle of attack.",
          setup: "Ball back but not as far back as normal tight lie. Let the slope help you.",
          swing: "Descending blow up the slope. The hill gives you margin for error.",
          club: "Take 1-2 clubs more. The slope makes this tight lie much more manageable.",
          expected: "Higher flight than normal tight lie shots. Much better chance of success."
        };
      }
      // Bunker combinations
      else if (surfaceId === 'bunker_clean' && slopeId === 'uphill') {
        combinedAdvice = {
          strategy: "Favorable bunker shot! The upslope makes this much easier.",
          setup: "Normal bunker setup but let the slope help lift the ball. Feet dug in well.",
          swing: "Hit behind the ball as normal, but the slope does half the work for you.",
          club: "Sand wedge works perfectly. Don't need to open the face as much.",
          expected: "Ball comes out high and soft. This is actually an easy bunker shot."
        };
      }
      else if (surfaceId === 'bunker_fried_egg' && slopeId === 'downhill') {
        combinedAdvice = {
          strategy: "NIGHTMARE SCENARIO! Accept that this is about survival, not scoring.",
          setup: "Open everything - stance, clubface. Ball forward despite the slope.",
          swing: "Hit 3-4 inches behind the ball with maximum force. You need explosion power.",
          club: "Most lofted wedge, opened dramatically. Think 'blast it out' not 'finesse it out.'",
          expected: "Ball will come out low and running fast. Just try to get it on the green."
        };
      }
      // Light rough combinations
      else if (surfaceId === 'light_rough' && slopeId === 'ball_above_feet') {
        combinedAdvice = {
          strategy: "Manageable combination. The slope helps compensate for the rough by adding natural draw spin.",
          setup: "Wider stance for stability, ball slightly back, stand more upright and grip up on club. Aim right of target.",
          swing: "Steeper angle into the rough, but let the slope naturally close the clubface through impact.",
          club: "Take your normal club for this distance. The rough and draw effect roughly cancel each other out.",
          expected: "Strong right-to-left ball flight with normal distance. Ball will release more than usual upon landing."
        };
      }
      else if (surfaceId === 'light_rough' && slopeId === 'ball_below_feet') {
        combinedAdvice = {
          strategy: "Double challenge - rough reduces spin while slope promotes fade. Need extra precision.",
          setup: "Wider stance, ball back, bend significantly at waist, grip down 2 inches. Aim well left of target.",
          swing: "Very steep angle of attack to cut through grass cleanly. Stay down through impact - don't come up early.",
          club: "Take two clubs more than normal distance. You'll lose distance from both the rough and the awkward stance.",
          expected: "Left-to-right ball flight with reduced distance. Ball will run more due to reduced backspin from rough."
        };
      }
      else if (surfaceId === 'light_rough' && slopeId === 'uphill') {
        combinedAdvice = {
          strategy: "Favorable combination! The upslope helps get the ball airborne despite the rough.",
          setup: "Slightly wider stance, ball normal position, spine matching the slope, weight on downhill foot.",
          swing: "Steeper attack angle up the slope. Let the hill help lift the ball out of the rough.",
          club: "Take two clubs more - one for the rough, one for the upslope.",
          expected: "High, soft-landing ball flight. The upslope negates most of the rough's negative effects."
        };
      }
      else if (surfaceId === 'light_rough' && slopeId === 'downhill') {
        combinedAdvice = {
          strategy: "Tricky combination. Rough wants the ball high, slope wants it low. Favor control over distance.",
          setup: "Ball back in stance, hands forward, spine perpendicular to slope. Stay balanced.",
          swing: "Steep, descending blow down the slope. Don't try to help the ball up - let the loft do the work.",
          club: "Take one more club than normal distance. The effects partially cancel out.",
          expected: "Lower trajectory than normal rough shots, with moderate run. Focus on accuracy over distance."
        };
      }
      // Default for uncovered combinations
      else {
        const dominantFactor = selectedSurface.difficulty_score > selectedSlope.difficulty_score ? selectedSurface : selectedSlope;
        const secondaryFactor = dominantFactor === selectedSurface ? selectedSlope : selectedSurface;
        
        combinedAdvice = {
          strategy: `The ${dominantFactor.name} is the primary challenge here. Adjust your technique accordingly while managing the ${secondaryFactor.name}.`,
          setup: dominantFactor === selectedSurface ? surfaceAdvice.setup : slopeAdvice.setup,
          swing: dominantFactor === selectedSurface ? surfaceAdvice.swing : slopeAdvice.swing,
          club: dominantFactor === selectedSurface ? surfaceAdvice.club : slopeAdvice.club,
          expected: dominantFactor === selectedSurface ? surfaceAdvice.expected : slopeAdvice.expected
        };
      }

      return combinedAdvice;
    };

    const advice = generateComboAdvice();

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-orange-500 text-white">
          <div className="flex items-center px-4 py-4">
            <button onClick={goHome} className="mr-4">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold">Combo Analysis</h1>
              <p className="text-orange-100">{title}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Combo info card */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-1">Combined difficulty: {combinedDifficulty}/10</p>
              </div>
              <div className="flex space-x-2">
                <div className={`${getColorClass(selectedSurface.color)} rounded-full w-12 h-12 flex items-center justify-center`}>
                  <selectedSurface.icon className="w-6 h-6" />
                </div>
                {selectedSlope && (
                  <div className={`${getColorClass(selectedSlope.color)} rounded-full w-12 h-12 flex items-center justify-center`}>
                    <selectedSlope.icon className="w-6 h-6" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Strategy alert */}
          {advice.strategy && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-xl">
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Game Plan</h4>
              <p className="text-blue-700 font-medium">{advice.strategy}</p>
            </div>
          )}

          {/* Unified advice section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="border-l-4 border-orange-500 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">How to Execute This Shot</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Setup & Alignment</h4>
                    <p className="text-gray-700">{advice.setup}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Swing Execution</h4>
                    <p className="text-gray-700">{advice.swing}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Club Selection & Aim</h4>
                    <p className="text-gray-700">{advice.club}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">What to Expect</h4>
                    <p className="text-gray-700">{advice.expected}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back button */}
            <div className="p-6 pt-0">
              <button
                onClick={goHome}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Lie Selection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCategory = () => {
    const lies = selectedCategory === 'surface' ? 
      dbQueries.getAllSurfaces() : 
      dbQueries.getAllSlopes();

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-green-500 text-white">
          <div className="flex items-center px-4 py-4">
            <button onClick={goHome} className="mr-4">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">
              {selectedCategory === 'surface' ? 'Surface' : 'Slope'}
            </h1>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {lies.map((lie) => {
              const IconComponent = lie.icon;
              return (
                <button
                  key={lie.id}
                  onClick={() => selectLie(lie)}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] border border-gray-100"
                >
                  <div className="text-center">
                    <div className={`${getColorClass(lie.color)} rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{lie.name}</h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderShotShapeCategory = () => {
    const shotShapes = dbQueries.getAllShotShapes();

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-purple-500 text-white">
          <div className="flex items-center px-4 py-4">
            <button onClick={goHome} className="mr-4">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">Shot Shape</h1>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {shotShapes.map((lie) => {
              const IconComponent = lie.icon;
              return (
                <button
                  key={lie.id}
                  onClick={() => selectLie(lie)}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] border border-gray-100"
                >
                  <div className="text-center">
                    <div className={`${getColorClass(lie.color)} rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{lie.name}</h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // New render function for Driver Quick Fix category
  const renderDriverQuickFixCategory = () => {
    const quickFixes = dbQueries.getAllDriverQuickFixes();

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-blue-500 text-white"> {/* Changed header color for this category */}
          <div className="flex items-center px-4 py-4">
            <button onClick={goHome} className="mr-4">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">Driver Quick Fix</h1>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {quickFixes.map((fix) => {
              const IconComponent = fix.icon;
              return (
                <button
                  key={fix.id}
                  onClick={() => selectLie(fix)}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] border border-gray-100"
                >
                  <div className="text-center">
                    <div className={`${getColorClass(fix.color)} rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{fix.name}</h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Main render logic
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return renderHome();
      case 'category':
        return renderCategory();
      case 'shot-shape-category':
        return renderShotShapeCategory();
      case 'driver-quick-fix-category': // New case for driver quick fixes
        return renderDriverQuickFixCategory();
      case 'combo-surface':
        return renderComboSurface();
      case 'combo-slope':
        return renderComboSlope();
      case 'combo-result':
        return renderComboResult();
      case 'result':
        return renderResult();
      default:
        return renderHome();
    }
  };

  return renderCurrentView();
};

// Use createRoot for React 18 compatibility, ensuring it's only called once
const container = document.getElementById('root');
// Check if root already exists on the container to prevent re-initialization warnings
if (!container._reactRoot) { 
    container._reactRoot = ReactDOM.createRoot(container);
}
container._reactRoot.render(React.createElement(QuickCaddieApp));
