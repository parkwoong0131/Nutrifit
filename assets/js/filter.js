let exercise = [
    // ----------------- 상체 -------------------
    // - 등 - 
        { id: 'pullUp', name: 'pullUp', location: ['gym', 'home'], posture: 'standing', tool: 'bar', group: 'weight', aim: 'back', difficulty: 'high' },
        { id: 'chinUp', name: 'chinUp', location: ['gym', 'home'], posture: 'standing', tool: 'bar', group: 'weight', aim: 'back', difficulty: 'high' },
        { id: 'barbellRow', name: 'barbellRow', location: ['gym', 'home'], posture: 'standing', tool: ['dumbell', 'barbell'], group: 'weight', aim:'back', difficulty: 'middle' },
        { id: 'oneArmDumbellRow', name: 'oneArmDumbellRow', location: ['gym', 'home'], posture: 'standing', tool: 'dumbbell', group: 'weight' , aim: 'back', difficulty: 'middle' },
        { id: 'latPull Down', name: 'latPull Down', location: 'gym', posture: 'sitting', tool: ['machine', 'band'], group: 'weight', aim: 'back', difficulty: 'low' },
        { id: 'romanianDeadlift', name: 'romanianDeadlift', location: 'gym', posture: 'standing', tool: ['dumbbell', 'barbell'], group: 'weight', aim: 'back', difficulty: 'high' },
    // - 가슴 - 
        { id: 'pushUp', name: 'pushUp', location: 'home,gym', posture: 'kneelDown', tool: 'none', group: 'weight' , aim: 'Chest', difficulty: 'low' },
        { id: 'BenchPress', name: 'BenchPress', location: 'layDown', posture: 'lay', tool: ['dumbbell', 'barbell'], group: 'weight' , aim: 'Chest', difficulty: 'middle' },
        { id: 'dumbbellFly', name: 'dumbbellFly', location: 'gym', posture: 'laydown', tool: 'dumbbell', group: 'weight' , aim: 'Chest', difficulty: 'low' },
        { id: 'dips', name: 'dips', location: 'home,gym', posture:'standing', tool: 'machine', group: 'weight' , aim: 'Chest', difficulty: 'high' },
        { id: 'cableCrossover', name: 'cableCrossover', location: 'gym', posture: 'staing', tool: 'machine', group: 'weight' , aim: 'Chest', difficulty: 'high' },
    // - 어깨 - 
        { id: 'overheadPress', name: 'overheadPress', location: 'gym', posture: 'standing', tool: ['dumbbell', 'barbell'], group: 'weight' , aim: 'shoulder', difficulty: 'low' },
        { id: 'dumbbellShoulderPress', name: 'dumbbellShoulderPress', location: ['home','gym'], posture: ['standing','stting'], tool: 'dumbbell', group: 'weight' , aim: 'shoulder', difficulty: 'low' },
        { id: 'sideLateralRaise', name: 'sideLateralRaise', location: ['home','gym'], posture: ['standing', 'sitting'], tool: 'dumbbell', group: 'weight' , aim: 'shoulder', difficulty: 'middle' },
        { id: 'facePull', name: 'facePull', location: 'gym', posture: 'standing', tool: 'machine', group: 'weight' , aim: 'shoulder', difficulty: 'high' },
        { id: 'handstand', name: 'handstand', location: ['home','gym'], posture: 'standing', tool: 'machine', group: 'weight' , aim: 'shoulder', difficulty: 'middle' },
        { id: 'barbellShrug', name: 'barbellShrug', location: 'gym', posture: 'standing', tool: 'barbell', group: 'weight' , aim: 'shoulder', difficulty: 'low' },
    // - 팔 - 
        { id: 'barbellPreacherCurl', name: 'barbellPreacherCurl', location: 'gym', posture: 'standing', tool: 'barbell', group: 'weight' , aim: 'arm', difficulty: 'low' },
        { id: 'armCurlMachine', name: 'armCurlMachine', location: 'gym', posture: 'sitting', tool: 'machine', group: 'weight' , aim: 'arm', difficulty: 'low' },
        { id: 'cableHammerCurl', name: 'cableHammerCurl', location: 'gym', posture: 'standing', tool: 'machine', group: 'weight' , aim: 'arm', difficulty: 'middle' },
    // ----------------- 하체 -------------------
        { id: 'frontSquat', name: 'frontSquat', location: ['home', 'gym'], posture: 'standing', tool: ['none', 'barbell', 'dumbell'], group: 'weight' , aim: 'leg', difficulty: 'middle' },
        { id: 'backSquat', name: 'backSquat', location: ['home','gym'], posture: 'standing', tool: ['none', 'barbell', 'dumbell'], group: 'weight' , aim: 'leg', difficulty: 'middle' },
        { id: 'Lunge', name: 'Lunge', location: ['home','gym'], posture: 'standing', tool: ['none', 'barbell', 'dumbell'], group: 'weight' , aim: 'leg', difficulty: 'middle' },
        { id: 'deadlift', name: 'deadlift', location: 'gym', posture: 'standing', tool: 'dumbell', group: 'weight' , aim: 'leg', difficulty: 'middle' },
        { id: 'legPress', name: 'legPress', location: 'gym', posture: 'sitting', tool: 'machine', group: 'weight' , aim: 'leg', difficulty: 'low' },
        { id: 'legCurl', name: 'legCurl', location: 'gym', posture: 'kneelDown', tool: 'machine', group: 'weight' , aim: 'leg', difficulty: 'low' },
        { id: 'legExtension', name: 'legExtension', location: 'sitting', posture: 'kneelDown', tool: 'machine', group: 'weight' , aim: 'leg', difficulty: 'low' },
    // ----------------- 유산소 -------------------
        { id: 'barMuscleUp', name: 'barMuscle-up', location: 'gym', posture: 'standing', tool: 'machine', group: 'cardio' , aim: 'cardio', difficulty: 'high' },
        { id: 'assaultBike', name: 'assaultBike', location: ['home','gym'], posture: 'sitting', tool: 'machine', group: 'cardio' , aim: 'cardio', difficulty: 'low' },
        { id: 'jumpRope', name: 'jumpRope', location: ['home','gym','office','library','shop'], posture: 'standing', tool: 'rope', group: 'cardio' , aim: 'cardio', difficulty: 'low' },
        { id: 'climbingStairs', name: 'climbingStairs', location: ['home','gym'], posture: 'standing', tool: 'machine', group: 'cardio' , aim: 'cardio', difficulty: 'low' },
        { id: 'jumpingJack', name: 'jumpingJack', location: ['home','gym','office','library','shop'], posture: 'standing', tool: 'none', group: 'cardio' , aim: 'cardio', difficulty: 'low' },
        { id: 'running', name: 'running', location: ['home','gym'], posture: 'standing', tool: 'none', group: 'cardio' , aim: 'cardio', difficulty: 'low' },
    // ---------------- 스트레칭 -------------------    
        { id: 'backStretching', name: 'backStretching', location: ['home','gym','office','library','shop'], posture: 'standing', tool: 'none', group: 'cardio' , aim: 'back', difficulty: 'low' },
        { id: 'chestStretching', name: 'chestStretching', location: ['home','gym','office','library','shop'], posture: 'standing', tool: 'none', group: 'cardio' , aim: 'chest', difficulty: 'low' },
        { id: 'shoulderStretching', name: 'shoulderStretching', location: ['home','gym','office','library','shop'], posture: 'standing', tool: 'none', group: 'cardio' , aim: 'shoulder', difficulty: 'low' },
        { id: 'armStretching', name: 'armStretching', location: ['home','gym','office','library','shop'], posture: 'standing', tool: 'none', group: 'cardio' , aim: 'arm', difficulty: 'low' },
        { id: 'legStretching', name: 'legStretching', location: ['home','gym','office','library','shop',], posture: 'standing', tool: 'none', group: 'cardio' , aim: 'leg', difficulty: 'low' },
        
    ];
    
    
    
    const loca_value = 'gym'
    const post_value = 'standing'
    const tool_value = 'machine'
    const group_value = 'weight'
    const aim_value = 'back'
    const diff_value = 'low'
    
    const location_result = exercise.filter(function(res){
        return res.location == loca_value});
        
        const posture_result = location_result.filter(function(res){
            return res.posture == post_value});
            
            
            console.log(location_result);
            
            //   let location  = [
            //     { id: 'shoulderPress', name: 'shoulderPress', location: gym, posture: '###', tool:'###', group: '###', aim: shoulder, difficulty: '###' },
            //   ];
            
            //   let posture = [
            //     { id: 'shoulderPress', name: 'shoulderPress', location: gym, posture: '###', tool:'###', group: '###', aim: shoulder, difficulty: '###' },
            //   ];
             
            //   let tool = [
            //     { id: 'shoulderPress', name: 'shoulderPress', location: gym, posture: '###', tool:'###', group: '###', aim: shoulder, difficulty: '###' },
            //   ];
             
            //   let group = [
            //     { id: 'shoulderPress', name: 'shoulderPress', location: gym, posture: '###', tool:'###', group: '###', aim: shoulder, difficulty: '###' },
            //   ];
            
            //   let aim = [
            //     { id: 'shoulderPress', name: 'shoulderPress', location: gym, posture: '###', tool:'###', group: '###', aim: shoulder, difficulty: '###' },
            //   ];
            
            //   let difficulty = [
            //     { id: 'shoulderPress', name: 'shoulderPress', location: gym, posture: '###', tool:'###', group: '###', aim: shoulder, difficulty: '###' },
            //   ];
