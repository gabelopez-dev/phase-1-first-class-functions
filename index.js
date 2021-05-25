function receivesAFunction(spy){
spy();
}

function returnsANamedFunction() { return "before all" ; }

function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = 'protein bar';
    } else if (exercise === swimFortyLaps) {
      breakfast = 'kale smoothie';
    } else {
      breakfast = 'granola';
    }
  
    exerciseRoutine(exercise);
  
  }