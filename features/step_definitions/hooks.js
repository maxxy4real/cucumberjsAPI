import { BeforeAll, AfterAll} from 'cucumber'

BeforeAll(async function() {
    console.log('The magic testing starts here');
});

AfterAll(async function() {
    console.log('The show is over');
});