/* eslint-disable import/extensions */

import make from '../../core/util/make'
import missingBag from './cs-missing-bag'
import onThePlane from './cs-on-the-plane'
import toughestNutInTown from './cs-toughest-nut-in-town'
import aWomanStopsHerCar from './cs-a-woman-stops-her-car'
import CarolArrivesAtCascade from './cs-carol-arrives-at-cascade'
import atTheWarmHouse from './cs-carol-arrives-at-the-warm-home'
import carolGoesToBed from './cs-Carol-goes-to-bed'
import stopsTaxi from './cs-carol-stops-a-taxi'
import havingDinner from './cs-dinner'
import exploringATC from './cs-exploring-ASC-upset'
import lostPasport from './cs-lost-her-pasport'
import solemWalk from './cs-solemn-walk-in-the-rain'
import teletubbies from './cs-teletubbies'
import hotAndCold from './cs-hot-and-cold-minigame'
import algorithmExplanation from './cs-algorithm-explanation'
import sightseeingTheCity from './cs-sightseeing-the-city'
import rideTaxi from './cs-ride-taxi'
import walkToDestination from './cs-walk-to-destination'
import taxiToDestination from './cs-taxi-to-destination'
import pickupFromCascade from './cs-pickup-from-cascade'
import normanLearnsToWorkWithLargeDataSetsOnComputer from './cs-norman-learns-to-work-with-large-data-sets-on-computer'
import lookingAtClouds from './cs-looking-at-clouds-from-a-plane-window'
import liaTestRun from './cs-lia-test-run'
import hiddentreasurescarolvisitsaninterestingstore from './cs-hidden-treasures-carol-visits-an-interesting-store'

const carolArrivesAtASC = make.module({
    id: 'carol-arrives-at-ASC',
    submodules: [
        onThePlane,
        lookingAtClouds,
        missingBag,
        toughestNutInTown,
        aWomanStopsHerCar,
        CarolArrivesAtCascade,
        atTheWarmHouse,
        carolGoesToBed,
        stopsTaxi,
        havingDinner,
        exploringATC,
        lostPasport,
        solemWalk,
        teletubbies,
        hotAndCold,
        algorithmExplanation,
        sightseeingTheCity,
        rideTaxi,
        walkToDestination,
        taxiToDestination,
        pickupFromCascade,
        normanLearnsToWorkWithLargeDataSetsOnComputer,
        liaTestRun,
    ],
    convoSegments: [],
})

export default carolArrivesAtASC
