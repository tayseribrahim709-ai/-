const LANG = {
  ar: {
    dir:'rtl',
    appTitle:'\ud83d\udcda \u0627\u0633\u062a\u0627\u0630 \u064a\u0627\u0633\u0631',
    navDash:'\ud83d\udcca', navVocab:'\ud83d\udcd6', navGram:'\ud83d\udcdc', navPlace:'\ud83d\udd0d', navSettings:'\u2699\ufe0f', navSync:'\u2601\ufe0f',
    curName:'Cambridge',
    titleCert:'\ud83c\udf93 \u0634\u0647\u0627\u062f\u0629', certText:'\u062a\u0634\u0647\u062f \u0627\u0644\u0634\u0647\u0627\u062f\u0629 \u0628\u0625\u062a\u0645\u0627\u0645', getCert:'\ud83c\udf93 \u0627\u0644\u0634\u0647\u0627\u062f\u0629', printCert:'\ud83d\udda8\ufe0f \u0637\u0628\u0627\u0639\u0629', printLesson:'\ud83d\udda8\ufe0f', home:'\ud83c\udfe0',
    favOn:'\u2b50', favOff:'\u2606',
    objectives:'\ud83c\udfaf \u0627\u0644\u0623\u0647\u062f\u0627\u0641', explanation:'\ud83d\udcdd \u0627\u0644\u0634\u0631\u062d', examples:'\ud83d\udca1 \u0623\u0645\u062b\u0644\u0629', vocabulary:'\ud83d\udcd6 \u0627\u0644\u0645\u0641\u0631\u062f\u0627\u062a',
    word:'Word', translation:'\u0627\u0644\u062a\u0631\u062c\u0645\u0629',
    vocabExer:'\u270d\ufe0f \u0645\u0641\u0631\u062f\u0627\u062a', gramExer:'\u270d\ufe0f \u0642\u0648\u0627\u0639\u062f', writeTask:'\u270f\ufe0f \u0643\u062a\u0627\u0628\u0629', writeHere:'\u270d\ufe0f \u0627\u0643\u062a\u0628...',
    checkBtn:'\ud83d\udd0d \u062a\u062d\u0642\u0642', showAns:'\ud83d\udd0d \u0639\u0631\u0636', hideAns:'\ud83d\udd12 \u0625\u062e\u0641\u0627\u0621',
    dialogue:'\ud83c\udfad \u062d\u0648\u0627\u0631', quiz:'\u2753 \u0627\u062e\u062a\u0628\u0627\u0631', videoLesson:'\ud83c\udfac \u0641\u064a\u062f\u064a\u0648', watchVideo:'\u25b6 \u0645\u0634\u0627\u0647\u062f\u0629',
    channel:'\u0627\u0644\u0642\u0646\u0627\u0629', correct:'\u2705 \u0635\u062d\u064a\u062d!', wrong:'\u274c \u062e\u0637\u0623',
    tryAgain:'\u274c \u062d\u0627\u0648\u0644', answerFirst:'\u270d\ufe0f \u0627\u0643\u062a\u0628 \u0623\u0648\u0644\u0627\u064b', answered:'\u2705 \u0627\u0644\u0645\u0641\u062a\u0627\u062d:',
    closeToCorrect:'\u2705 \u0623\u062d\u0633\u0646\u062a!', dashTitle:'\ud83d\udcca \u0627\u0644\u062a\u0642\u062f\u0645',
    levels:'\u0645\u0633\u062a\u0648\u064a\u0627\u062a', modules:'\u0648\u062d\u062f\u0627\u062a', lessons:'\u062f\u0631\u0648\u0633', words:'\u0643\u0644\u0645\u0629', questions:'\u0633\u0624\u0627\u0644',
    passedLevels:'\u0646\u0627\u062c\u062d\u0629', total:'\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a', favShort:'\u0645\u0641\u0636\u0644\u0629',
    export:'\ud83d\udce4 \u062a\u0635\u062f\u064a\u0631', reset:'\ud83d\uddd1\ufe0f \u062d\u0630\u0641', resetConfirm:'\u0645\u062a\u0623\u0643\u062f\u061f', resetDone:'\u062a\u0645', unlocked:'\u0645\u0642\u0641\u0644',
    vocabTitle:'\ud83d\udcd6 \u0627\u0644\u0645\u0641\u0631\u062f\u0627\u062a', search:'\ud83d\udd0d \u0627\u0628\u062d\u062b...',
    flashcards:'\ud83c\udccf \u0628\u0637\u0627\u0642\u0627\u062a', vocabFlash:'\ud83c\udccf \u0628\u0637\u0627\u0642\u0627\u062a', noVocab:'\u0644\u0627 \u062a\u0648\u062c\u062f', flashDone:'\ud83c\udf89 \u062a\u0645!',
    known:'\u0645\u0639\u0631\u0648\u0641', unknown:'\u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629', didnKnow:'\u274c \u0644\u0627', iKnow:'\u2705 \u0646\u0639\u0645',
    gramTitle:'\ud83d\udcdc \u0627\u0644\u0642\u0648\u0627\u0639\u062f', gramTopics:'\u0645\u0648\u0636\u0648\u0639', searchGram:'\ud83d\udd0d \u0627\u0628\u062d\u062b...', noGrammar:'\u0644\u0627 \u062a\u0648\u062c\u062f',
    placeTitle:'\ud83d\udcdd \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0645\u0633\u062a\u0648\u0649', placeInfo:'\u0633\u0624\u0627\u0644', placeSubmit:'\ud83d\udcca \u0627\u0644\u0646\u062a\u064a\u062c\u0629',
    viewResult:'\ud83d\udcca \u0627\u0644\u0646\u062a\u064a\u062c\u0629', placeResult:'\u062a\u0645!', placeNeedReview:'\u0645\u0631\u0627\u062c\u0639\u0629',
    placeSuggest:'\u0627\u0644\u0645\u0633\u062a\u0648\u0649:', placeStart:'\u0627\u0628\u062f\u0623 \u0645\u0646', noTest:'\u0644\u0627 \u064a\u0648\u062c\u062f',
    testInfo:'\u0646\u0633\u0628\u0629 \u0627\u0644\u0646\u062c\u0627\u062d:', testQuestions:'\u0623\u0633\u0626\u0644\u0629:', retake:'\ud83d\udd04 \u0625\u0639\u0627\u062f\u0629',
    passMsg:'\ud83c\udf89 \u0646\u062c\u062d\u062a!', failMsg:'\ud83d\ude1e \u0644\u0644\u0623\u0633\u0641', passPercent:'\u0627\u0644\u0646\u062c\u0627\u062d:',
    reviewErrors:'\ud83d\udccb \u0627\u0644\u0623\u062e\u0637\u0627\u0621', yourAns:'\u274c \u0625\u062c\u0627\u0628\u062a\u0643:', correctAns:'\u2705 \u0627\u0644\u0635\u062d\u064a\u062d:',
    resumeMsg:'\ud83d\udd01 \u0648\u0627\u0635\u0644 \u2014', resumeBtn:'\u0627\u0633\u062a\u0645\u0631\u0627\u0631',
    streakTitle:'\ud83d\udd25 \u0627\u0644\u0633\u0644\u0633\u0644\u0629', streakDays:'\u064a\u0648\u0645', streakToday:'\u062a\u0645! \ud83c\udf89', streakMiss:'\u0627\u062f\u0631\u0633 \u0627\u0644\u064a\u0648\u0645!',
    notesTitle:'\ud83d\udcdd \u0645\u0644\u0627\u062d\u0638\u0627\u062a', notesPlace:'\u0627\u0643\u062a\u0628...', notesSaved:'\ud83d\udcbe \u062d\u0641\u0638',
    achieveTitle:'\ud83c\udfc6 \u0627\u0644\u0625\u0646\u062c\u0627\u0632\u0627\u062a', achieveNone:'\u0644\u0627 \u062a\u0648\u062c\u062f',
    studyPlan:'\ud83d\udcc5 \u0627\u0644\u0645\u062e\u0637\u0637', studyToday:'\u062f\u0631\u0633 \u0627\u0644\u064a\u0648\u0645:', studyNext:'\u0627\u0644\u062a\u0627\u0644\u064a:', studyDone:'\u2705 \u062a\u0645',
    langToggle:'\ud83c\udf10 English',
    markDone:'\u2705 \u062a\u0645 \u0627\u0644\u0625\u0646\u062c\u0627\u0632',lessonDone:'\u2705 \u062a\u0645!',
    weekDays:['\u0627\u0644\u0623\u062d\u062f','\u0627\u0644\u0625\u062b\u0646\u064a\u0646','\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621','\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621','\u0627\u0644\u062e\u0645\u064a\u0633','\u0627\u0644\u062c\u0645\u0639\u0629','\u0627\u0644\u0633\u0628\u062a'],
    allOpen:'\ud83d\udcc2 \u0641\u062a\u062d', allClose:'\ud83d\udd12 \u063a\u0644\u0642', levelTest:'\ud83d\udcdd \u0627\u062e\u062a\u0628\u0627\u0631',
    share:'\ud83d\udce4 \u0645\u0634\u0627\u0631\u0643\u0629', shared:'\u2705 \u062a\u0645 \u0627\u0644\u0646\u0633\u062e!', vocabQuiz:'\ud83c\udfaf \u0627\u062e\u062a\u0628\u0627\u0631 \u0643\u0644\u0645\u0627\u062a',
    vqTitle:'\ud83c\udfaf \u0627\u062e\u062a\u0628\u0627\u0631', vqCorrect:'\u2705 \u0635\u062d\u064a\u062d', vqWrong:'\u274c \u062e\u0637\u0623', vqDone:'\ud83c\udfaf \u0627\u0646\u062a\u0647\u0649!',
    aboutTitle:'\u2139\ufe0f \u0639\u0646 \u0627\u0644\u0627\u0633\u062a\u0627\u0630', aboutContact:'\u2014\u2014\u2014',
    aboutDesc:'\u062a\u0637\u0628\u064a\u0642 \u0634\u0627\u0645\u0644 \u0644\u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a\u0629 - \u0643\u0627\u0645\u0628\u0631\u062f\u062c 6 \u0645\u0633\u062a\u0648\u064a\u0627\u062a + \u0627\u0644\u0633\u0648\u062f\u0627\u0646 3 \u0645\u0633\u062a\u0648\u064a\u0627\u062a\u060c 216 \u062f\u0631\u0633\u060c \u0623\u062f\u0648\u0627\u062a \u062a\u0641\u0627\u0639\u0644\u064a\u0629\u060c \u0634\u0647\u0627\u062f\u0627\u062a\u060c \u064a\u0639\u0645\u0644 \u0628\u062f\u0648\u0646 \u0627\u0646\u062a\u0631\u0646\u062a.',
    aboutMore:'15 \u0633\u0646\u0629 \u0641\u064a \u0627\u0644\u062a\u062f\u0631\u064a\u0633 \u0648\u0627\u0644\u0645\u0639\u0627\u0647\u062f',
    accentColor:'\u0627\u0644\u0623\u0633\u0627\u0633\u064a', back:'\ud83d\udd19 \u0639\u0648\u062f\u0629', customColors:'\ud83c\udfa8 \u0623\u0644\u0648\u0627\u0646 \u0645\u062e\u0635\u0635\u0629',
    experience:'\ud83d\udcbc \u0627\u0644\u062e\u0628\u0631\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629',
    expList:['\u0645\u062f\u0631\u0633 \u0644\u063a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u062f\u0627\u0631\u0633 \u0648\u0627\u0644\u0645\u0639\u0627\u0647\u062f 15 \u0633\u0646\u0629','\u062a\u062f\u0631\u064a\u0633 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 / \u0627\u0644\u0639\u0631\u0628\u064a\u0629','\u0645\u062f\u0631\u0628 \u0645\u0648\u0633\u064a\u0642\u0649 \u2014 \u062a\u0639\u0644\u064a\u0645 \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0646\u0648\u062a\u0627\u062a \u0648\u0623\u0633\u0633 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649','\u0645\u0644\u062d\u0646 \u0648\u0645\u0648\u0632\u0639 \u0645\u0648\u0633\u064a\u0642\u064a \u2014 \u062a\u0623\u0644\u064a\u0641 \u0648\u062a\u0648\u0632\u064a\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u064a\u0629','\u0634\u0627\u0639\u0631 \u0648\u0643\u0627\u062a\u0628 \u0623\u062f\u0628\u064a \u2014 \u0646\u0634\u0631 \u0623\u0639\u0645\u0627\u0644 \u0634\u0639\u0631\u064a\u0629 \u0648\u0623\u062f\u0628\u064a\u0629','\u0625\u0639\u062f\u0627\u062f \u062e\u0637\u0637 \u0648\u0645\u062d\u062a\u0648\u0649 \u062a\u0639\u0644\u064a\u0645\u064a','\u062a\u062f\u0631\u064a\u0628 \u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0631\u062c\u0645\u0629','\u062f\u0648\u0631\u0627\u062a \u0642\u0635\u064a\u0631\u0629 \u0641\u064a \u0627\u0644\u0644\u063a\u0629','\u062a\u0642\u064a\u064a\u0645 \u0645\u0633\u062a\u0648\u064a\u0627\u062a \u0627\u0644\u0637\u0644\u0627\u0628'],
    fontSize:'\u062d\u062c\u0645 \u0627\u0644\u062e\u0637', headerColor:'\u0627\u0644\u0647\u064a\u062f\u0631',
    interests:'\ud83d\udca1 \u0627\u0644\u0627\u0647\u062a\u0645\u0627\u0645\u0627\u062a',
    intList:['\u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649 \u0648\u0627\u0644\u062a\u0623\u0644\u064a\u0641','\u0627\u0644\u0634\u0639\u0631 \u0648\u0627\u0644\u0623\u062f\u0628','\u062a\u0637\u0648\u064a\u0631 \u0637\u0631\u0642 \u0627\u0644\u062a\u062f\u0631\u064a\u0633','\u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0641\u064a \u0627\u0644\u062a\u0639\u0644\u064a\u0645','\u062a\u0639\u0632\u064a\u0632 \u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0631\u062c\u0645\u0629'],
    liteDesc:'\u0625\u062e\u0641\u0627\u0621 \u0627\u0644\u0641\u064a\u062f\u064a\u0648', liteMode:'\u0648\u0636\u0639 \u062e\u0641\u064a\u0641',
    qualifications:'\ud83c\udf93 \u0627\u0644\u0645\u0624\u0647\u0644\u0627\u062a \u0627\u0644\u0639\u0644\u0645\u064a\u0629',
    qualList:['\u062f\u0628\u0644\u0648\u0645 \u062a\u0631\u062c\u0645\u0629 \u0644\u063a\u0629 \u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u2013 \u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u062e\u0631\u0637\u0648\u0645','\u062f\u0648\u0631\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629 \u0641\u064a \u0627\u0644\u062a\u062f\u0631\u064a\u0633 \u0648\u0627\u0644\u0645\u0646\u0627\u0647\u062c \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u062d\u062f\u064a\u062b\u0629'],
    reminder:'\ud83d\udd14 \u062a\u0630\u0643\u064a\u0631', reminderOff:'\u0625\u064a\u0642\u0627\u0641', reminderOn:'\u062a\u0634\u063a\u064a\u0644', reminderTime:'\u0627\u0644\u0648\u0642\u062a',
    resetColors:'\u0625\u0639\u0627\u062f\u0629', settingsTitle:'\u2699\ufe0f \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a',
    skillList:['\u062a\u062f\u0631\u064a\u0633 \u0644\u063a\u0627\u062a \u0628\u0623\u0633\u0644\u0648\u0628 \u0625\u0628\u062f\u0627\u0639\u064a \u0645\u0628\u0633\u0637','\u062a\u062f\u0631\u064a\u0633 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649 \u0648\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0646\u0648\u062a\u0627\u062a','\u0634\u0639\u0631 \u0648\u0643\u062a\u0627\u0628\u0629 \u0623\u062f\u0628\u064a\u0629','\u062a\u0644\u062d\u064a\u0646 \u0648\u062a\u0648\u0632\u064a\u0639 \u0645\u0648\u0633\u064a\u0642\u064a','\u062a\u0635\u0645\u064a\u0645 \u062e\u0637\u0637 \u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u0641\u0639\u0627\u0644\u0629','\u062a\u0631\u062c\u0645\u0629 \u0646\u0635\u0648\u0635 \u0645\u062a\u0646\u0648\u0639\u0629','\u062a\u0642\u064a\u064a\u0645 \u0645\u0633\u062a\u0648\u064a\u0627\u062a \u0627\u0644\u0637\u0644\u0627\u0628 \u0648\u0645\u062a\u0627\u0628\u0639\u062a\u0647\u0645','\u0623\u062f\u0648\u0627\u062a \u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u062d\u062f\u064a\u062b\u0629'],
    skills:'\ud83d\udd27 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a', studyDays:'\u0623\u064a\u0627\u0645 \u0627\u0644\u062f\u0631\u0627\u0633\u0629',
    summary:'\ud83d\udccb \u0627\u0644\u0645\u0644\u062e\u0635 \u0627\u0644\u0645\u0647\u0646\u064a',
    summaryText:'\u0623\u0633\u062a\u0627\u0630 \u0645\u062a\u062e\u0635\u0635 \u0641\u064a \u0627\u0644\u0644\u063a\u0627\u062a \u0648\u0627\u0644\u062a\u0631\u062c\u0645\u0629 \u0648\u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649 \u2014 \u0634\u0627\u0639\u0631\u060c \u0645\u0644\u062d\u0646\u060c \u0645\u0648\u0632\u0639 \u0645\u0648\u0633\u064a\u0642\u064a\u060c \u0648\u0641\u0646\u0627\u0646. \u064a\u0645\u062a\u0644\u0643 \u062e\u0628\u0631\u0629 15+ \u0633\u0646\u0629 \u0641\u064a \u062a\u062f\u0631\u064a\u0633 \u0627\u0644\u0644\u063a\u0627\u062a \u0648\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649\u060c \u064a\u0645\u062a\u0627\u0632 \u0628\u0623\u0633\u0644\u0648\u0628 \u0625\u0628\u062f\u0627\u0639\u064a \u0648\u062a\u0641\u0627\u0639\u0644\u064a \u064a\u0645\u0632\u062c \u0628\u064a\u0646 \u0627\u0644\u0644\u063a\u0629 \u0648\u0627\u0644\u0641\u0646 \u0644\u062a\u0646\u0645\u064a\u0629 \u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0637\u0644\u0627\u0628 \u0648\u0625\u062b\u0631\u0627\u0621 \u0642\u062f\u0631\u0627\u062a\u0647\u0645 \u0627\u0644\u0625\u0628\u062f\u0627\u0639\u064a\u0629.',
    syncDownload:'\u2601\ufe0f \u062a\u062d\u0645\u064a\u0644 \u0645\u0646 \u0627\u0644\u062e\u0627\u062f\u0645', syncEmail:'\u0627\u0644\u0628\u0631\u064a\u062f', syncLoggedIn:'\u0645\u0631\u062d\u0628\u0627\u064b',
    syncLogin:'\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644', syncLogout:'\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c', syncPass:'\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631',
    syncSave:'\ud83d\udcbe \u062d\u0641\u0638 \u0645\u062d\u0644\u064a\u0627\u064b', syncSignup:'\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628', syncTitle:'\u2601\ufe0f \u0645\u0632\u0627\u0645\u0646\u0629', syncUpload:'\u2601\ufe0f \u0631\u0641\u0639 \u0644\u0644\u062e\u0627\u062f\u0645',
    continueBtn:'\ud83d\udd01 \u0648\u0627\u0635\u0644 \u0627\u0644\u062a\u0639\u0644\u0645', dailyLesson:'\ud83d\udcc5 \u062f\u0631\u0633 \u0627\u0644\u064a\u0648\u0645', reviewBtn:'\ud83d\udd04 \u0645\u0631\u0627\u062c\u0639\u0629 \u0630\u0643\u064a\u0629', startHere:'\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627',
    pdfBtn:'\ud83d\udcc4 PDF', pdfTitle:'\u062a\u0635\u062f\u064a\u0631 PDF', speakPractice:'\ud83c\udfa4 \u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0646\u0637\u0642', speakNow:'\ud83c\udfa4 \u062a\u062d\u062f\u062b \u0627\u0644\u0622\u0646', speakResult:'\u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u0646\u0637\u0642:',
    confettiMsg:'\ud83c\udf89 \u062a\u0647\u0627\u0646\u064a\u0646\u0627!'
  },
  en: {
    dir:'ltr', appTitle:'\ud83d\udcda Mr. Yasser',
    navDash:'\ud83d\udcca', navVocab:'\ud83d\udcd6', navGram:'\ud83d\udcdc', navPlace:'\ud83d\udd0d', navSettings:'\u2699\ufe0f', navSync:'\u2601\ufe0f',
    curName:'Cambridge',
    titleCert:'\ud83c\udf93 Certificate', certText:'Certifies completion of', getCert:'\ud83c\udf93 Certificate', printCert:'\ud83d\udda8\ufe0f Print', printLesson:'\ud83d\udda8\ufe0f', home:'\ud83c\udfe0',
    favOn:'\u2b50', favOff:'\u2606',
    objectives:'\ud83c\udfaf Objectives', explanation:'\ud83d\udcdd Explanation', examples:'\ud83d\udca1 Examples', vocabulary:'\ud83d\udcd6 Vocabulary',
    word:'Word', translation:'Translation',
    vocabExer:'\u270d\ufe0f Vocabulary', gramExer:'\u270d\ufe0f Grammar', writeTask:'\u270f\ufe0f Writing', writeHere:'\u270d\ufe0f Write...',
    checkBtn:'\ud83d\udd0d Check', showAns:'\ud83d\udd0d Show', hideAns:'\ud83d\udd12 Hide',
    dialogue:'\ud83c\udfad Dialogue', quiz:'\u2753 Quiz', videoLesson:'\ud83c\udfac Video', watchVideo:'\u25b6 Watch',
    channel:'Channel', correct:'\u2705 Correct!', wrong:'\u274c Wrong',
    tryAgain:'\u274c Try again', answerFirst:'\u270d\ufe0f Write first', answered:'\u2705 Key:',
    closeToCorrect:'\u2705 Great!', dashTitle:'\ud83d\udcca Dashboard',
    levels:'Levels', modules:'Modules', lessons:'Lessons', words:'Words', questions:'Questions',
    passedLevels:'Passed', total:'Total', favShort:'Favs',
    export:'\ud83d\udce4 Export', reset:'\ud83d\uddd1\ufe0f Reset', resetConfirm:'Sure?', resetDone:'Done', unlocked:'Locked',
    vocabTitle:'\ud83d\udcd6 Vocabulary', search:'\ud83d\udd0d Search...',
    flashcards:'\ud83c\udccf Cards', vocabFlash:'\ud83c\udccf Cards', noVocab:'None', flashDone:'\ud83c\udf89 Done!',
    known:'Known', unknown:'Review', didnKnow:"\u274c Don't know", iKnow:'\u2705 Know',
    gramTitle:'\ud83d\udcdc Grammar', gramTopics:'Topics', searchGram:'\ud83d\udd0d Search...', noGrammar:'None',
    placeTitle:'\ud83d\udcdd Placement Test', placeInfo:'questions', placeSubmit:'\ud83d\udcca Result',
    viewResult:'\ud83d\udcca Result', placeResult:'Done!', placeNeedReview:'Review',
    placeSuggest:'Level:', placeStart:'Start from', noTest:'None',
    testInfo:'Pass rate:', testQuestions:'Questions:', retake:'\ud83d\udd04 Retake',
    passMsg:'\ud83c\udf89 Passed!', failMsg:'\ud83d\ude1e Failed', passPercent:'Pass:',
    reviewErrors:'\ud83d\udccb Errors', yourAns:'\u274c Your answer:', correctAns:'\u2705 Correct:',
    resumeMsg:'\ud83d\udd01 Resume \u2014', resumeBtn:'Continue',
    streakTitle:'\ud83d\udd25 Streak', streakDays:'days', streakToday:'Done! \ud83c\udf89', streakMiss:'Study today!',
    notesTitle:'\ud83d\udcdd Notes', notesPlace:'Write...', notesSaved:'\ud83d\udcbe Save',
    achieveTitle:'\ud83c\udfc6 Achievements', achieveNone:'None',
    studyPlan:'\ud83d\udcc5 Plan', studyToday:'Today:', studyNext:'Next:', studyDone:'\u2705',
    langToggle:'\ud83c\udf10 \u0627\u0644\u0639\u0631\u0628\u064a\u0629',
    weekDays:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    allOpen:'\ud83d\udcc2 Open', allClose:'\ud83d\udd12 Close', levelTest:'\ud83d\udcdd Test',
    share:'\ud83d\udce4 Share', shared:'\u2705 Copied!', vocabQuiz:'\ud83c\udfaf Vocab Quiz',
    vqTitle:'\ud83c\udfaf Quiz', vqCorrect:'\u2705 Correct', vqWrong:'\u274c Wrong', vqDone:'\ud83c\udfaf Done!',
    aboutTitle:'\u2139\ufe0f About', aboutContact:'\u2014\u2014\u2014',
    aboutDesc:'Comprehensive English learning app - Cambridge 6 levels + Sudan 3 levels, 216 lessons, interactive tools, certificates, works offline.',
    aboutMore:'15 years teaching experience',
    accentColor:'Accent', back:'\ud83d\udd19 Back', customColors:'\ud83c\udfa8 Custom Colors',
    experience:'\ud83d\udcbc Experience',
    expList:['Language teacher in schools/institutes for 15 years','Teaching English / Arabic','Music instructor \u2014 teaching sheet music and music fundamentals','Composer and music arranger \u2014 composing and arranging musical works','Poet and literary writer \u2014 published poetry and literary works','Preparing study plans and content','Training translation skills','Short language courses','Assessing student levels'],
    fontSize:'Font Size', headerColor:'Header',
    interests:'\ud83d\udca1 Interests',
    intList:['Music composition and performance','Poetry and literature','Developing teaching methods','Technology in education','Enhancing translation skills'],
    liteDesc:'Hide video', liteMode:'Lite Mode',
    qualifications:'\ud83c\udf93 Qualifications',
    qualList:['Diploma in English Translation \u2013 University of Khartoum','Advanced courses in teaching, curriculum, and ed-tech'],
    reminder:'\ud83d\udd14 Reminder', reminderOff:'Off', reminderOn:'On', reminderTime:'Time',
    resetColors:'Reset', settingsTitle:'\u2699\ufe0f Settings',
    skillList:['Creative language teaching made simple','Music teaching and sheet music reading','Poetry and literary writing','Music composition and arrangement','Designing effective educational plans','Translating diverse texts','Student assessment and progress tracking','Modern educational tools'],
    skills:'\ud83d\udd27 Skills', studyDays:'Study Days',
    summary:'\ud83d\udccb Professional Summary',
    summaryText:'Language, translation, and music educator \u2014 Poet, Composer, Music Arranger, and Artist. With 15+ years of experience teaching languages and training in music, known for a creative, interactive style that blends language with art to develop students\u2019 skills and enrich their creative abilities.',
    syncDownload:'\u2601\ufe0f Download from server', syncEmail:'Email', syncLoggedIn:'Welcome',
    syncLogin:'Login', syncLogout:'Logout', syncPass:'Password',
    syncSave:'\ud83d\udcbe Save locally', syncSignup:'Sign Up', syncTitle:'\u2601\ufe0f Sync', syncUpload:'\u2601\ufe0f Upload to server',
    continueBtn:'\ud83d\udd01 Continue', dailyLesson:'\ud83d\udcc5 Today\\u0027s Lesson', reviewBtn:'\ud83d\udd04 SRS Review', startHere:'Start Here',
    pdfBtn:'\ud83d\udcc4 PDF', pdfTitle:'Export PDF', speakPractice:'\ud83c\udfa4 Speaking Practice', speakNow:'\ud83c\udfa4 Speak now', speakResult:'Pronunciation:',
    confettiMsg:'\ud83c\udf89 Congratulations!'
  }
};

// ─── STATE ───
let currentLang = 'ar';
let activeCurriculum = 0;
let appData = null, levelTests = null, placementTest = null;
let courseData = {}, flatLessons = [];
let exerciseAnswers = {};
let flashData = [], flashIdx = 0, flashKnown = 0, flashUnknown = 0;
let syncUser = null;
const DATA_FILES = ['app_data.json','level_tests.json','placement_test.json'];

// ─── UTILITIES ───
function t(k){return(LANG[currentLang]||LANG.ar)[k]||k;}
function ls(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lss(k,v){try{localStorage.setItem(k,v)}catch(e){}}

// ─── LESSON PROGRESS ───
function getCompletedLessons(){try{return JSON.parse(ls('eng_completed')||'[]')}catch(e){return[]}}
function saveCompletedLessons(a){lss('eng_completed',JSON.stringify(a))}
function isLessonComplete(lid){return getCompletedLessons().indexOf(lid)!==-1}
function toggleLessonComplete(lid,el){var a=getCompletedLessons();var i=a.indexOf(lid);if(i===-1){a.push(lid)}else{a.splice(i,1)}saveCompletedLessons(a);if(el)el.textContent=i===-1?'✅':'⬜';updateStreak();}

function toggleLang(){currentLang=currentLang==='ar'?'en':'ar';document.documentElement.dir=LANG[currentLang].dir;document.getElementById('langToggle').textContent=LANG[currentLang].langToggle;renderCurriculumSelector();document.querySelector('h1').textContent=t('appTitle');hideAllViews();showWelcome();}

function toggleDark(){document.body.classList.toggle('dark-mode');const b=document.getElementById('darkToggle');b.textContent=document.body.classList.contains('dark-mode')?'☀️':'🌙';lss('eng_dark',document.body.classList.contains('dark-mode')?'1':'0');}

function toast(m){let e=document.getElementById('toast');if(!e){e=document.createElement('div');e.id='toast';e.style.cssText='position:fixed;bottom:30px;left:50%;transform:translateX(-50%);padding:12px 24px;border-radius:8px;background:var(--accent,#27ae60);color:#fff;z-index:9999;font-size:14px;transition:all .3s;max-width:90%;text-align:center';document.body.appendChild(e)}e.textContent=m;e.style.display='block';setTimeout(()=>{e.style.display='none'},3000)}

function hideAllViews(){['welcome','lessonView','aboutView','cvView','settingsView','dashboardView','vocabBankView','grammarRefView','placementView','syncView','flashcardsView','levelTestView','notesView','achieveView','musicWelcomeView','developerView','vocabQuizView','planView','adminView'].forEach(id=>{const e=document.getElementById(id);if(e)e.style.display='none'});}

function showWelcome(){hideAllViews();const w=document.getElementById('welcome');if(w)w.style.display='block';clearResumeBanner();}

function clearResumeBanner(){const b=document.getElementById('resumeBanner');if(b)b.innerHTML='';}

function checkReady(){const spinner=document.getElementById('loadingSpinner');const wc=document.getElementById('welcomeContent');if(spinner)spinner.style.display='none';if(wc)wc.style.display='block';}

// ─── NAV SETUP ───
function navSetup(){const btns={'navDashboard':'showDashboard','navVocab':'showVocabBank','navGrammar':'showGrammarRef','navPlacement':'showPlacementTest','navSettings':'showSettings','navSync':'showSync','navCV':'showCV','navAbout':'showAbout'};Object.keys(btns).forEach(id=>{const el=document.getElementById(id);if(el)el.onclick=function(){checkReady();if(typeof window[btns[id]]==='function')window[btns[id]]()};});renderCurriculumSelector();}

// ─── DATA LOADING ───
function initApp(){navSetup();const base=location.origin;setTimeout(function(){checkReady();showWelcome()},8000);Promise.all(DATA_FILES.map(f=>fetch(base+'/'+f).then(r=>{if(!r.ok)return null;return r.json()}).catch(function(){return null}))).then(function(r){const data=r[0],test=r[1],pt=r[2];appData=data;levelTests=test;placementTest=pt;if(appData&&appData.curricula){try{switchCurriculum(0);flatLessons=[];appData.curricula.forEach(function(c,ci){if(c.levels)c.levels.forEach(function(l,li){if(l.modules)l.modules.forEach(function(m){if(m.lessons)m.lessons.forEach(function(ls){flatLessons.push({lesson_id:ls.lesson_id||ls.lesson_title,lesson_title:ls.lesson_title,curriculumIdx:ci,levelIdx:li,moduleIdx:0,moduleTitle:m.module_title})})})})})}catch(e){console&&console.error('initApp error:',e)}}checkReady();showWelcome();checkResume();}).catch(function(){checkReady();showWelcome()});}

function cefrLevel(l){return l.cefr_level||l.level||'';}
function renderCurriculumSelector(){const sel=document.getElementById('curriculumSelector');if(!sel||!appData||!appData.curricula)return;const main=appData.curricula.filter(function(c){return c.id!=='yasser_spanish'});sel.innerHTML=main.map(function(c,i){return'<button class="curric-btn'+(c.id===(appData.curricula[activeCurriculum]||{}).id?' active':'')+'" onclick="selectCurriculum('+appData.curricula.findIndex(function(x){return x.id===c.id})+')">'+(currentLang==='en'?(c.name_en||c.name):c.name)+'</button>'}).join('');}
function showMusicSection(){var idx=-1;if(appData&&appData.curricula){for(var i=0;i<appData.curricula.length;i++){if(appData.curricula[i].id==='yasser_spanish'){idx=i;break}}}if(idx===-1){toast('❌ لم يتم العثور على منهج الموسيقى');return}hideAllViews();var v=document.getElementById('musicWelcomeView');if(!v){v=document.createElement('div');v.id='musicWelcomeView';v.className='lesson-view';document.getElementById('content').appendChild(v)}var c=appData.curricula[idx];var lvl=c.levels&&c.levels[0];var desc=lvl?lvl.description:'';var html='<div class="music-welcome"><div class="music-icon">🎵🎶</div><h2>'+c.name+'</h2><p class="music-subtitle">'+c.name_en+'</p><div class="music-description"><p>'+(currentLang==='ar'?'دورة تعلم قراءة النوتة الموسيقية وفهم أساسيات الموسيقى بطريقة مبسطة مع الأستاذ ياسر ابراهيم':'Learn to read sheet music and understand music basics in a simple way with Mr. Yasser Ibrahim')+'</p><p>'+(currentLang==='ar'?'مصممة خصيصاً للمبتدئين - دروس تفاعلية وتمارين عملية':'Designed for beginners - interactive lessons and practical exercises')+'</p></div><div class="music-details"><span>🎯 '+(currentLang==='ar'?lvl.level_name||'A1':'Level '+(lvl.level_name||'A1'))+'</span></div><button class="start-music-btn" onclick="selectCurriculum('+idx+')">'+(currentLang==='ar'?'🚀 ابدأ رحلة الموسيقى':'🚀 Start Music Journey')+'</button><button class="back-btn" style="margin-top:10px" onclick="showWelcome()">'+t('back')+'</button></div>';v.innerHTML=html;v.style.display='block';}
function selectCurriculum(idx){if(idx===activeCurriculum)return;switchCurriculum(idx);hideAllViews();renderTOC(0);}
function toggleCurriculum(){const len=appData&&appData.curricula?appData.curricula.length:0;if(len<2)return;selectCurriculum((activeCurriculum+1)%len);}
function switchCurriculum(idx){activeCurriculum=idx;if(appData&&appData.curricula&&appData.curricula[idx]){courseData=appData.curricula[idx];const lvls=courseData.levels||[];const tabs=document.getElementById('curriculumTabs');if(tabs)tabs.innerHTML=lvls.map((l,i)=>'<span class="curriculum-tab'+(i===0?' active':'')+'" data-idx="'+i+'" onclick="switchLevelTab('+i+')">'+cefrLevel(l)+'</span>').join('');renderCurriculumSelector();}}

function switchLevelTab(idx){hideAllViews();const tabs=document.getElementById('curriculumTabs');if(tabs)tabs.querySelectorAll('.curriculum-tab').forEach(t=>t.classList.toggle('active',parseInt(t.dataset.idx)===idx));renderTOC(idx);}

// ─── PROGRESS ───
function getProgress(){try{const d=JSON.parse(ls('eng_progress'));return d&&typeof d==='object'?d:{}}catch(e){return{}}}
function saveProgress(p){lss('eng_progress',JSON.stringify(p));}
function isLevelUnlocked(cid,li){if(li===0)return true;var p=getLevelProgress(cid,li-1);return p&&p.passed===true;}
function getLevelProgress(cid,li){const p=getProgress();const k=cid+'_'+li;return p[k]||{passed:false,score:0,wrong:[],examPassed:false};}
function setLevelTestResult(cid,li,passed,score,wrong,exam){const p=getProgress();const k=cid+'_'+li;p[k]={passed,score,wrong:wrong||[],examPassed:exam||false,date:Date.now()};saveProgress(p);}

// ─── FAVORITES ───
function getFavorites(){try{const d=JSON.parse(ls('eng_favs'));return Array.isArray(d)?d:[]}catch(e){return[]}}
function setFavorites(f){lss('eng_favs',JSON.stringify(f));}
function isFav(id){return getFavorites().includes(id);}
function toggleFav(id){const f=getFavorites();const i=f.indexOf(id);if(i>-1)f.splice(i,1);else f.push(id);setFavorites(f);}
function toggleFavLesson(btn,id){toggleFav(id);btn.textContent=isFav(id)?t('favOn'):t('favOff');}

// ─── RESUME ───
function saveResume(lid,ln,mi){lss('eng_resume',JSON.stringify({lid,ln,mi,date:Date.now()}));}
function checkResume(){try{const r=JSON.parse(ls('eng_resume'));if(r&&r.lid&&Date.now()-r.date<86400000){const b=document.getElementById('resumeBanner');if(b)b.innerHTML='<div class="resume-banner" onclick="showLesson('+r.ln+','+r.mi+',\''+r.lid+'\')"><span>'+t('resumeMsg')+'</span><button class="resume-btn">'+t('resumeBtn')+'</button></div>';}}catch(e){}}
function saveScrollPos(lid){const el=document.getElementById('lessonView');if(el)lss('scroll_'+lid,el.scrollTop+'');}
function restoreScrollPos(lid){const pos=ls('scroll_'+lid);if(pos){const el=document.getElementById('lessonView');if(el)setTimeout(()=>el.scrollTop=parseInt(pos),300);}}

// ─── TOC ───
function renderTOC(levelIdx){hideAllViews();const idx=levelIdx||0;const lvl=courseData.levels&&courseData.levels[idx];if(!lvl){document.getElementById('content').innerHTML='<p style="padding:20px;text-align:center">'+t('noTest')+'</p>';return;}renderStats(idx);const toc=document.getElementById('toc');if(!toc)return;let html='<div class="level-header"><h2>'+lvl.level_name+'</h2><p>'+(lvl.description||'')+'</p></div>';lvl.modules&&lvl.modules.forEach((m,mi)=>{html+='<div class="module"><div class="mod-title" onclick="toggleModule(this)"><span>'+m.module_title+'</span><span class="mod-icon">▼</span></div><div class="mod-lessons">';m.lessons&&m.lessons.forEach(ls=>{const lid=ls.lesson_id||(lvl.level_name+'_'+mi+'_'+ls.lesson_title);const fav=isFav(lid)?'⭐':'☆';const done=isLessonComplete(lid)?'✅':'⬜';html+='<div class="lesson-item" onclick="showLesson('+idx+','+mi+',\''+lid+'\')"><span class="done-icon" onclick="event.stopPropagation();toggleLessonComplete(\''+lid+'\',this)">'+done+'</span><span class="fav-icon" onclick="event.stopPropagation();toggleFavLesson(this,\''+lid+'\')">'+fav+'</span><span>'+ls.lesson_title+'</span></div>';});html+='</div></div>';});toc.innerHTML=html;const statsEl=document.getElementById('stats');if(statsEl)statsEl.style.display='block';}

function renderStats(idx){const lvl=courseData.levels&&courseData.levels[idx];if(!lvl)return;let total=0,done=0;lvl.modules&&lvl.modules.forEach((m,mi)=>{if(m.lessons){m.lessons.forEach(ls=>{total++;var lid=ls.lesson_id||(lvl.level_name+'_'+mi+'_'+ls.lesson_title);if(isLessonComplete(lid))done++})}});const p=getLevelProgress(activeCurriculum,idx);const el=document.getElementById('stats');if(el)el.innerHTML='<div class="stats-bar"><span>📚 '+t('lessons')+': '+done+'/'+total+'</span><span>'+t('passedLevels')+': '+(p.passed?t('passMsg'):t('failMsg'))+'</span></div>';}

function toggleModule(el){const parent=el.parentElement;const lessons=parent.querySelector('.mod-lessons');if(lessons)lessons.classList.toggle('open');const icon=el.querySelector('.mod-icon');if(icon)icon.textContent=lessons&&lessons.classList.contains('open')?'▲':'▼';}

function toggleAll(){const all=document.querySelectorAll('.mod-lessons');const allOpen=Array.from(all).every(m=>m.classList.contains('open'));all.forEach(m=>{if(allOpen)m.classList.remove('open');else m.classList.add('open')});document.querySelectorAll('.mod-icon').forEach(ic=>ic.textContent=allOpen?'▼':'▲');const btn=document.getElementById('toggleAllBtn');if(btn)btn.textContent=allOpen?t('allOpen'):t('allClose');}

function filterLessons(q){const items=document.querySelectorAll('.lesson-item');items.forEach(item=>{const text=item.textContent.toLowerCase();item.style.display=!q||text.includes(q.toLowerCase())?'flex':'none';});}

// ─── LESSON ───
function findFullLesson(ln,mi,lid){const lvl=courseData.levels&&courseData.levels[ln];if(!lvl)return null;const mod=lvl.modules&&lvl.modules[mi];if(!mod)return null;return mod.lessons&&mod.lessons.find(ls=>ls.lesson_id===lid||ls.lesson_title===lid);}

function showLesson(ln,mi,lid){hideAllViews();const found=findFullLesson(ln,mi,lid);if(!found){toast(t('noTest'));return;}lastLessonLn=ln;lastLessonMi=mi;saveResume(lid,ln,mi);const lv=document.getElementById('lessonView');if(!lv)return;lv.style.display='block';renderLesson(found,lid);updateStreak();}

function getExplanationAr(ls){
  var ar=ls.explanation_ar;
  if(ar)return ar;
  var title=ls.lesson_title||'';
  if(/Hello|Introducing|Family|Numbers 1-20/.test(title)) return 'يتعلم الطالب في هذا الدرس المفردات والتراكيب الأساسية للتحدث عن "'+title+'" بالإنجليزية. يشمل تمارين النطق والقراءة والكتابة.';
  if(/Classroom|Teachers|Subject|Objects/.test(title)) return 'يركز هذا الدرس على المفردات المتعلقة بـ"'+title+'" في سياق المدرسة مع أمثلة وتمارين تفاعلية.';
  if(/Rooms|Members|Routines|Colors/.test(title)) return 'يشرح هذا الدرس كيفية التحدث عن "'+title+'" بالإنجليزية مع مفردات جديدة وتطبيقات عملية.';
  if(/Meals|Fruits|Drinks|Market/.test(title)) return 'يتناول هذا الدرس "'+title+'" مع مفردات وعبارات يومية وتمارين للتحدث والاستماع.';
  if(/Animals|Pets|Nile|Weather/.test(title)) return 'يقدم هذا الدرس مفردات عن "'+title+'" بالإنجليزية ويساعد على وصف الظواهر والكائنات.';
  if(/Neighborhood|Helping|Shopping|Festivals/.test(title)) return 'يتعلم الطالب التعبير عن "'+title+'" بالإنجليزية من خلال حوارات وتمارين تفاعلية.';
  if(/Daily Life|Travel|Transport|Health|Body|Nature|Culture|Stories/.test(title)) return 'يغطي هذا الدرس "'+title+'" مع تطوير مهارات القراءة والكتابة والمحادثة.';
  if(/Education|Sudan|Work|Careers|Media|Technology|Environment|Society|Values/.test(title)) return 'يتناول هذا الدرس "'+title+'" بمستوى متقدم مع مفردات أكاديمية وتمارين شاملة.';
  if(/Sheet Music|Note|Rhythm|Musical|Time Sign/.test(title)) return 'درس موسيقي بعنوان "'+title+'" يشرح المفاهيم الموسيقية الأساسية بطريقة مبسطة.';
  return 'درس "'+title+'" باللغة الإنجليزية. يغطي المفردات والقواعد والمهارات اللغوية من خلال أمثلة وتطبيقات عملية.';
}
// All string concatenation uses proper escaping: ' for strings with ", " for strings with '
function renderLesson(ls,lid){
  var lv=document.getElementById('lessonView');
  if(!lv)return;
  var fav=isFav(lid)?t('favOn'):t('favOff');
  var html='';

  // Header
  html+='<div class="lesson-view"><div class="lesson-header">'+
    '<button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>'+
    '<h2>'+ls.lesson_title+'</h2>'+
    '<span class="fav-btn" onclick="toggleFavLesson(this,\''+lid+'\')">'+fav+'</span></div>';

  // Objectives
  if(ls.objectives&&ls.objectives.length){
    html+='<div class="section"><h3>'+t('objectives')+'</h3><ul>';
    for(var oi=0;oi<ls.objectives.length;oi++){
      html+='<li>'+ls.objectives[oi]+'</li>';
    }
    html+='</ul></div>';
  }

  // Explanation (bilingual)
  if(ls.explanation){
    html+='<div class="section bilingual"><h3>'+t('explanation')+'</h3>';
    html+='<div class="ar-content"><p>'+getExplanationAr(ls)+'</p></div>';
    html+='<div class="en-content"><p>'+ls.explanation+'</p></div>';
    html+='</div>';
  }

  // Video
  if(ls.video_url){
    html+='<div class="section"><h3>'+t('videoLesson')+'</h3>'+
      '<a href="'+ls.video_url+'" target="_blank" rel="noopener" style="display:inline-block;padding:10px 20px;background:var(--danger,#e74c3c);color:#fff;border-radius:8px;text-decoration:none">'+
      t('watchVideo')+'</a></div>';
  }

  // Examples
  if(ls.examples&&ls.examples.length){
    html+='<div class="section"><h3>'+t('examples')+'</h3>';
    for(var ei=0;ei<ls.examples.length;ei++){
      var ex=ls.examples[ei];
      var sentence=typeof ex==='string'?ex:ex.sentence||ex.example||ex;
      html+='<div class="example"><p>'+sentence+'</p></div>';
    }
    html+='</div>';
  }

  // Vocabulary
  if(ls.vocabulary&&ls.vocabulary.length){
    html+='<div class="section"><h3>'+t('vocabulary')+'</h3>';
    html+='<table class="vocab-table"><tr><th>'+t('word')+'</th><th>'+t('translation')+'</th></tr>';
    for(var vi=0;vi<ls.vocabulary.length;vi++){
      var v=ls.vocabulary[vi];
      var word=typeof v==='string'?v:v.word||v;
      var trans=typeof v==='string'?'':v.translation||v.meaning||'';
      html+='<tr><td>'+word+'</td><td>'+trans+'</td></tr>';
    }
    html+='</table></div>';
  }

  // Vocabulary exercise
  if(ls.vocabulary_exercise){
    html+='<div class="section"><h3>'+t('vocabExer')+'</h3>';
    if(typeof ls.vocabulary_exercise==='string'){
      html+='<pre style="white-space:pre-wrap;background:var(--input-bg);padding:12px;border-radius:8px">'+ls.vocabulary_exercise+'</pre>'
    }else{
      var vi=ls.vocabulary_exercise;
      html+='<p>'+(vi.instructions||'')+'</p>';
      var items=vi.items||[];
      for(var ii=0;ii<items.length;ii++){
        var item=items[ii];
        var sentence=typeof item==='string'?item:item.sentence||item.question||item;
        var eid='ve_'+lid+'_'+ii;
        var answer=typeof item==='string'?'':item.answer||item.original||'';
        html+='<div class="exercise"><p>'+sentence+'</p>'+
          '<input type="text" id="'+eid+'" placeholder="'+t('writeHere')+'" '+
          'oninput="exerciseAnswers[\''+eid+'\']=this.value">'+
          '<button class="check-btn" '+
          'onclick="checkExercise(\''+eid+'\',\''+answer+'\')">'+
          t('checkBtn')+'</button>'+
          '<span id="res_'+eid+'"></span></div>';
      }
    }
    html+='</div>';
  }

  // Grammar exercise
  if(ls.grammar_exercise){
    html+='<div class="section"><h3>'+t('gramExer')+'</h3>';
    if(typeof ls.grammar_exercise==='string'){
      html+='<pre style="white-space:pre-wrap;background:var(--input-bg);padding:12px;border-radius:8px">'+ls.grammar_exercise+'</pre>'
    }else{
      var gi=ls.grammar_exercise;
      html+='<p>'+(gi.instructions||'')+'</p>';
      var items=gi.items||[];
      for(var ii=0;ii<items.length;ii++){
        var item=items[ii];
        var q=typeof item==='string'?item:item.original||item.question||item;
        var a=typeof item==='string'?'':item.rewrite||item.answer||'';
        var eid='ge_'+lid+'_'+ii;
        html+='<div class="exercise"><p>'+q+'</p>'+
          '<input type="text" id="'+eid+'" placeholder="'+t('writeHere')+'">'+
          '<button class="check-btn" '+
          'onclick="checkWrite(\''+eid+'\',\''+a+'\')">'+
          t('checkBtn')+'</button>'+
          '<span id="res_'+eid+'"></span></div>';
      }
    }
    html+='</div>';
  }

  // Writing task
  if(ls.writing_task){
    var wt=ls.writing_task;
    var prompt=typeof wt==='string'?wt:wt.prompt||wt.task||'';
    var model=typeof wt==='string'?'':wt.model_answer||wt.model||'';
    html+='<div class="section"><h3>'+t('writeTask')+'</h3><p>'+prompt+'</p>'+
      '<textarea rows="6" placeholder="'+t('writeHere')+'"></textarea>';
    if(model){
      var escModel=model.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;').replace(/\n/g,'\\n').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      // Use onclick with escaped single quotes
      html+="<button class=\"check-btn\" onclick=\"alert('"+escModel+"')\">"+t('showAns')+'</button>';
    }
    html+='</div>';
  }

  // Dialogue
  if(ls.dialogue){
    html+='<div class="section"><h3>'+t('dialogue')+'</h3>';
    if(typeof ls.dialogue==='string'){
      html+='<div class="dialogue-lines" style="white-space:pre-wrap;background:var(--input-bg);padding:12px;border-radius:8px">';
      var dlines=ls.dialogue.split('\n');
      for(var di=0;di<dlines.length;di++){
        var l=dlines[di].trim();
        if(l)html+='<p>'+l+'</p>';
      }
      html+='</div>';
      html+='</div>';
    }else{
      var d=ls.dialogue;
      html+='<p class="dialogue-setting">'+(d.setting||'')+'</p>';
      var dlines=d.lines||[];
      for(var di=0;di<dlines.length;di++){
        var line=dlines[di];
        var s=typeof line==='string'?line:line.speaker||'';
        var tx=typeof line==='string'?'':line.text||line.line||'';
        html+='<div class="dialogue-line"><strong>'+s+':</strong> '+tx+'</div>';
      }
      html+='</div>';
    }
  }

  // Quiz
  if(ls.quiz&&ls.quiz.length){
    html+='<div class="section"><h3>'+t('quiz')+'</h3>';
    for(var qi=0;qi<ls.quiz.length;qi++){
      var q=ls.quiz[qi];
      var qtext=typeof q==='string'?q:q.question||q.q||'';
      var opts=typeof q==='string'?[]:q.options||q.choices||[];
      var ans=typeof q==='string'?'':q.answer||q.correct||q.a||'';
      html+='<div class="quiz-item"><p>'+(qi+1)+'. '+qtext+'</p>';
      for(var oi=0;oi<opts.length;oi++){
        var o=opts[oi];
        html+='<label class="quiz-option" onclick="selectQuizOption(this,'+qi+','+oi+')">'+
          '<input type="radio" name="quiz_'+qi+'" value="'+oi+'"><span>'+o+'</span></label>';
      }
      html+='<span id="qres_'+lid+'_'+qi+'"></span></div>'+
        '<input type="hidden" id="qans_'+lid+'_'+qi+'" value="'+ans+'">';
    }
    html+='<button class="check-btn" id="cq_'+lid+'" data-count="'+ls.quiz.length+'">'+t('checkBtn')+'</button>'+
      '<div id="qscore_'+lid+'"></div></div>';
  }

  // Action bar
  var doneText=isLessonComplete(lid)?'✅ '+t('lessonDone'):'⬜ '+t('markDone');
  html+='<div class="action-bar" style="display:flex;gap:10px;padding:10px;flex-wrap:wrap;border-top:1px solid var(--border,#ddd);margin-top:20px">'+
    '<button class="complete-btn" onclick="toggleLessonComplete(\''+lid+'\',this)" style="background:var(--accent,#27ae60);color:#fff;font-weight:bold">'+doneText+'</button>'+
    '<button onclick="showNotes(\''+lid+'\')">'+t('notesTitle')+'</button>'+
    '<button onclick="showSpeaking(\''+lid+'\')">'+t('speakPractice')+'</button>'+
    '<button onclick="showFlashcards()">'+t('flashcards')+'</button>'+
    '<button onclick="exportPDF()">'+t('pdfBtn')+'</button></div>';
  html+='</div>';
  lv.innerHTML=html;

  var qb=document.getElementById('cq_'+lid);
  if(qb)qb.onclick=function(){
    var cnt=parseInt(qb.dataset.count||0);
    checkQuiz(lid,cnt);
  };
}


function checkExercise(eid,answer){const el=document.getElementById(eid);const res=document.getElementById('res_'+eid);if(!el||!res)return;const val=el.value.trim();if(!val){el.style.borderColor='orange';res.innerHTML=t('answerFirst');res.style.color='orange';return;}if(answer&&val.toLowerCase()===answer.toLowerCase()){el.style.borderColor='green';res.innerHTML=t('correct');res.style.color='green';}else{el.style.borderColor='red';res.innerHTML=t('wrong')+' ('+t('answered')+' '+answer+')';res.style.color='red';}}

function checkWrite(eid,answer){const el=document.getElementById(eid);const res=document.getElementById('res_'+eid);if(!el||!res)return;if(!el.value.trim()){res.innerHTML=t('answerFirst');res.style.color='orange';return;}if(answer){const user=el.value.trim().toLowerCase().replace(/[^a-z\s]/g,'');const ans=answer.toLowerCase().replace(/[^a-z\s]/g,'');if(user===ans){res.innerHTML=t('correct');res.style.color='green';}else{res.innerHTML=t('closeToCorrect');res.style.color='#e67e22';}}else{res.innerHTML=t('answered');res.style.color='green';}}

function selectQuizOption(el,qi,oi){const parent=el.closest('.quiz-item');if(parent){parent.querySelectorAll('.quiz-option').forEach(o=>o.classList.remove('selected'));el.classList.add('selected');}}

function checkQuiz(lid,num){let correct=0;for(let i=0;i<num;i++){const ansEl=document.getElementById('qans_'+lid+'_'+i);const resEl=document.getElementById('qres_'+lid+'_'+i);if(!ansEl||!resEl)continue;const ans=ansEl.value;const selected=document.querySelector('input[name="quiz_'+i+'"]:checked');if(selected){const text=selected.nextElementSibling?selected.nextElementSibling.textContent:'';if(text.trim().toLowerCase()===ans.trim().toLowerCase()){resEl.innerHTML=t('correct');resEl.style.color='green';correct++;}else{resEl.innerHTML=t('wrong');resEl.style.color='red';}}else{resEl.innerHTML=t('answerFirst');resEl.style.color='orange';}}const scoreEl=document.getElementById('qscore_'+lid);if(scoreEl)scoreEl.innerHTML='<p>'+correct+'/'+num+' '+t('correct')+'</p>';}

// ─── DASHBOARD ───
function showDashboard(){hideAllViews();let v=document.getElementById('dashboardView');if(!v){v=document.createElement('div');v.id='dashboardView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);const p=getProgress();let html='<h2>'+t('dashTitle')+'</h2>';const curricula=appData?appData.curricula:[];html+='<div class="dash-grid">';curricula&&curricula.forEach((c,ci)=>{html+='<div class="dash-card"><h3>'+(c.name||'')+'</h3>';const levels=c.levels||[];let passed=0;levels.forEach((l,li)=>{const pp=getLevelProgress(ci,li);if(pp.passed)passed++;});html+='<p>'+t('levels')+': '+levels.length+' | '+t('passedLevels')+': '+passed+'</p><div class="progress-bar"><div class="progress-fill" style="width:'+(levels.length?(passed/levels.length*100):0)+'%"></div></div>';html+='</div>';});html+='</div>';const favs=getFavorites();if(favs.length){html+='<h3>'+t('favShort')+'</h3><div class="fav-list">';favs.slice(0,20).forEach(id=>{html+='<span class="fav-chip">'+id+'</span>';});html+='</div>';}html+='<button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';v.innerHTML=html;}

// ─── VOCAB BANK ───
function showVocabBank(){hideAllViews();let v=document.getElementById('vocabBankView');if(!v){v=document.createElement('div');v.id='vocabBankView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);let html='<h2>'+t('vocabTitle')+'</h2><input type="text" id="vocabSearch" placeholder="'+t('search')+'" oninput="filterVocab(this.value)" style="width:100%;padding:10px;margin:10px 0;border:1px solid var(--border,#ddd);border-radius:6px;"><div id="vocabList">';const allWords=[];if(appData&&appData.curricula){appData.curricula.forEach((c,ci)=>{c.levels&&c.levels.forEach((l,li)=>{l.modules&&l.modules.forEach(m=>{m.lessons&&m.lessons.forEach(ls=>{const words=ls.vocabulary||[];words.forEach(w=>{const word=typeof w==='string'?w:w.word||'';const trans=typeof w==='string'?'':w.translation||w.meaning||'';const lv2=l.cefr_level||l.level||'';allWords.push({word,trans,lesson:ls.lesson_title,level:lv2})})})})})});}if(allWords.length===0)html+='<p>'+t('noVocab')+'</p>';else{allWords.forEach(w=>{html+='<div class="vocab-item"><span class="vocab-word">'+w.word+'</span><span class="vocab-trans">'+w.trans+'</span><span class="vocab-lvl">'+w.level+'</span></div>';});}html+='</div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';v.innerHTML=html;}

function filterVocab(q){const items=document.querySelectorAll('.vocab-item');items.forEach(item=>{const text=item.textContent.toLowerCase();item.style.display=!q||text.includes(q.toLowerCase())?'flex':'none';});}

// ─── GRAMMAR REF ───
function showGrammarRef(){hideAllViews();let v=document.getElementById('grammarRefView');if(!v){v=document.createElement('div');v.id='grammarRefView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);let html='<h2>'+t('gramTitle')+'</h2><input type="text" id="grammarSearch" placeholder="'+t('searchGram')+'" oninput="filterGrammar(this.value)" style="width:100%;padding:10px;margin:10px 0;border:1px solid var(--border,#ddd);border-radius:6px;"><div id="grammarList">';const topics=[];if(appData&&appData.curricula){appData.curricula.forEach((c,ci)=>{c.levels&&c.levels.forEach(l=>{l.modules&&l.modules.forEach(m=>{const gf=m.grammar_focus||m.grammar||'';const gLvl=l.cefr_level||l.level||'';if(gf)topics.push({topic:gf,level:gLvl,module:m.module_title});if(m.lessons){m.lessons.forEach(ls=>{if(ls.grammar_focus||ls.explanation){topics.push({topic:ls.grammar_focus||ls.explanation.slice(0,80),level:l.cefr_level,module:m.module_title,lesson:ls.lesson_title})}})}})})});}if(topics.length===0)html+='<p>'+t('noGrammar')+'</p>';else{topics.forEach(topic=>{html+='<div class="grammar-item"><strong>'+topic.topic+'</strong><span class="grammar-lvl">'+topic.level+'</span></div>';});}html+='</div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';v.innerHTML=html;}

function filterGrammar(q){const items=document.querySelectorAll('.grammar-item');items.forEach(item=>{const text=item.textContent.toLowerCase();item.style.display=!q||text.includes(q.toLowerCase())?'flex':'none';});}

// ─── PLACEMENT TEST ───
function showPlacementTest(){hideAllViews();let v=document.getElementById('placementView');if(!v){v=document.createElement('div');v.id='placementView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);if(!placementTest){v.innerHTML='<h2>'+t('placeTitle')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;}const qs=placementTest.questions||placementTest;v.innerHTML='<h2>'+t('placeTitle')+'</h2><p>'+qs.length+' '+t('placeInfo')+'</p><div id="ptQuestions">'+qs.map((q,i)=>'<div class="quiz-item"><p>'+(i+1)+'. '+(q.question||q.q||q)+'</p>'+(q.options||q.choices||[]).map((o,oi)=>'<label class="quiz-option" onclick="selectQuizOption(this,'+i+','+oi+')"><span>'+o+'</span></label>').join('')+'</div>').join('')+'</div><button class="check-btn" id="submitPTBtn">'+t('placeSubmit')+'</button><div id="ptResult"></div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';document.getElementById('submitPTBtn').onclick=function(){submitPT(qs.length)};}

function submitPT(num){const n=parseInt(num);let correct=0;const qs=placementTest.questions||placementTest;for(let i=0;i<n&&i<qs.length;i++){const ans=qs[i].answer||qs[i].correct||qs[i].a||'';const selected=document.querySelectorAll('#ptQuestions .quiz-item')[i];const sel=selected?selected.querySelector('.quiz-option.selected'):null;const text=sel?sel.textContent.trim():'';if(text.toLowerCase()===ans.toLowerCase())correct++;}const percent=Math.round(correct/n*100);const el=document.getElementById('ptResult');if(el)el.innerHTML='<p>'+t('placeResult')+' '+correct+'/'+n+' ('+percent+'%)</p><p>'+t('placeSuggest')+' '+(percent<40?'A1':percent<55?'A2':percent<70?'B1':percent<80?'B2':percent<90?'C1':'C2')+'</p>';}

// ─── SYNC ───
function showSync(){hideAllViews();let v=document.getElementById('syncView');if(!v){v=document.createElement('div');v.id='syncView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);if(syncUser){v.innerHTML='<h2>'+t('syncTitle')+'</h2><p>'+t('syncLoggedIn')+': <strong>'+syncUser.email+'</strong></p><div class="sync-btns"><button onclick="syncUpload()">'+t('syncUpload')+'</button><button onclick="syncDownload()">'+t('syncDownload')+'</button></div><div class="sync-btns"><button onclick="syncLogout()">'+t('syncLogout')+'</button></div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';}else{v.innerHTML='<h2>'+t('syncTitle')+'</h2><div class="sync-form"><input type="email" id="syncEmail" placeholder="'+t('syncEmail')+'" style="width:100%;padding:10px;margin:5px 0"><input type="password" id="syncPass" placeholder="'+t('syncPass')+'" style="width:100%;padding:10px;margin:5px 0"><div class="sync-btns"><button onclick="syncLogin()">'+t('syncLogin')+'</button><button onclick="syncSignup()">'+t('syncSignup')+'</button></div></div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';}}

function syncLogin(){const email=document.getElementById('syncEmail')?.value;const pass=document.getElementById('syncPass')?.value;if(!email||!pass){toast(t('answerFirst'));return;}fetch('/api/sync/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password:pass})}).then(r=>r.json()).then(d=>{if(d.ok){syncUser=d.user;lss('syncUser',JSON.stringify(d.user));showSync();toast(t('syncLoggedIn'));}else toast(d.error)}).catch(()=>toast(t('wrong')));}

function syncSignup(){const email=document.getElementById('syncEmail')?.value;const pass=document.getElementById('syncPass')?.value;if(!email||!pass){toast(t('answerFirst'));return;}fetch('/api/sync/signup',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password:pass})}).then(r=>r.json()).then(d=>{if(d.ok){syncUser=d.user;lss('syncUser',JSON.stringify(d.user));showSync();toast(t('syncLoggedIn'));}else toast(d.error)}).catch(()=>toast(t('wrong')));}

function syncUpload(){if(!syncUser)return;const p=getProgress();fetch('/api/sync/upload',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user:syncUser,data:p})}).then(r=>r.json()).then(d=>{if(d.ok)toast(t('syncUpload'));else toast(d.error)}).catch(()=>toast(t('wrong')));}

function syncDownload(){if(!syncUser)return;fetch('/api/sync/download',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user:syncUser})}).then(r=>r.json()).then(d=>{if(d.ok&&d.data){saveProgress(d.data);toast(t('syncDownload'));}else toast(d.error)}).catch(()=>toast(t('wrong')));}

function syncLogout(){syncUser=null;lss('syncUser','');showSync();}

function initSync(){const saved=ls('syncUser');if(saved){try{syncUser=JSON.parse(saved)}catch(e){syncUser=null}}}

// ─── SETTINGS ───
function getSettings(){try{const d=JSON.parse(ls('eng_settings'));return d&&typeof d==='object'?d:{fontSize:'medium',studyDays:[0,1,2,3,4,5,6],liteMode:false,reminderOn:false,reminderTime:'09:00',headerColor:'',customColors:'',accentColor:''}}catch(e){return{fontSize:'medium',studyDays:[0,1,2,3,4,5,6],liteMode:false,reminderOn:false,reminderTime:'09:00',headerColor:'',customColors:'',accentColor:''}}}

function saveSettings(s){lss('eng_settings',JSON.stringify(s));}

function updateSetting(k,v){const s=getSettings();s[k]=v;saveSettings(s);showSettings();if(k==='fontSize')document.body.style.fontSize=v==='small'?'14px':v==='large'?'20px':'16px';}

function toggleStudyDay(d){const s=getSettings();const idx=s.studyDays.indexOf(d);if(idx>-1)s.studyDays.splice(idx,1);else s.studyDays.push(d);saveSettings(s);showSettings();}

// ─── SETTINGS VIEW ───
function showSettings(){hideAllViews();let v=document.getElementById('settingsView');if(!v){v=document.createElement('div');v.id='settingsView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);const s=getSettings();v.innerHTML='<h2>'+t('settingsTitle')+'</h2><div class="settings-group"><label>'+t('langToggle')+'</label><button onclick="toggleLang()">'+LANG[currentLang==='ar'?'en':'ar'].appTitle+'</button></div><div class="settings-group"><label>'+t('fontSize')+'</label><select onchange="updateSetting(\'fontSize\',this.value)"><option value="small" '+(s.fontSize==='small'?'selected':'')+'>S</option><option value="medium" '+(s.fontSize==='medium'?'selected':'')+'>M</option><option value="large" '+(s.fontSize==='large'?'selected':'')+'>L</option></select></div><div class="settings-group"><label>'+t('studyDays')+'</label><div style="display:flex;gap:4px;flex-wrap:wrap">'+[0,1,2,3,4,5,6].map(d=>'<button class="day-btn'+(s.studyDays.includes(d)?' active':'')+'" onclick="toggleStudyDay('+d+')">'+(LANG[currentLang].weekDays[d]||d)+'</button>').join('')+'</div></div><div class="settings-group"><label>'+t('reminder')+'</label><input type="time" value="'+s.reminderTime+'" onchange="updateSetting(\'reminderTime\',this.value)"><button onclick="var s=getSettings();updateSetting(\'reminderOn\',!s.reminderOn)">'+(s.reminderOn?t('reminderOn'):t('reminderOff'))+'</button></div><div class="settings-group"><label>'+t('accentColor')+'</label><input type="color" value="'+s.accentColor+'" onchange="applyColor(\'accentColor\',this.value)"></div><div class="settings-group"><label>'+t('headerColor')+'</label><input type="color" value="'+s.headerColor+'" onchange="applyColor(\'headerColor\',this.value)"></div><div class="settings-group"><label>'+t('liteDesc')+'</label><button onclick="var s=getSettings();updateSetting(\'liteMode\',!s.liteMode)">'+(s.liteMode?t('reminderOn'):t('reminderOff'))+'</button></div><div class="settings-group"><label>'+t('export')+'</label><button onclick="exportData()">'+t('export')+'</button></div><div class="settings-group"><label>'+t('reset')+'</label><button onclick="if(confirm(\''+t('resetConfirm')+'\')){localStorage.clear();location.reload()}">'+t('reset')+'</button></div><div class="settings-group"><label>'+t('back')+'</label><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button></div>';}
function applyColor(k,v){updateSetting(k,v);document.documentElement.style.setProperty('--'+k,v||'inherit');}
function exportData(){const d={progress:getProgress(),favs:getFavorites(),settings:getSettings()};const b=document.createElement('textarea');b.value=JSON.stringify(d);document.body.appendChild(b);b.select();document.execCommand('copy');document.body.removeChild(b);toast(t('shared'));}

// ─── ABOUT VIEW ───
function showAbout(){hideAllViews();let v=document.getElementById('aboutView');if(!v){v=document.createElement('div');v.id='aboutView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);const cl=LANG[currentLang];const arts=currentLang==='ar'?[{t:'\ud83c\udfb5 \u0634\u0627\u0639\u0631',d:'\u064a\u0643\u062a\u0628 \u0627\u0644\u0634\u0639\u0631 \u0648\u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0623\u062f\u0628\u064a\u0629 \u0628\u0627\u0644\u0644\u063a\u062a\u064a\u0646 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629'},{t:'\ud83c\udfb6 \u0645\u0644\u062d\u0646',d:'\u064a\u064f\u0644\u062d\u0651\u0646 \u0627\u0644\u0623\u0644\u062d\u0627\u0646 \u0648\u064a\u0628\u062a\u0643\u0631 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u064a\u0629 \u0628\u0623\u0633\u0627\u0644\u064a\u0628 \u0645\u062a\u0646\u0648\u0639\u0629'},{t:'\ud83c\udfb9 \u0645\u0648\u0632\u0639 \u0645\u0648\u0633\u064a\u0642\u064a',d:'\u064a\u064f\u0648\u0632\u0651\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u064a\u0629 \u0648\u064a\u064f\u0646\u0633\u0651\u0642 \u0627\u0644\u0622\u0644\u0627\u062a \u0648\u0627\u0644\u0623\u0635\u0648\u0627\u062a'},{t:'\ud83c\udfa8 \u0641\u0646\u0627\u0646',d:'\u0645\u0628\u062f\u0639 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0645\u0648\u0627\u0647\u0628 \u0641\u064a \u0645\u062c\u0627\u0644\u0627\u062a \u0627\u0644\u0644\u063a\u0629 \u0648\u0627\u0644\u0641\u0646 \u0648\u0627\u0644\u062b\u0642\u0627\u0641\u0629'}]:[{t:'\ud83c\udfb5 Poet',d:'Writes poetry and literary texts in both Arabic and English'},{t:'\ud83c\udfb6 Composer',d:'Creates melodies and composes musical works in diverse styles'},{t:'\ud83c\udfb9 Music Arranger',d:'Arranges musical works, orchestrates instruments and voices'},{t:'\ud83c\udfa8 Artist',d:'Multi-talented creative in language, art, and culture'}];v.innerHTML='<div class="about-content" style="padding:20px;max-width:800px;margin:0 auto"><h2>'+t('aboutTitle')+'</h2><div class="about-arts" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:20px 0">'+arts.map(function(a){return'<div class="art-card" style="text-align:center;background:var(--surface);padding:18px 10px;border-radius:12px;border:1px solid var(--border);box-shadow:0 2px 8px rgba(0,0,0,.06)"><div style="font-size:36px;margin-bottom:8px">'+a.t.slice(0,2)+'</div><h4 style="margin:4px 0;font-size:1em;color:var(--accent,#e74c3c)">'+a.t+'</h4><p style="font-size:.8em;color:var(--text-light);margin:4px 0 0">'+a.d+'</p></div>'}).join('')+'</div><div class="about-section" style="margin:15px 0"><h3>'+t('summary')+'</h3><p>'+t('summaryText')+'</p></div><div class="about-section" style="margin:15px 0"><h3>'+t('qualifications')+'</h3><ul>'+(cl.qualList||[]).map(q=>'<li>'+q+'</li>').join('')+'</ul></div><div class="about-section" style="margin:15px 0"><h3>'+t('experience')+'</h3><ul>'+(cl.expList||[]).map(e=>'<li>'+e+'</li>').join('')+'</ul></div><div class="about-section" style="margin:15px 0"><h3>'+t('skills')+'</h3><ul>'+(cl.skillList||[]).map(s=>'<li>'+s+'</li>').join('')+'</ul></div><div class="about-section" style="margin:15px 0"><h3>'+t('interests')+'</h3><ul>'+(cl.intList||[]).map(i=>'<li>'+i+'</li>').join('')+'</ul></div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button></div>';}

// ─── DEVELOPER VIEW ───
function showDeveloper(){
  try{
    hideAllViews();
    var toc=document.getElementById('toc');if(toc)toc.style.display='none';
    var stats=document.getElementById('stats');if(stats)stats.style.display='none';
    var controls=document.querySelector('.controls');if(controls)controls.style.display='none';
    var v=document.getElementById('developerView');
    if(!v){v=document.createElement('div');v.id='developerView';v.className='lesson-view'}
    v.style.display='block';
    document.getElementById('content').appendChild(v);
    var isAr=currentLang==='ar';
    var skills=isAr?['JavaScript / Node.js','HTML5 / CSS3','React / Vue.js','Python','قواعد البيانات','تحسين الأداء']:['JavaScript / Node.js','HTML5 / CSS3','React / Vue.js','Python','Database','Performance Optimization'];
    var projects=isAr?['تطبيقات تعليمية تفاعلية','أنظمة إدارة المحتوى','متاجر إلكترونية','أدوات أتمتة']:['Interactive educational apps','Content management systems','E-commerce stores','Automation tools'];
    var skillsHtml=skills.map(function(s){return '<span style="padding:6px 14px;background:var(--test-option-bg);border:1px solid var(--border);border-radius:20px;font-size:.9em">'+s+'</span>';}).join('');
    var projectsHtml=projects.map(function(p){return '<li style="padding:8px 0;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px"><span style="color:var(--accent)">&#10003;</span> '+p+'</li>';}).join('');
    v.innerHTML='<div style="padding:20px;max-width:800px;margin:0 auto">'
      +'<div style="text-align:center;margin-bottom:30px">'
      +'<div style="width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,var(--accent),#9b59b6);margin:0 auto 15px;display:flex;align-items:center;justify-content:center;font-size:48px;color:#fff;box-shadow:0 4px 20px rgba(0,0,0,.2)">&#128104;&#8205;&#128187;</div>'
      +'<h2 style="font-size:1.8em;margin:0 0 5px">Tito Rasta</h2>'
      +'<p style="color:var(--accent);font-size:1.1em;margin:0">'+(isAr?'مطور الويب والتطبيقات':'Web & App Developer')+'</p>'
      +'</div>'
      +'<div style="background:var(--surface);border-radius:12px;padding:20px;margin:15px 0;box-shadow:var(--card-shadow)">'
      +'<h3 style="color:var(--accent);margin-bottom:10px">'+(isAr?'\ud83c\udfaf نبذة مختصرة':'\ud83c\udfaf Brief Bio')+'</h3>'
      +'<p style="line-height:1.8;color:var(--text)">'+(isAr?'مطور ويب متخصص في بناء التطبيقات التفاعلية والأنظمة التعليمية الإلكترونية. خبرة في تطوير واجهات المستخدم وتحسين تجربة المستخدم مع التركيز على الجودة والأداء.':'Specialized web developer in building interactive applications and e-learning systems. Experience in developing user interfaces and improving user experience with focus on quality and performance.')+'</p>'
      +'</div>'
      +'<div style="background:var(--surface);border-radius:12px;padding:20px;margin:15px 0;box-shadow:var(--card-shadow)">'
      +'<h3 style="color:var(--accent);margin-bottom:10px">'+(isAr?'\ud83d\udee0\ufe0f المهارات':'\ud83d\udee0\ufe0f Skills')+'</h3>'
      +'<div style="display:flex;flex-wrap:wrap;gap:8px">'+skillsHtml+'</div>'
      +'</div>'
      +'<div style="background:var(--surface);border-radius:12px;padding:20px;margin:15px 0;box-shadow:var(--card-shadow)">'
      +'<h3 style="color:var(--accent);margin-bottom:10px">'+(isAr?'\ud83d\udce6 المشاريع':'\ud83d\udce6 Projects')+'</h3>'
      +'<ul style="list-style:none;padding:0">'+projectsHtml+'</ul>'
      +'</div>'
      +'<div style="background:linear-gradient(135deg,var(--accent),#9b59b6);border-radius:12px;padding:20px;margin:15px 0;color:#fff;text-align:center">'
      +'<h3 style="margin-bottom:10px">'+(isAr?'\ud83d\udcac رسالة المطور':'\ud83d\udcac Developer Message')+'</h3>'
      +'<p style="font-size:1.05em;line-height:1.8;opacity:.95">'+(isAr?'تم بناء هذا التطبيق بعناية فائقة لخدمة التعليم وتمكين الطلاب من تعلم اللغة الإنجليزية بطريقة تفاعلية وممتعة. أتمنى للجميع التوفيق والنجاح!':'This application was built with utmost care to serve education and enable students to learn English in an interactive and fun way. Wishing everyone success and prosperity!')+'</p>'
      +'</div>'
      +'<button class="back-btn" onclick="hideAllViews();showWelcome()" style="margin-top:15px">'+t('back')+'</button>'
      +'</div>';
  }catch(e){console.error('showDeveloper error:',e);toast('Error: '+e.message);}
}

// ─── CV VIEW ───
function showCV(){hideAllViews();let v=document.getElementById('cvView');if(!v){v=document.createElement('div');v.id='cvView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);const cl=LANG[currentLang];v.innerHTML='<div class="cv-content" style="padding:20px;max-width:800px;margin:0 auto"><img src="/teacher.jpg" alt="استاذ ياسر ابراهيم" style="width:100%;max-width:280px;border-radius:16px;display:block;margin:0 auto 20px;box-shadow:0 4px 20px rgba(0,0,0,.15)" onerror="console.error(\'img err\')"><h2>'+t('aboutTitle')+'</h2><div class="cv-section" style="margin:12px 0"><h3>'+t('summary')+'</h3><p>'+t('summaryText')+'</p></div><div class="cv-section" style="margin:12px 0"><h3>'+t('qualifications')+'</h3><ul>'+(cl.qualList||[]).map(q=>'<li>'+q+'</li>').join('')+'</ul></div><div class="cv-section" style="margin:12px 0"><h3>'+t('experience')+'</h3><ul>'+(cl.expList||[]).map(e=>'<li>'+e+'</li>').join('')+'</ul></div><div class="cv-section" style="margin:12px 0"><h3>'+t('skills')+'</h3><ul>'+(cl.skillList||[]).map(s=>'<li>'+s+'</li>').join('')+'</ul></div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button></div>';}

// ─── FLASHCARDS ───
function showFlashcards(){hideAllViews();let v=document.getElementById('flashcardsView');if(!v){v=document.createElement('div');v.id='flashcardsView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);flashData=[];flashIdx=0;flashKnown=0;flashUnknown=0;if(appData&&appData.curricula){appData.curricula.forEach(c=>{c.levels&&c.levels.forEach(l=>{l.modules&&l.modules.forEach(m=>{m.lessons&&m.lessons.forEach(ls=>{(ls.vocabulary||[]).forEach(w=>{const word=typeof w==='string'?w:w.word||'';const trans=typeof w==='string'?'':w.translation||w.meaning||'';if(word)flashData.push({word,trans})})})})})})}if(!flashData.length){v.innerHTML='<h2>'+t('flashcards')+'</h2><p>'+t('noVocab')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;}renderFlash();}
function renderFlash(){const v=document.getElementById('flashcardsView');if(!v)return;const f=flashData[flashIdx];if(!f){v.innerHTML='<h2>'+t('flashcards')+'</h2><p>'+t('flashDone')+' '+t('known')+': '+flashKnown+' | '+t('unknown')+': '+flashUnknown+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;}v.innerHTML='<h2>'+t('flashcards')+' ('+(flashIdx+1)+'/'+flashData.length+')</h2><div class="flashcard" style="padding:40px;margin:20px;text-align:center;border:2px solid var(--border,#ddd);border-radius:12px;font-size:24px;background:var(--card-bg,#f9f9f9)"><p>'+f.word+'</p><p style="font-size:16px;color:#888;margin-top:10px">'+f.trans+'</p></div><div style="display:flex;justify-content:center;gap:20px"><button onclick="flashKnown++;(flashIdx<flashData.length-1)?(flashIdx++,renderFlash()):renderFlashComplete()">'+t('iKnow')+'</button><button onclick="flashUnknown++;(flashIdx<flashData.length-1)?(flashIdx++,renderFlash()):renderFlashComplete()">'+t('didntKnow')+'</button></div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';}
function renderFlashComplete(){const v=document.getElementById('flashcardsView');if(!v)return;v.innerHTML='<h2>'+t('flashcards')+'</h2><p>'+t('flashDone')+'</p><p>'+t('known')+': '+flashKnown+' | '+t('unknown')+': '+flashUnknown+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';}

// ─── LEVEL TESTS ───
function showLevelTest(){hideAllViews();let v=document.getElementById('levelTestView');if(!v){v=document.createElement('div');v.id='levelTestView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);if(!levelTests||!levelTests.tests||!levelTests.tests.length){v.innerHTML='<h2>'+t('levelTest')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;}const lvl=courseData.levels&&courseData.levels[0];const cefr=lvl?cefrLevel(lvl):'';let testData=null;if(cefr){testData=levelTests.tests.find(function(t){return t.from_level===cefr||t.to_level===cefr});}if(!testData)testData=levelTests.tests[0];if(!testData){v.innerHTML='<h2>'+t('levelTest')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;}const qs=testData.questions||[];if(!qs.length){v.innerHTML='<h2>'+t('levelTest')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;}const pp=testData.pass_percentage||levelTests.pass_percentage||60;v.setAttribute('data-test-qs',JSON.stringify(qs));v.setAttribute('data-pass',pp);v.setAttribute('data-tid',testData.id||'');v.innerHTML='<h2>'+t('levelTest')+' - '+(testData.title||cefr)+'</h2><p>'+qs.length+' '+t('testQuestions')+' | '+t('testInfo')+' '+pp+'%</p><div id="ltQuestions">'+qs.map((q,i)=>'<div class="quiz-item"><p>'+(i+1)+'. '+(q.question||q.q||q)+'</p>'+(q.options||q.choices||[]).map((o,oi)=>'<label class="quiz-option" onclick="selectQuizOption(this,'+i+','+oi+')"><span>'+o+'</span></label>').join('')+'</div>').join('')+'</div><button class="check-btn" onclick="submitLevelTest()">'+t('checkBtn')+'</button><div id="ltResult"></div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';}
function submitLevelTest(){const v=document.getElementById('levelTestView');if(!v)return;const qs=JSON.parse(v.getAttribute('data-test-qs')||'[]');const pp=parseInt(v.getAttribute('data-pass')||'60');if(!qs.length)return;let correct=0;const items=v.querySelectorAll('#ltQuestions .quiz-item');items.forEach((item,i)=>{const sel=item.querySelector('.quiz-option.selected');const text=sel?sel.textContent.trim():'';const ans=qs[i].answer||qs[i].correct||qs[i].a||'';if(text.toLowerCase()===ans.toLowerCase())correct++;});const total=qs.length,percent=Math.round(correct/total*100);const el=document.getElementById('ltResult');if(!el)return;el.innerHTML='<p>'+correct+'/'+total+' ('+percent+'%)</p>';if(percent>=pp){el.innerHTML+='<p>'+t('passMsg')+'</p>';setLevelTestResult(activeCurriculum,0,true,percent,[],true);fireConfetti();updateStreak();}else{el.innerHTML+='<p>'+t('failMsg')+'</p>';setLevelTestResult(activeCurriculum,0,false,percent,[],false);}}

// ─── NOTES ───
function showNotes(lid){hideAllViews();let v=document.getElementById('notesView');if(!v){v=document.createElement('div');v.id='notesView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);const key='eng_note_'+lid;const saved=ls(key)||'';v.innerHTML='<h2>'+t('notesTitle')+'</h2><textarea id="notesArea" style="width:100%;min-height:200px;padding:10px;margin:10px 0;border:1px solid var(--border,#ddd);border-radius:6px;font-size:16px">'+saved+'</textarea><button onclick="lss(\''+key+'\',document.getElementById(\'notesArea\').value);toast(t(\'notesSaved\'))">'+t('notesSaved')+'</button><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';}

// ─── ACHIEVEMENTS ───
function showAchieve(){hideAllViews();let v=document.getElementById('achieveView');if(!v){v=document.createElement('div');v.id='achieveView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);const p=getProgress();const favs=getFavorites();const s=getSettings();let badges=[];let certBtns='';const curricula=appData?appData.curricula:[];curricula.forEach((c,ci)=>{let passed=0;(c.levels||[]).forEach((l,li)=>{if(getLevelProgress(ci,li).passed){passed++;certBtns+='<button class="check-btn" style="margin:4px" onclick="showCertificate('+ci+','+li+')">'+t('getCert')+' '+(l.level_name||l.cefr_level||'')+'</button>'}});if(passed>0)badges.push({icon:'\ud83c\udf93',title:t('levels')+' '+c.name,desc:passed+'/'+(c.levels||[]).length+' '+t('passedLevels')});});if(favs.length>=5)badges.push({icon:'\u2b50',title:t('favShort'),desc:favs.length+' '+t('favShort')});if(s.studyDays.length>=5)badges.push({icon:'\ud83d\udcc5',title:t('studyPlan'),desc:s.studyDays.length+' '+t('studyDays')});if(!badges.length)badges.push({icon:'\ud83c\udfc6',title:t('achieveNone'),desc:''});v.innerHTML='<h2>'+t('achieveTitle')+'</h2><div class="badges-grid" style="display:flex;flex-wrap:wrap;gap:12px;padding:10px">'+badges.map(b=>'<div class="badge-card" style="border:1px solid var(--border,#ddd);border-radius:10px;padding:15px;text-align:center;min-width:120px;background:var(--card-bg,#f9f9f9)"><div style="font-size:32px">'+b.icon+'</div><strong>'+b.title+'</strong><p style="font-size:12px;color:#888">'+b.desc+'</p></div>').join('')+'</div>'+(certBtns?'<div style="text-align:center;margin:12px 0">'+certBtns+'</div>':'')+'<button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';}

// ─── SPEAKING ───
function speakPractice(text,lang){if(!window.speechSynthesis||!window.SpeechSynthesisUtterance){toast(t('wrong'));return;}const u=new SpeechSynthesisUtterance(text);u.lang=lang||'en';u.rate=0.9;speechSynthesis.speak(u);}
function showSpeaking(lid){const ls=findFullLesson(lastLessonLn,lastLessonMi,lid);if(!ls||!ls.explanation){toast(t('noTest'));return;}speakPractice(ls.explanation,'en');}

// ─── EXPORT / PRINT ───
function exportPDF(){const lv=document.getElementById('lessonView');if(!lv||!lv.innerHTML.trim()||lv.style.display==='none'){toast(t('noTest'));return;}const w=window.open('','_blank');w.document.write('<html><head><title>'+t('pdfTitle')+'</title><style>body{font-family:sans-serif;padding:20px;direction:rtl}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccc;padding:8px}h2{color:#2c3e50}</style></head><body>');w.document.write(lv.innerHTML);w.document.write('</body></html>');w.document.close();w.onload=function(){w.print();};}

// ─── LAST LESSON TRACKING ───
let lastLessonLn=0,lastLessonMi=0;

// ─── ADMIN PANEL ───
function getAdminLessons(){try{var d=JSON.parse(ls('eng_admin_lessons'));return Array.isArray(d)?d:[]}catch(e){return[]}}
function saveAdminLessons(arr){lss('eng_admin_lessons',JSON.stringify(arr));}
function showAdminLogin(){if(prompt('🔐 أدخل رمز المدرب:')===(ls('eng_admin_pin')||'1234')){showAdmin()}else{toast('❌ رمز خطأ')}}
function showAdmin(){hideAllViews();var v=document.getElementById('adminView');if(!v){v=document.createElement('div');v.id='adminView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';renderAdmin()}
function renderAdmin(){var v=document.getElementById('adminView');if(!v)return;var lessons=getAdminLessons();var html='<h2>🔧 لوحة المدرب</h2>';html+='<div class="settings-group"><h3>➕ إضافة درس جديد</h3>';html+='<label>المنهج</label><select id="adminCurr">';if(appData&&appData.curricula){appData.curricula.forEach(function(c,i){html+='<option value="'+i+'">'+(c.name||'')+'</option>'})}html+='</select>';html+='<label>المستوى</label><input id="adminLevel" value="A1" style="width:100%;margin:4px 0;padding:8px;border:1px solid var(--border,#ddd);border-radius:6px">';html+='<label>عنوان الوحدة</label><input id="adminModule" placeholder="Module 4: New Module" style="width:100%;margin:4px 0;padding:8px;border:1px solid var(--border,#ddd);border-radius:6px">';html+='<label>عنوان الدرس</label><input id="adminTitle" placeholder="New Lesson" style="width:100%;margin:4px 0;padding:8px;border:1px solid var(--border,#ddd);border-radius:6px">';html+='<label>رابط الفيديو</label><input id="adminVideo" placeholder="https://youtube.com/watch?v=..." style="width:100%;margin:4px 0;padding:8px;border:1px solid var(--border,#ddd);border-radius:6px">';html+='<label>الأهداف (كل هدف في سطر)</label><textarea id="adminObjectives" rows="3" placeholder="هدف 1\nهدف 2" style="width:100%;margin:4px 0;padding:8px;border:1px solid var(--border,#ddd);border-radius:6px"></textarea>';html+='<label>الشرح (إنجليزي)</label><textarea id="adminExplanation" rows="4" placeholder="English explanation..." style="width:100%;margin:4px 0;padding:8px;border:1px solid var(--border,#ddd);border-radius:6px"></textarea>';
        html+='<label>الشرح (عربي)</label><textarea id="adminExplanationAr" rows="4" placeholder="الشرح بالعربية..." style="width:100%;margin:4px 0;padding:8px;border:1px solid var(--border,#ddd);border-radius:6px"></textarea>';html+='<label>المفردات (كلمة = ترجمة)</label><textarea id="adminVocab" rows="3" placeholder="hello = مرحبا\ngoodbye = وداعا" style="width:100%;margin:4px 0;padding:8px;border:1px solid var(--border,#ddd);border-radius:6px"></textarea>';html+='<button class="check-btn" onclick="addAdminLesson()" style="margin-top:10px">💾 حفظ الدرس</button></div>';html+='<div class="settings-group"><h3>📋 الدروس المضافة ('+lessons.length+')</h3>';if(lessons.length===0){html+='<p style="color:#888">لا توجد دروس مضافة بعد</p>'}else{for(var i=0;i<lessons.length;i++){var ls=lessons[i];html+='<div style="border:1px solid var(--border,#ddd);border-radius:8px;padding:10px;margin:8px 0">';html+='<strong>'+(ls.lesson_title||'')+'</strong> <small style="color:#888">'+(ls.level||'')+' | '+(ls.moduleTitle||'')+'</small>';if(ls.video_url)html+='<br><small>🎬 <a href="'+ls.video_url+'" target="_blank" style="color:var(--accent,#3498db)">مشاهدة</a></small>';html+='<div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">';html+='<button class="check-btn" onclick="viewAdminLesson('+i+')">👁 عرض</button>';html+='<button class="check-btn" style="background:#e74c3c" onclick="deleteAdminLesson('+i+')">🗑 حذف</button>';html+='</div></div>'}}html+='</div>';html+='<button class="back-btn" onclick="hideAllViews();showSettings()">'+t('back')+'</button>';v.innerHTML=html;}
function addAdminLesson(){var curr=document.getElementById('adminCurr');var level=document.getElementById('adminLevel');var mod=document.getElementById('adminModule');var title=document.getElementById('adminTitle');var video=document.getElementById('adminVideo');var obj=document.getElementById('adminObjectives');var expl=document.getElementById('adminExplanation');var explAr=document.getElementById('adminExplanationAr');var voc=document.getElementById('adminVocab');if(!title||!title.value.trim()){toast('❌ أدخل عنوان الدرس');return}var objectives=[];if(obj&&obj.value.trim()){objectives=obj.value.split('\n').map(function(s){return s.trim()}).filter(function(s){return s})}var vocabulary=[];if(voc&&voc.value.trim()){voc.value.split('\n').forEach(function(line){var parts=line.split('=').map(function(s){return s.trim()});if(parts.length===2&&parts[0]&&parts[1]){vocabulary.push({word:parts[0],translation:parts[1]})}})}var lesson={curriculumIdx:curr?parseInt(curr.value):0,level:level?level.value.trim():'A1',moduleTitle:mod?mod.value.trim():'',lesson_title:title.value.trim(),video_url:video?video.value.trim():'',objectives:objectives,explanation:expl?expl.value.trim():'',explanation_ar:explAr?explAr.value.trim():'',vocabulary:vocabulary,lesson_id:'admin_'+Date.now(),dateAdded:Date.now()};var lessons=getAdminLessons();lessons.push(lesson);saveAdminLessons(lessons);toast('✅ تم حفظ الدرس');renderAdmin()}
function deleteAdminLesson(idx){if(!confirm('🗑 حذف هذا الدرس؟'))return;var lessons=getAdminLessons();lessons.splice(idx,1);saveAdminLessons(lessons);renderAdmin()}
function viewAdminLesson(idx){var lessons=getAdminLessons();var ls=lessons[idx];if(!ls){toast('❌ لم يتم العثور على الدرس');return}hideAllViews();var v=document.getElementById('lessonView');if(!v){v=document.createElement('div');v.id='lessonView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';var html='';html+='<div class="lesson-view"><div class="lesson-header">';html+='<button class="back-btn" onclick="hideAllViews();showAdmin()">'+t('back')+'</button>';html+='<h2>📦 '+(ls.lesson_title||'')+'</h2></div>';if(ls.objectives&&ls.objectives.length){html+='<div class="section"><h3>'+t('objectives')+'</h3><ul>';for(var oi=0;oi<ls.objectives.length;oi++){html+='<li>'+ls.objectives[oi]+'</li>'}html+='</ul></div>'}if(ls.explanation){html+='<div class="section"><h3>'+t('explanation')+'</h3>';if(ls.explanation_ar)html+='<div class="ar-content"><p>'+ls.explanation_ar+'</p></div>';html+='<div class="en-content"><p>'+ls.explanation+'</p></div></div>'}if(ls.video_url){html+='<div class="section"><h3>'+t('videoLesson')+'</h3><a href="'+ls.video_url+'" target="_blank" rel="noopener" style="display:inline-block;padding:10px 20px;background:var(--danger,#e74c3c);color:#fff;border-radius:8px;text-decoration:none">'+t('watchVideo')+'</a></div>'}if(ls.vocabulary&&ls.vocabulary.length){html+='<div class="section"><h3>'+t('vocabulary')+'</h3><table class="vocab-table"><tr><th>'+t('word')+'</th><th>'+t('translation')+'</th></tr>';for(var vi=0;vi<ls.vocabulary.length;vi++){html+='<tr><td>'+(ls.vocabulary[vi].word||'')+'</td><td>'+(ls.vocabulary[vi].translation||'')+'</td></tr>'}html+='</table></div>'}html+='</div>';if(ls.level||ls.moduleTitle){html+='<p style="color:#888;font-size:13px;text-align:center;padding:10px">📂 '+(ls.level||'')+' | '+(ls.moduleTitle||'')+'</p>'}v.innerHTML=html}
// Append admin button to settings
var origShowSettings=showSettings;showSettings=function(){origShowSettings();var v=document.getElementById('settingsView');if(v){var btn=document.createElement('button');btn.className='check-btn';btn.textContent='🔧 لوحة المدرب';btn.style.cssText='margin-top:20px;width:100%;padding:12px;background:linear-gradient(135deg,#e74c3c,#c0392b);color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:16px';btn.onclick=function(){showAdminLogin()};v.appendChild(btn)}}

// ─── INIT ───
document.addEventListener('DOMContentLoaded',function(){initApp();initSync();if(ls('eng_dark')==='1'){document.body.classList.add('dark-mode');const b=document.getElementById('darkToggle');if(b)b.textContent='☀️';}var devBtn=document.getElementById('navDeveloper');if(devBtn){devBtn.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();showDeveloper();});}});
if('serviceWorker'in navigator){navigator.serviceWorker.getRegistrations().then(function(regs){regs.forEach(function(r){r.unregister()})}).then(function(){navigator.serviceWorker.register('sw.js?'+Date.now()).catch(function(e){console.warn('SW registration failed:',e)})});}
// ─── STREAK ───
function getStreak(){try{var d=JSON.parse(ls('eng_streak'));return d&&typeof d==='object'?d:{count:0,lastDate:''}}catch(e){return{count:0,lastDate:''}}}
function saveStreak(s){lss('eng_streak',JSON.stringify(s));}
function updateStreak(){var s=getStreak();var today=new Date();var dateStr=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();if(s.lastDate===dateStr)return;var yesterday=new Date(today);yesterday.setDate(yesterday.getDate()-1);var yesterdayStr=yesterday.getFullYear()+'-'+(yesterday.getMonth()+1)+'-'+yesterday.getDate();if(s.lastDate===yesterdayStr){s.count++}else{s.count=1}s.lastDate=dateStr;saveStreak(s);}

// ─── CONFETTI ───
function fireConfetti(){var c=document.getElementById('confettiContainer');if(!c){c=document.createElement('div');c.id='confettiContainer';c.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99999;overflow:hidden';document.body.appendChild(c)}var colors=['#e74c3c','#27ae60','#f1c40f','#3498db','#9b59b6','#e67e22'];for(var i=0;i<60;i++){(function(){var el=document.createElement('div');var color=colors[Math.floor(Math.random()*colors.length)];var left=Math.random()*100;var delay=Math.random()*2;var dur=2+Math.random()*2;var size=6+Math.random()*8;el.style.cssText='position:absolute;top:-20px;left:'+left+'%;width:'+size+'px;height:'+size+'px;background:'+color+';border-radius:'+(Math.random()>0.5?'50%':'2px')+';opacity:0;animation:confettiFall '+dur+'s ease-in '+delay+'s forwards';c.appendChild(el);setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el)},5000)})()}setTimeout(function(){if(c.parentNode)c.parentNode.removeChild(c)},6000);}

// ─── CERTIFICATE ───
function showCertificate(cid,li){var c=appData&&appData.curricula&&appData.curricula[cid];if(!c)return;var lvl=c.levels&&c.levels[li];if(!lvl)return;var p=getLevelProgress(cid,li);if(!p||!p.passed){toast(t('failMsg'));return;}var w=window.open('','_blank');var name=prompt(t('certText')+' '+(lvl.level_name||''),'');if(!name){w.close();return;}var date=new Date().toLocaleDateString(currentLang==='ar'?'ar-EG':'en-US');w.document.write('<!DOCTYPE html><html dir="'+LANG[currentLang].dir+'"><head><meta charset="UTF-8"><title>'+t('titleCert')+'</title><style>body{font-family:"Times New Roman",serif;text-align:center;padding:40px;margin:0;background:#f5f0e8}.certificate{max-width:700px;margin:0 auto;padding:50px;background:#fff;border:4px double #c9a96e;box-shadow:0 10px 30px rgba(0,0,0,0.1)}.cert-border{border:2px solid #c9a96e;padding:30px}h1{font-size:28px;color:#8b6914;margin-bottom:10px}.seal{font-size:60px;margin:20px 0}.date{color:#888;font-size:14px}.sign{font-size:18px;margin-top:30px}h2{font-size:22px;color:#333}p{font-size:16px;color:#555;line-height:1.8}@media print{body{background:#fff;padding:0}.certificate{box-shadow:none;border:3px double #c9a96e}}</style></head><body><div class="certificate"><div class="cert-border"><h1>'+t('titleCert')+'</h1><h2>'+(lvl.level_name||'')+'</h2><p>'+t('certText')+' <strong>'+t('levels')+'</strong></p><div class="seal">\ud83c\udf93</div><p>'+name+'</p><p>'+t('passMsg')+'</p><p class="date">'+date+'</p><div class="sign">_________________<br><small>'+t('aboutTitle')+'</small></div></div></div><br><button onclick="window.print()" style="padding:12px 30px;background:#8b6914;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:16px">'+t('printCert')+'</button></body></html>');w.document.close();}

// ─── STUDY PLAN ───
function showStudyPlan(){hideAllViews();var v=document.getElementById('planView');if(!v){v=document.createElement('div');v.id='planView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';var html='<h2>'+t('studyPlan')+'</h2>';var s=getStreak();html+='<div class="streak-bar" style="text-align:center;padding:15px;margin:10px 0;background:var(--card-bg,#f9f9f9);border-radius:8px"><span style="font-size:32px">'+t('streakTitle')+'</span><div style="font-size:48px;font-weight:bold;color:var(--accent,#27ae60)">'+s.count+'</div><div>'+t('streakDays')+'</div></div>';var found=null;if(appData&&appData.curricula){var curricula=appData.curricula;for(var ci=0;ci<curricula.length&&!found;ci++){var c=curricula[ci];if(!c.levels)continue;for(var li=0;li<c.levels.length&&!found;li++){var p=getLevelProgress(ci,li);if(p&&p.passed)continue;var lvl=c.levels[li];if(!lvl||!lvl.modules)continue;for(var mi=0;mi<lvl.modules.length&&!found;mi++){var m=lvl.modules[mi];if(!m.lessons)continue;for(var lsi=0;lsi<m.lessons.length&&!found;lsi++){var ls=m.lessons[lsi];var lid=ls.lesson_id||(lvl.level_name+'_'+mi+'_'+ls.lesson_title);found={lid:lid,title:ls.lesson_title,level:lvl.level_name||lvl.cefr_level||'',moduleTitle:m.module_title,curriculumIdx:ci,levelIdx:li,moduleIdx:mi,lessonIdx:lsi}}}}}}if(found){html+='<div class="next-lesson" style="padding:20px;margin:10px 0;background:var(--card-bg,#f9f9f9);border-radius:8px"><h3>'+t('studyNext')+'</h3><p><strong>'+found.level+'</strong> | '+found.moduleTitle+' | '+found.title+'</p><button class="check-btn" onclick="hideAllViews();switchCurriculum('+found.curriculumIdx+');showLesson('+found.levelIdx+','+found.moduleIdx+',\''+found.lid+'\')">'+t('startHere')+'</button></div>'}else{html+='<p>'+t('flashDone')+'</p>'}html+='<button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';v.innerHTML=html;}

// ─── VOCAB QUIZ ───
var vqData=[],vqIdx=0,vqCorrect=0,vqWrong=0,vqTotal=0;
function showVocabQuiz(){hideAllViews();var v=document.getElementById('vocabQuizView');if(!v){v=document.createElement('div');v.id='vocabQuizView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';vqData=[];vqIdx=0;vqCorrect=0;vqWrong=0;if(appData&&appData.curricula){appData.curricula.forEach(function(c){c.levels&&c.levels.forEach(function(l){l.modules&&l.modules.forEach(function(m){m.lessons&&m.lessons.forEach(function(ls){(ls.vocabulary||[]).forEach(function(w){var word=typeof w==='string'?w:w.word||'';var trans=typeof w==='string'?'':w.translation||w.meaning||'';if(word&&trans)vqData.push({word:word,trans:trans})})})})})})}vqTotal=vqData.length;if(!vqTotal){v.innerHTML='<h2>'+t('vqTitle')+'</h2><p>'+t('noVocab')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;}renderVQ();}
function renderVQ(){var v=document.getElementById('vocabQuizView');if(!v)return;if(vqIdx>=vqTotal){v.innerHTML='<h2>'+t('vqTitle')+'</h2><p>'+t('vqDone')+'</p><p>'+t('vqCorrect')+': '+vqCorrect+' | '+t('vqWrong')+': '+vqWrong+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;}var item=vqData[vqIdx];var options=[item.trans];// pick 3 random wrong translations
var pool=[];for(var i=0;i<vqTotal;i++){if(i!==vqIdx&&vqData[i].trans&&pool.length<20)pool.push(vqData[i].trans)}while(pool.length>0&&options.length<4){var ri=Math.floor(Math.random()*pool.length);var pick=pool.splice(ri,1)[0];if(options.indexOf(pick)<0)options.push(pick)}// shuffle
for(var si=options.length-1;si>0;si--){var sj=Math.floor(Math.random()*(si+1));var tmp=options[si];options[si]=options[sj];options[sj]=tmp}var qid='vq_'+vqIdx;v.innerHTML='<h2>'+t('vqTitle')+' ('+(vqIdx+1)+'/'+vqTotal+')</h2><div class="vq-card" style="text-align:center;padding:30px;margin:15px 0;background:var(--accent,#27ae60);color:#fff;border-radius:12px"><div class="vq-word" style="font-size:28px;font-weight:bold">'+item.word+'</div></div><div id="vqOptions" class="vq-options" style="max-width:350px;margin:0 auto">'+options.map(function(o,oi){return'<button class="vq-option" id="'+qid+'_'+oi+'" onclick="checkVQ('+vqIdx+','+oi+')" style="display:block;width:100%;padding:12px;margin:6px 0;border:2px solid var(--border,#ddd);border-radius:8px;background:var(--card-bg,#f9f9f9);cursor:pointer;font-size:16px;text-align:center">'+o+'</button>'}).join('')+'</div><div id="vqResult"></div>';}
function checkVQ(qi,oi){var item=vqData[qi];if(!item)return;var opts=document.getElementById('vqOptions');if(opts)opts.querySelectorAll('.vq-option').forEach(function(b){b.disabled=true;b.style.cursor='default'});var btns=opts?opts.querySelectorAll('.vq-option'):[];var correctIdx=-1;for(var i=0;i<btns.length;i++){if(btns[i].textContent===item.trans){correctIdx=i;break}}for(var i=0;i<btns.length;i++){if(i===correctIdx)btns[i].style.borderColor='green';else btns[i].style.borderColor='#ddd'}if(btns[oi]&&btns[oi].textContent===item.trans){vqCorrect++;document.getElementById('vqResult').innerHTML='<p style="color:green">'+t('vqCorrect')+'</p>'}else{vqWrong++;document.getElementById('vqResult').innerHTML='<p style="color:red">'+t('vqWrong')+': '+item.trans+'</p>'}setTimeout(function(){vqIdx++;renderVQ()},1200);}

// ─── PLACEMENT TEST TIMER ───
var ptTimerInterval=null;
function startPTTimer(seconds,displayId){var display=document.getElementById(displayId);if(!display)return;clearInterval(ptTimerInterval);ptTimerInterval=setInterval(function(){if(seconds<=0){clearInterval(ptTimerInterval);if(typeof submitPT==='function')submitPT(document.querySelectorAll('#ptQuestions .quiz-item').length);return}var m=Math.floor(seconds/60);var s=seconds%60;display.textContent=(m<10?'0':'')+m+':'+(s<10?'0':'')+s;seconds--},1000);}

// Update showPlacementTest to include timer
var origShowPT=showPlacementTest;
showPlacementTest=function(){origShowPT();var pt=placementTest;if(!pt)return;var limit=pt.time_limit_minutes||0;if(limit>0){var existing=document.getElementById('ptTimer');if(!existing){var timer=document.createElement('div');timer.id='ptTimer';timer.style.cssText='text-align:center;font-size:24px;font-weight:bold;color:var(--accent,#e74c3c);padding:10px';var heading=document.querySelector('#placementView h2');if(heading)heading.parentNode.insertBefore(timer,heading.nextSibling)}startPTTimer(limit*60,'ptTimer')}};

// ─── TABLET/SWIPE SUPPORT ───
var touchStartX=0,touchStartY=0;
document.addEventListener('touchstart',function(e){touchStartX=e.changedTouches[0].screenX;touchStartY=e.changedTouches[0].screenY});
document.addEventListener('touchend',function(e){var dx=e.changedTouches[0].screenX-touchStartX;var dy=e.changedTouches[0].screenY-touchStartY;if(Math.abs(dx)>80&&Math.abs(dx)>Math.abs(dy)*1.5){if(dx>0)hideAllViews();else{var v=document.getElementById('lessonView');if(v&&v.style.display==='block')hideAllViews()}}});

// ─── 1. WORD PRONUNCIATION (TTS) ───
function speakWord(word,lang){
  if(!('speechSynthesis' in window)){toast('❌ لا يدعم النطق');return;}
  window.speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(word);
  u.lang=lang||'en-US';
  u.rate=0.85;
  u.pitch=1;
  var voices=window.speechSynthesis.getVoices();
  var enVoice=voices.find(function(v){return v.lang.startsWith('en')});
  if(enVoice)u.voice=enVoice;
  window.speechSynthesis.speak(u);
}
function speakText(text,lang){speakWord(text,lang);}
function speakLesson(title,explanation){
  speakWord(title,'en-US');
  if(explanation)setTimeout(function(){speakWord(explanation,'en-US');},2000);
}
function addSpeakButtons(){
  document.querySelectorAll('.vocab-table td:first-child').forEach(function(td){
    if(td.querySelector('.speak-btn'))return;
    var btn=document.createElement('button');
    btn.className='speak-btn';
    btn.textContent='🔊';
    btn.title='نطق';
    btn.onclick=function(e){e.stopPropagation();speakWord(td.textContent.trim());};
    td.style.cursor='pointer';
    td.onclick=function(){speakWord(td.textContent.trim());};
    td.insertBefore(btn,td.firstChild);
  });
  document.querySelectorAll('.example p, .dialogue-line, .bilingual .en-content p').forEach(function(el){
    if(el.querySelector('.speak-btn'))return;
    var btn=document.createElement('button');
    btn.className='speak-btn';
    btn.textContent='🔊';
    btn.onclick=function(e){e.stopPropagation();speakWord(el.textContent.trim());};
    el.style.cursor='pointer';
    el.insertBefore(btn,el.firstChild);
  });
}
if('speechSynthesis' in window){
  speechSynthesis.onvoiceschanged=function(){};
}

// ─── 2. LESSON RATING (1-5 STARS) ───
function getLessonRatings(){try{return JSON.parse(ls('eng_ratings')||'{}')}catch(e){return{}}}
function saveLessonRatings(r){lss('eng_ratings',JSON.stringify(r));}
function getLessonRating(lid){var r=getLessonRatings();return r[lid]||0;}
function setLessonRating(lid,stars){
  var r=getLessonRatings();r[lid]=stars;saveLessonRatings(r);
  var el=document.getElementById('rating_'+lid);
  if(el)renderStars(el,lid,stars);
  toast('⭐ '+stars+'/5');
}
function renderStars(container,lid,current){
  var html='<div class="lesson-rating" style="display:inline-flex;gap:2px;margin:5px 0">';
  for(var i=1;i<=5;i++){
    html+='<span class="star-btn" onclick="setLessonRating(\''+lid+'\','+i+')" style="cursor:pointer;font-size:1.3em;color:'+(i<=current?'#f1c40f':'#ccc')+';transition:color .2s">'+(i<=current?'★':'☆')+'</span>';
  }
  html+='</div>';
  container.innerHTML=html;
}
function addRatingToLesson(lid){
  var current=getLessonRating(lid);
  return '<div id="rating_'+lid+'"></div>';
}

// ─── 3. DAILY REMINDER ───
function getReminderSettings(){try{return JSON.parse(ls('eng_reminder')||'{"enabled":false,"hour":20,"minute":0}')}catch(e){return{enabled:false,hour:20,minute:0}}}
function saveReminderSettings(s){lss('eng_reminder',JSON.stringify(s));}
function toggleReminder(){
  var s=getReminderSettings();
  s.enabled=!s.enabled;
  saveReminderSettings(s);
  if(s.enabled){
    if('Notification' in window && Notification.permission==='default'){
      Notification.requestPermission();
    }
    scheduleReminder();
    toast('🔔 التذكير مفعّل');
  }else{
    toast('🔕 التذكير معطّل');
  }
  showSettings();
}
function scheduleReminder(){
  var s=getReminderSettings();
  if(!s.enabled)return;
  var now=new Date();
  var target=new Date();
  target.setHours(s.hour,s.minute,0,0);
  if(target<=now)target.setDate(target.getDate()+1);
  var delay=target-now;
  setTimeout(function(){
    if(s.enabled && 'Notification' in window && Notification.permission==='granted'){
      new Notification('📚 استاذ ياسر ابراهيم',{body:'حان وقت الدراسة! لا تنسَ الدروس اليومية.',icon:'icon-192.png'});
    }
    scheduleReminder();
  },delay);
}

// ─── 4. DETAILED STATISTICS ───
function showDetailedStats(){
  hideAllViews();
  var v=document.getElementById('statsDetailedView');
  if(!v){v=document.createElement('div');v.id='statsDetailedView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var completed=getCompletedLessons();
  var streak=getStreak();
  var favs=getFavorites();
  var ratings=getLessonRatings();
  var html='<h2>📊 '+('إحصائيات مفصلة')+'</h2>';
  html+='<div class="stats-grid">';
  html+='<div class="stat-card"><div class="num">'+completed.length+'</div><div class="label">دروس مكتملة</div></div>';
  html+='<div class="stat-card"><div class="num">'+streak.count+'</div><div class="label">سلسلة الأيام</div></div>';
  html+='<div class="stat-card"><div class="num">'+favs.length+'</div><div class="label">دروس مفضلة</div></div>';
  html+='<div class="stat-card"><div class="num">'+Object.keys(ratings).length+'</div><div class="label">دروس مقيّمة</div></div>';
  html+='</div>';
  html+='<h3>📈 تقدم المستويات</h3>';
  html+='<div class="stats-levels">';
  if(appData&&appData.curricula){
    appData.curricula.forEach(function(c,ci){
      c.levels&&c.levels.forEach(function(l,li){
        var total=0,done=0;
        l.modules&&l.modules.forEach(function(m,mi){
          m.lessons&&m.lessons.forEach(function(ls){
            total++;
            var lid=ls.lesson_id||(l.level_name+'_'+mi+'_'+ls.lesson_title);
            if(isLessonComplete(lid))done++;
          });
        });
        var pct=total?Math.round(done/total*100):0;
        var p=getLevelProgress(ci,li);
        html+='<div class="stats-level"><span style="min-width:80px;font-weight:600">'+(l.level_name||l.cefr_level||'')+'</span>';
        html+='<div class="stats-bar"><div class="stats-fill" style="width:'+pct+'%"></div></div>';
        html+='<span class="stats-pct">'+pct+'%</span>';
        html+='<span style="font-size:.8em;color:var(--text-light)">'+done+'/'+total+'</span>';
        if(p.passed)html+=' <span style="color:var(--success)">✅</span>';
        html+='</div>';
      });
    });
  }
  html+='</div>';
  html+='<h3>⭐ تقييمات الدروس</h3>';
  var ratedKeys=Object.keys(ratings);
  if(ratedKeys.length===0){
    html+='<p style="color:var(--text-light)">لم تقيّم أي درس بعد</p>';
  }else{
    var totalStars=0;
    ratedKeys.forEach(function(k){totalStars+=ratings[k]});
    var avgStars=(totalStars/ratedKeys.length).toFixed(1);
    html+='<p>متوسط التقييم: <strong style="color:#f1c40f">'+avgStars+'/5</strong> ('+ratedKeys.length+' درس)</p>';
    html+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px">';
    ratedKeys.forEach(function(k){
      var stars=ratings[k];
      var starStr='';
      for(var i=0;i<5;i++)starStr+=i<stars?'★':'☆';
      html+='<span style="background:var(--surface);border:1px solid var(--border);padding:4px 10px;border-radius:15px;font-size:.85em">'+k.split('_').pop()+' <span style="color:#f1c40f">'+starStr+'</span></span>';
    });
    html+='</div>';
  }
  html+='<br><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';
  v.innerHTML=html;
}

// ─── 5. SHARE LESSONS ───
function shareLesson(lid,title){
  var url=location.origin+'?lesson='+encodeURIComponent(lid);
  var text='📚 '+title+'\n\nتعلم اللغة الإنجليزية مع استاذ ياسر ابراهيم\n'+url;
  if(navigator.share){
    navigator.share({title:'استاذ ياسر ابراهيم - '+title,text:text,url:url}).catch(function(){});
  }else if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(function(){
      toast('✅ تم نسخ رابط الدرس');
    }).catch(function(){toast('❌ فشل النسخ')});
  }else{
    var ta=document.createElement('textarea');
    ta.value=text;document.body.appendChild(ta);ta.select();
    document.execCommand('copy');document.body.removeChild(ta);
    toast('✅ تم نسخ رابط الدرس');
  }
}

// ─── 6. TEACHER MODE ───
function getTeacherMode(){return ls('eng_teacher_mode')==='1';}
function toggleTeacherMode(){
  var current=getTeacherMode();
  if(!current){
    var pin=prompt('🔐 أدخل رمز المدرب (الافتراضي: 1234):');
    if(pin!==(ls('eng_admin_pin')||'1234')){toast('❌ رمز خطأ');return;}
  }
  lss('eng_teacher_mode',current?'0':'1');
  toast(current?'🔒 وضع المعلم معطّل':'✅ وضع المعلم مفعّل');
  showSettings();
}
function addTeacherLesson(){
  hideAllViews();
  var v=document.getElementById('teacherLessonView');
  if(!v){v=document.createElement('div');v.id='teacherLessonView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var html='<h2>📝 إضافة درس جديد</h2>';
  html+='<div class="settings-group">';
  html+='<label>المنهج</label><select id="tchCurr" style="width:100%;padding:8px;margin:4px 0">';
  if(appData&&appData.curricula){appData.curricula.forEach(function(c,i){html+='<option value="'+i+'">'+c.name+'</option>'})}
  html+='</select>';
  html+='<label>المستوى</label><input id="tchLevel" value="A1" style="width:100%;padding:8px;margin:4px 0;border:1px solid var(--border);border-radius:6px">';
  html+='<label>الوحدة</label><input id="tchModule" placeholder="Module 1" style="width:100%;padding:8px;margin:4px 0;border:1px solid var(--border);border-radius:6px">';
  html+='<label>عنوان الدرس</label><input id="tchTitle" placeholder="Lesson Title" style="width:100%;padding:8px;margin:4px 0;border:1px solid var(--border);border-radius:6px">';
  html+='<label>رابط الفيديو (اختياري)</label><input id="tchVideo" placeholder="https://youtube.com/..." style="width:100%;padding:8px;margin:4px 0;border:1px solid var(--border);border-radius:6px">';
  html+='<label>الأهداف (كل هدف في سطر)</label><textarea id="tchObjectives" rows="3" placeholder="1. Learn vocabulary\n2. Practice grammar" style="width:100%;padding:8px;margin:4px 0;border:1px solid var(--border);border-radius:6px"></textarea>';
  html+='<label>الشرح بالإنجليزي</label><textarea id="tchExplanation" rows="4" placeholder="In this lesson..." style="width:100%;padding:8px;margin:4px 0;border:1px solid var(--border);border-radius:6px"></textarea>';
  html+='<label>الشرح بالعربي</label><textarea id="tchExplanationAr" rows="4" placeholder="في هذا الدرس..." style="width:100%;padding:8px;margin:4px 0;border:1px solid var(--border);border-radius:6px"></textarea>';
  html+='<label>المفردات (كلمة = ترجمة)</label><textarea id="tchVocab" rows="3" placeholder="hello = مرحبا\ngoodbye = وداعا" style="width:100%;padding:8px;margin:4px 0;border:1px solid var(--border);border-radius:6px"></textarea>';
  html+='<label>تمارين (سؤال = إجابة)</label><textarea id="tchExercises" rows="3" placeholder="What is your name? = My name is..." style="width:100%;padding:8px;margin:4px 0;border:1px solid var(--border);border-radius:6px"></textarea>';
  html+='<button class="check-btn" onclick="saveTeacherLesson()" style="margin-top:10px;font-size:1em;padding:10px 20px">💾 حفظ الدرس</button>';
  html+='</div>';
  html+='<h3>📋 الدروس المحفوظة</h3>';
  var lessons=getAdminLessons();
  if(lessons.length===0){html+='<p style="color:var(--text-light)">لا توجد دروس مضافة بعد</p>'}
  else{lessons.forEach(function(ls,i){
    html+='<div style="border:1px solid var(--border);border-radius:8px;padding:10px;margin:8px 0;display:flex;justify-content:space-between;align-items:center">';
    html+='<span><strong>'+(ls.lesson_title||'')+'</strong> <small style="color:var(--text-light)">'+(ls.level||'')+'</small></span>';
    html+='<button class="check-btn" style="background:#e74c3c" onclick="deleteTeacherLesson('+i+')">🗑</button>';
    html+='</div>';
  })}
  html+='<br><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';
  v.innerHTML=html;
}
function saveTeacherLesson(){
  var curr=document.getElementById('tchCurr');
  var level=document.getElementById('tchLevel');
  var mod=document.getElementById('tchModule');
  var title=document.getElementById('tchTitle');
  var video=document.getElementById('tchVideo');
  var obj=document.getElementById('tchObjectives');
  var expl=document.getElementById('tchExplanation');
  var explAr=document.getElementById('tchExplanationAr');
  var voc=document.getElementById('tchVocab');
  var exer=document.getElementById('tchExercises');
  if(!title||!title.value.trim()){toast('❌ أدخل عنوان الدرس');return;}
  var objectives=[];
  if(obj&&obj.value.trim()){objectives=obj.value.split('\n').map(function(s){return s.trim()}).filter(function(s){return s})}
  var vocabulary=[];
  if(voc&&voc.value.trim()){voc.value.split('\n').forEach(function(line){var parts=line.split('=').map(function(s){return s.trim()});if(parts.length===2&&parts[0]&&parts[1]){vocabulary.push({word:parts[0],translation:parts[1]})}})}
  var exercises=[];
  if(exer&&exer.value.trim()){exer.value.split('\n').forEach(function(line){var parts=line.split('=').map(function(s){return s.trim()});if(parts.length===2&&parts[0]&&parts[1]){exercises.push({question:parts[0],answer:parts[1]})}})}
  var lesson={
    curriculumIdx:curr?parseInt(curr.value):0,
    level:level?level.value.trim():'A1',
    moduleTitle:mod?mod.value.trim():'',
    lesson_title:title.value.trim(),
    video_url:video?video.value.trim():'',
    objectives:objectives,
    explanation:expl?expl.value.trim():'',
    explanation_ar:explAr?explAr.value.trim():'',
    vocabulary:vocabulary,
    quiz:exercises,
    lesson_id:'teacher_'+Date.now(),
    dateAdded:Date.now(),
    source:'teacher'
  };
  var lessons=getAdminLessons();
  lessons.push(lesson);
  saveAdminLessons(lessons);
  toast('✅ تم حفظ الدرس');
  addTeacherLesson();
}
function deleteTeacherLesson(idx){
  if(!confirm('🗑 حذف هذا الدرس؟'))return;
  var lessons=getAdminLessons();
  lessons.splice(idx,1);
  saveAdminLessons(lessons);
  toast('✅ تم الحذف');
  addTeacherLesson();
}

// ─── INJECT TEACHER LESSONS INTO APP ───
function getTeacherLessons(){return getAdminLessons().filter(function(ls){return ls.source==='teacher'})}
function getTeacherCurriculum(){
  var lessons=getTeacherLessons();
  if(lessons.length===0)return null;
  var levels={};
  lessons.forEach(function(ls){
    var key=ls.level||'A1';
    if(!levels[key])levels[key]={level_name:key,modules:[]};
    var mod=levels[key].modules.find(function(m){return m.module_title===ls.moduleTitle});
    if(!mod){mod={module_title:ls.moduleTitle||'Lessons',lessons:[]};levels[key].modules.push(mod)}
    mod.lessons.push(ls);
  });
  return{levels:Object.values(levels)};
}
function mergeTeacherData(){
  if(!appData)return;
  var tc=getTeacherCurriculum();
  if(!tc)return;
  appData.curricula.push({
    id:'teacher_lessons',
    name:'📚 دروس المعلم',
    name_en:'Teacher Lessons',
    levels:tc.levels
  });
  flatLessons=[];
  appData.curricula.forEach(function(c,ci){
    c.levels&&c.levels.forEach(function(l,li){
      l.modules&&l.modules.forEach(function(m){
        m.lessons&&m.lessons.forEach(function(ls){
          flatLessons.push({lesson_id:ls.lesson_id||ls.lesson_title,lesson_title:ls.lesson_title,curriculumIdx:ci,levelIdx:li})
        })
      })
    })
  });
  renderCurriculumSelector();
  switchCurriculum(appData.curricula.length-1);
}
function injectTeacherLessons(){
  var origInit=initApp;
  initApp=function(){
    origInit();
    var lessons=getTeacherLessons();
    if(lessons.length>0&&appData){
      setTimeout(mergeTeacherData,500);
    }
  };
}

// ─── PATCH renderLesson TO ADD FEATURES ───
var origRenderLesson=renderLesson;
renderLesson=function(ls,lid){
  origRenderLesson(ls,lid);
  setTimeout(function(){
    addSpeakButtons();
    var lv=document.getElementById('lessonView');
    if(!lv)return;
    var header=lv.querySelector('.lesson-header');
    if(header){
      var ratingDiv=document.createElement('div');
      ratingDiv.id='rating_'+lid;
      ratingDiv.style.cssText='margin:5px 0';
      header.appendChild(ratingDiv);
      renderStars(ratingDiv,lid,getLessonRating(lid));
      var shareBtn=document.createElement('button');
      shareBtn.className='tool-btn';
      shareBtn.textContent='📤 مشاركة';
      shareBtn.onclick=function(){shareLesson(lid,ls.lesson_title)};
      header.appendChild(shareBtn);
      var speakBtn=document.createElement('button');
      speakBtn.className='tool-btn';
      speakBtn.textContent='🔊 نطق الدرس';
      speakBtn.onclick=function(){speakLesson(ls.lesson_title,ls.explanation)};
      header.appendChild(speakBtn);
    }
  },200);
};

// ─── PATCH showWelcome TO SHOW STUDY PLAN + STATS ───
var origShowWelcome=showWelcome;
showWelcome=function(){
  origShowWelcome();
  var w=document.getElementById('welcomeContent');
  if(!w)return;
  var s=getStreak();
  var completed=getCompletedLessons();
  var html=w.innerHTML;
  if(s.count>0){
    html='<div class="streak-bar"><span class="streak-icon">🔥</span><span class="streak-info">'+t('streakTitle')+': <strong>'+s.count+' '+t('streakDays')+'</strong></span></div>'+html;
  }
  html+='<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:15px">';
  html+='<button class="check-btn" onclick="showDetailedStats()">📊 إحصائيات مفصلة</button>';
  html+='<button class="check-btn" onclick="showStudyPlan()">📅 خطة الدراسة</button>';
  html+='<button class="check-btn" onclick="showVocabQuiz()">🎯 اختبار المفردات</button>';
  html+='<button class="check-btn" onclick="toggleReminder()">🔔 التذكير اليومي</button>';
  if(getTeacherMode()){
    html+='<button class="check-btn" style="background:#9b59b6" onclick="addTeacherLesson()">📝 إضافة درس</button>';
  }
  html+='</div>';
  w.innerHTML=html;
};

// ─── PATCH showSettings TO ADD REMINDER + TEACHER ───
var origShowSettings=showSettings;
showSettings=function(){
  origShowSettings();
  var v=document.getElementById('settingsView');
  if(!v)return;
  var s=getReminderSettings();
  var html=v.innerHTML;
  html+='<div class="settings-group">';
  html+='<h3>🔔 التذكير اليومي</h3>';
  html+='<p style="color:var(--text-light);font-size:.9em;margin-bottom:8px">يُرسل إشعاراً يومياً لتذكيرك بالدراسة</p>';
  html+='<div style="display:flex;align-items:center;gap:10px">';
  html+='<button class="day-btn '+(s.enabled?'active':'')+'" onclick="toggleReminder()">'+(s.enabled?'🔔 مفعّل':'🔕 معطّل')+'</button>';
  if(s.enabled){
    html+='<input type="time" id="reminderTime" value="'+(s.hour<10?'0':'')+s.hour+':'+(s.minute<10?'0':'')+s.minute+'" onchange="updateReminderTime(this.value)" style="padding:6px;border:1px solid var(--border);border-radius:6px">';
  }
  html+='</div></div>';
  html+='<div class="settings-group">';
  html+='<h3>👨‍🏫 وضع المعلم</h3>';
  html+='<p style="color:var(--text-light);font-size:.9em;margin-bottom:8px">يُمكّنك من إضافة دروس جديدة</p>';
  html+='<button class="day-btn '+(getTeacherMode()?'active':'')+'" onclick="toggleTeacherMode()">'+(getTeacherMode()?'✅ مفعّل':'🔒 معطّل')+'</button>';
  html+='</div>';
  v.innerHTML=html;
};
function updateReminderTime(val){
  var parts=val.split(':');
  var s=getReminderSettings();
  s.hour=parseInt(parts[0]);s.minute=parseInt(parts[1]);
  saveReminderSettings(s);
  if(s.enabled)scheduleReminder();
  toast('⏰ تم تحديث الوقت');
}

// ═══════════════════════════════════════════
// ═══ KIDS ZONE - قسم أطفال ═══
// ═══════════════════════════════════════════

var KIDS_DATA={
  categories:[
    {id:'animals',emoji:'🐾',nameAr:'الحيوانات',nameEn:'Animals',color:'#e74c3c',words:[
      {en:'Cat',ar:'قطة',emoji:'🐱',sound:'Meow!'},
      {en:'Dog',ar:'كلب',emoji:'🐶',sound:'Woof!'},
      {en:'Bird',ar:'طائر',emoji:'🐦',sound:'Tweet!'},
      {en:'Fish',ar:'سمكة',emoji:'🐟',sound:'Splash!'},
      {en:'Rabbit',ar:'أرنب',emoji:'🐰',sound:''},
      {en:'Horse',ar:'حصان',emoji:'🐴',sound:'Neigh!'},
      {en:'Cow',ar:'بقرة',emoji:'🐮',sound:'Moo!'},
      {en:'Lion',ar:'أسد',emoji:'🦁',sound:'Roar!'},
      {en:'Elephant',ar:'فيل',emoji:'🐘',sound:'Trumpet!'},
      {en:'Monkey',ar:'قرد',emoji:'🐵',sound:'Ooh ooh!'},
      {en:'Bear',ar:'دب',emoji:'🐻',sound:'Grr!'},
      {en:'Turtle',ar:'سلحفاة',emoji:'🐢',sound:''},
      {en:'Duck',ar:'بطة',emoji:'🦆',sound:'Quack!'},
      {en:'Frog',ar:'ضفدع',emoji:'🐸',sound:'Ribbit!'},
      {en:'Butterfly',ar:'فراشة',emoji:'🦋',sound:''}
    ]},
    {id:'colors',emoji:'🎨',nameAr:'الألوان',nameEn:'Colors',color:'#3498db',words:[
      {en:'Red',ar:'أحمر',emoji:'🔴',colorHex:'#e74c3c'},
      {en:'Blue',ar:'أزرق',emoji:'🔵',colorHex:'#3498db'},
      {en:'Green',ar:'أخضر',emoji:'🟢',colorHex:'#27ae60'},
      {en:'Yellow',ar:'أصفر',emoji:'🟡',colorHex:'#f1c40f'},
      {en:'Orange',ar:'برتقالي',emoji:'🟠',colorHex:'#e67e22'},
      {en:'Purple',ar:'بنفسجي',emoji:'🟣',colorHex:'#9b59b6'},
      {en:'Pink',ar:'وردي',emoji:'💗',colorHex:'#e91e63'},
      {en:'Black',ar:'أسود',emoji:'⚫',colorHex:'#2c3e50'},
      {en:'White',ar:'أبيض',emoji:'⚪',colorHex:'#ecf0f1'},
      {en:'Brown',ar:'بني',emoji:'🟤',colorHex:'#8d6e63'}
    ]},
    {id:'numbers',emoji:'🔢',nameAr:'الأرقام',nameEn:'Numbers',color:'#27ae60',words:[
      {en:'One',ar:'واحد',emoji:'1️⃣',num:1},
      {en:'Two',ar:'اثنان',emoji:'2️⃣',num:2},
      {en:'Three',ar:'ثلاثة',emoji:'3️⃣',num:3},
      {en:'Four',ar:'أربعة',emoji:'4️⃣',num:4},
      {en:'Five',ar:'خمسة',emoji:'5️⃣',num:5},
      {en:'Six',ar:'ستة',emoji:'6️⃣',num:6},
      {en:'Seven',ar:'سبعة',emoji:'7️⃣',num:7},
      {en:'Eight',ar:'ثمانية',emoji:'8️⃣',num:8},
      {en:'Nine',ar:'تسعة',emoji:'9️⃣',num:9},
      {en:'Ten',ar:'عشرة',emoji:'🔟',num:10}
    ]},
    {id:'fruits',emoji:'🍎',nameAr:'الفواكه',nameEn:'Fruits',color:'#e67e22',words:[
      {en:'Apple',ar:'تفاحة',emoji:'🍎'},
      {en:'Banana',ar:'موزة',emoji:'🍌'},
      {en:'Orange',ar:'برتقالة',emoji:'🍊'},
      {en:'Grape',ar:'عنب',emoji:'🍇'},
      {en:'Watermelon',ar:'بطيخ',emoji:'🍉'},
      {en:'Strawberry',ar:'فراولة',emoji:'🍓'},
      {en:'Mango',ar:'مانجو',emoji:'🥭'},
      {en:'Pineapple',ar:'أناناس',emoji:'🍍'},
      {en:'Peach',ar:'خوخ',emoji:'🍑'},
      {en:'Cherry',ar:'كرز',emoji:'🍒'}
    ]},
    {id:'family',emoji:'👨‍👩‍👧‍👦',nameAr:'الأسرة',nameEn:'Family',color:'#9b59b6',words:[
      {en:'Mother',ar:'أم',emoji:'👩'},
      {en:'Father',ar:'أب',emoji:'👨'},
      {en:'Sister',ar:'أخت',emoji:'👧'},
      {en:'Brother',ar:'أخ',emoji:'👦'},
      {en:'Grandmother',ar:'جدة',emoji:'👵'},
      {en:'Grandfather',ar:'جد',emoji:'👴'},
      {en:'Baby',ar:'طفل',emoji:'👶'},
      {en:'Family',ar:'عائلة',emoji:'👨‍👩‍👧‍👦'}
    ]},
    {id:'body',emoji:'🖐️',nameAr:'الجسم',nameEn:'Body',color:'#1abc9c',words:[
      {en:'Head',ar:'رأس',emoji:'🗣️'},
      {en:'Eye',ar:'عين',emoji:'👁️'},
      {en:'Ear',ar:'أذن',emoji:'👂'},
      {en:'Nose',ar:'أنف',emoji:'👃'},
      {en:'Mouth',ar:'فم',emoji:'👄'},
      {en:'Hand',ar:'يد',emoji:'✋'},
      {en:'Foot',ar:'قدم',emoji:'🦶'},
      {en:'Arm',ar:'ذراع',emoji:'💪'},
      {en:'Leg',ar:'ساق',emoji:'🦵'},
      {en:'Heart',ar:'قلب',emoji:'❤️'}
    ]},
    {id:'food',emoji:'🍕',nameAr:'الطعام',nameEn:'Food',color:'#f39c12',words:[
      {en:'Bread',ar:'خبز',emoji:'🍞'},
      {en:'Milk',ar:'حليب',emoji:'🥛'},
      {en:'Egg',ar:'بيضة',emoji:'🥚'},
      {en:'Cheese',ar:'جبنة',emoji:'🧀'},
      {en:'Rice',ar:'أرز',emoji:'🍚'},
      {en:'Cake',ar:'كعكة',emoji:'🎂'},
      {en:'Candy',ar:'حلوى',emoji:'🍬'},
      {en:'Ice cream',ar:'آيس كريم',emoji:'🍦'}
    ]},
    {id:'nature',emoji:'🌳',nameAr:'الطبيعة',nameEn:'Nature',color:'#2ecc71',words:[
      {en:'Sun',ar:'شمس',emoji:'☀️'},
      {en:'Moon',ar:'قمر',emoji:'🌙'},
      {en:'Star',ar:'نجمة',emoji:'⭐'},
      {en:'Cloud',ar:'سحابة',emoji:'☁️'},
      {en:'Rain',ar:'مطر',emoji:'🌧️'},
      {en:'Tree',ar:'شجرة',emoji:'🌳'},
      {en:'Flower',ar:'زهرة',emoji:'🌸'},
      {en:'Sea',ar:'بحر',emoji:'🌊'},
      {en:'Mountain',ar:'جبل',emoji:'⛰️'},
      {en:'Snow',ar:'ثلج',emoji:'❄️'}
    ]}
  ]
};

var kidsState={currentCategory:null,wordsLearned:{},quizScore:0,gameMode:null};

function getKidsProgress(){try{return JSON.parse(ls('kids_progress')||'{}')}catch(e){return{}}}
function saveKidsProgress(p){lss('kids_progress',JSON.stringify(p));}
function isKidsWordLearned(catId,wordIdx){var p=getKidsProgress();return p[catId]&&p[catId][wordIdx];}
function markKidsWordLearned(catId,wordIdx){var p=getKidsProgress();if(!p[catId])p[catId]={};p[catId][wordIdx]=true;saveKidsProgress(p);}
function getKidsCatProgress(catId){var p=getKidsProgress();var cat=KIDS_DATA.categories.find(function(c){return c.id===catId});if(!cat)return 0;var learned=0;cat.words.forEach(function(w,i){if(p[catId]&&p[catId][i])learned++});return Math.round(learned/cat.words.length*100);}

// ─── MAIN KIDS PAGE ───
function showKidsZone(){
  hideAllViews();
  var v=document.getElementById('kidsView');
  if(!v){v=document.createElement('div');v.id='kidsView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var totalWords=0,totalLearned=0;
  KIDS_DATA.categories.forEach(function(cat){
    totalWords+=cat.words.length;
    var learned=0;
    cat.words.forEach(function(w,i){if(isKidsWordLearned(cat.id,i))learned++});
    totalLearned+=learned;
  });
  var overallPct=totalWords?Math.round(totalLearned/totalWords*100):0;
  var html='<div class="kids-zone">';
  html+='<div class="kids-header">';
  html+='<div class="kids-mascot">🧸</div>';
  html+='<h2>🌟 عالم الأطفال 🌟</h2>';
  html+='<p>تعلم الإنجليزية بالمرح!</p>';
  html+='<div class="kids-progress-main">';
  html+='<div class="kids-progress-bar"><div class="kids-progress-fill" style="width:'+overallPct+'%"></div></div>';
  html+='<span>'+totalLearned+'/'+totalWords+' كلمة</span>';
  html+='</div></div>';
  html+='<div class="kids-categories">';
  KIDS_DATA.categories.forEach(function(cat){
    var pct=getKidsCatProgress(cat.id);
    html+='<div class="kids-cat-card" style="border-left:5px solid '+cat.color+'" onclick="showKidsCategory(\''+cat.id+'\')">';
    html+='<div class="kids-cat-emoji">'+cat.emoji+'</div>';
    html+='<div class="kids-cat-info">';
    html+='<h3>'+cat.nameAr+'</h3>';
    html+='<p>'+cat.nameEn+'</p>';
    html+='<div class="kids-cat-bar"><div class="kids-cat-fill" style="width:'+pct+'%;background:'+cat.color+'"></div></div>';
    html+='<span>'+pct+'%</span>';
    html+='</div></div>';
  });
  html+='</div>';
  html+='<div class="kids-games">';
  html+='<h3>🎮 ألعاب</h3>';
  html+='<div class="kids-game-cards">';
  html+='<div class="kids-game-card" onclick="startKidsGame(\'match\')" style="background:linear-gradient(135deg,#e74c3c,#c0392b)"><span class="kids-game-icon">🎯</span><span>مطابقة</span></div>';
  html+='<div class="kids-game-card" onclick="startKidsGame(\'quiz\')" style="background:linear-gradient(135deg,#3498db,#2980b9)"><span class="kids-game-icon">❓</span><span>اختبار</span></div>';
  html+='<div class="kids-game-card" onclick="startKidsGame(\'memory\')" style="background:linear-gradient(135deg,#27ae60,#219a52)"><span class="kids-game-icon">🧠</span><span>ذاكرة</span></div>';
  html+='<div class="kids-game-card" onclick="startKidsGame(\'draw\')" style="background:linear-gradient(135deg,#9b59b6,#8e44ad)"><span class="kids-game-icon">🎨</span><span>تلوين</span></div>';
  html+='</div></div>';
  html+='<button class="back-btn" onclick="hideAllViews();showWelcome()" style="margin-top:15px">'+t('back')+'</button>';
  html+='</div>';
  v.innerHTML=html;
}

// ─── KIDS CATEGORY VIEW ───
function showKidsCategory(catId){
  var cat=KIDS_DATA.categories.find(function(c){return c.id===catId});
  if(!cat)return;
  kidsState.currentCategory=catId;
  hideAllViews();
  var v=document.getElementById('kidsCatView');
  if(!v){v=document.createElement('div');v.id='kidsCatView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var html='<div class="kids-zone">';
  html+='<div class="kids-header" style="background:linear-gradient(135deg,'+cat.color+','+cat.color+'dd)">';
  html+='<h2>'+cat.emoji+' '+cat.nameAr+'</h2>';
  html+='<p>'+cat.nameEn+'</p>';
  html+='</div>';
  html+='<div class="kids-words-grid">';
  cat.words.forEach(function(w,i){
    var learned=isKidsWordLearned(catId,i);
    html+='<div class="kids-word-card'+(learned?' learned':'')+'" onclick="showKidsWord(\''+catId+'\',\''+w.en+'\',\''+w.ar+'\',\''+w.emoji+'\')">';
    html+='<div class="kids-word-emoji">'+w.emoji+'</div>';
    html+='<div class="kids-word-en">'+w.en+'</div>';
    html+='<div class="kids-word-ar">'+w.ar+'</div>';
    if(learned)html+='<div class="kids-word-check">✅</div>';
    html+='</div>';
  });
  html+='</div>';
  html+='<button class="back-btn" onclick="showKidsZone()" style="margin-top:15px">'+t('back')+'</button>';
  html+='</div>';
  v.innerHTML=html;
}

// ─── KIDS WORD POPUP ───
function showKidsWord(catId,en,ar,emoji){
  var overlay=document.createElement('div');
  overlay.className='kids-overlay';
  overlay.onclick=function(e){if(e.target===overlay)overlay.remove()};
  var card=document.createElement('div');
  card.className='kids-word-popup';
  card.innerHTML='<div class="kids-word-popup-emoji">'+emoji+'</div>'+
    '<h2 class="kids-word-popup-en">'+en+'</h2>'+
    '<p class="kids-word-popup-ar">'+ar+'</p>'+
    '<div class="kids-word-popup-actions">'+
    '<button class="kids-speak-btn" onclick="speakWord(\''+en+'\')">🔊 اسمع</button>'+
    '<button class="kids-learn-btn" onclick="markKidsWordLearned(\''+catId+'\',getKidsWordIdx(\''+catId+'\',\''+en+'\'));this.textContent=\'✅ تعلمت!\';this.disabled=true">📝 تعلمت</button>'+
    '</div>'+
    '<button class="kids-close-btn" onclick="this.closest(\'.kids-overlay\').remove()">✖</button>';
  overlay.appendChild(card);
  document.body.appendChild(overlay);
  speakWord(en);
}
function getKidsWordIdx(catId,en){
  var cat=KIDS_DATA.categories.find(function(c){return c.id===catId});
  if(!cat)return 0;
  var idx=cat.words.findIndex(function(w){return w.en===en});
  return idx>=0?idx:0;
}

// ─── KIDS MATCHING GAME ───
function startKidsGame(mode){
  kidsState.gameMode=mode;
  if(mode==='match')startMatchGame();
  else if(mode==='quiz')startKidsQuiz();
  else if(mode==='memory')startMemoryGame();
  else if(mode==='draw')startColoringGame();
}
function startMatchGame(){
  var words=[];
  KIDS_DATA.categories.forEach(function(cat){
    cat.words.slice(0,4).forEach(function(w){words.push(w)});
  });
  words=shuffleArray(words).slice(0,6);
  var pairs=words.map(function(w){return{en:w.en,ar:w.ar,emoji:w.emoji}});
  var shuffledAr=shuffleArray(pairs.map(function(p){return{text:p.ar,en:p.en}}));
  var shuffledEn=shuffleArray(pairs.map(function(p){return{text:p.en,ar:p.ar}}));
  hideAllViews();
  var v=document.getElementById('kidsGameView');
  if(!v){v=document.createElement('div');v.id='kidsGameView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var html='<div class="kids-zone">';
  html+='<h2>🎯 لعبة المطابقة</h2>';
  html+='<p>اضغط على الكلمة الإنجليزية ثم العربية المطابقة</p>';
  html+='<div class="kids-match-area">';
  html+='<div class="kids-match-col">';
  shuffledEn.forEach(function(item,i){
    html+='<div class="kids-match-en" id="men_'+i+'" data-en="'+item.en+'" onclick="selectMatchItem(this,\'en\')">'+item.text+'</div>';
  });
  html+='</div>';
  html+='<div class="kids-match-col">';
  shuffledAr.forEach(function(item,i){
    html+='<div class="kids-match-ar" id="mar_'+i+'" data-en="'+item.en+'" onclick="selectMatchItem(this,\'ar\')">'+item.text+'</div>';
  });
  html+='</div></div>';
  html+='<div id="matchResult" style="text-align:center;margin-top:15px;font-size:1.2em"></div>';
  html+='<button class="back-btn" onclick="showKidsZone()" style="margin-top:15px">'+t('back')+'</button>';
  html+='</div>';
  v.innerHTML=html;
  v._matchPairs=pairs;v._matchSelected=null;v._matchCorrect=0;
}
function selectMatchItem(el,type){
  if(el.classList.contains('matched')||el.classList.contains('wrong'))return;
  var v=document.getElementById('kidsGameView');
  if(!v)return;
  var pairs=v._matchPairs;
  if(!v._matchSelected){
    v._matchSelected={el:el,type:type};
    el.style.transform='scale(1.1)';el.style.boxShadow='0 4px 15px rgba(0,0,0,.3)';
  }else{
    var prev=v._matchSelected;
    if(prev.type===type){
      prev.el.style.transform='';prev.el.style.boxShadow='';
      v._matchSelected={el:el,type:type};
      el.style.transform='scale(1.1)';el.style.boxShadow='0 4px 15px rgba(0,0,0,.3)';
      return;
    }
    var enWord=type==='en'?el.dataset.en:prev.el.dataset.en;
    var isCorrect=pairs.some(function(p){return p.en===enWord});
    if(isCorrect){
      el.classList.add('matched');prev.el.classList.add('matched');
      el.style.transform='';el.style.boxShadow='';prev.el.style.transform='';prev.el.style.boxShadow='';
      v._matchCorrect++;
      speakWord(enWord);
      var res=document.getElementById('matchResult');
      if(res)res.innerHTML='✅ أحسنت! '+v._matchCorrect+'/'+pairs.length;
      if(v._matchCorrect>=pairs.length){
        if(res)res.innerHTML='🎉 أحسنت! فزت!';
        fireConfetti();
      }
    }else{
      el.classList.add('wrong');prev.el.classList.add('wrong');
      el.style.transform='';el.style.boxShadow='';prev.el.style.transform='';prev.el.style.boxShadow='';
      setTimeout(function(){el.classList.remove('wrong');prev.el.classList.remove('wrong')},800);
    }
    v._matchSelected=null;
  }
}

// ─── KIDS QUIZ ───
function startKidsQuiz(){
  var words=[];
  KIDS_DATA.categories.forEach(function(cat){
    cat.words.forEach(function(w){words.push(w)});
  });
  words=shuffleArray(words).slice(0,10);
  var questions=words.map(function(w){
    var others=shuffleArray(KIDS_DATA.categories.reduce(function(a,c){return a.concat(c.words)},[]).filter(function(x){return x.en!==w.en})).slice(0,3);
    var opts=shuffleArray([w].concat(others));
    return{word:w,options:opts,correctIdx:opts.indexOf(w)};
  });
  hideAllViews();
  var v=document.getElementById('kidsGameView');
  if(!v){v=document.createElement('div');v.id='kidsGameView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var html='<div class="kids-zone">';
  html+='<h2>❓ اختبار سريع</h2>';
  html+='<div id="kidsQuizContainer">';
  html+='<div class="kids-quiz-progress">0/'+questions.length+'</div>';
  renderKidsQuizQuestion(0,questions,0);
  html+='</div>';
  html+='<button class="back-btn" onclick="showKidsZone()" style="margin-top:15px">'+t('back')+'</button>';
  html+='</div>';
  v.innerHTML=html;
  v._quizQuestions=questions;v._quizIdx=0;v._quizCorrect=0;
}
function renderKidsQuizQuestion(idx,questions,correct){
  if(idx>=questions.length){
    var pct=Math.round(correct/questions.length*100);
    var emoji=pct>=80?'🎉':pct>=60?'👍':'💪';
    document.getElementById('kidsQuizContainer').innerHTML='<div class="kids-quiz-result">'+emoji+'<h2>'+correct+'/'+questions.length+'</h2><p>'+pct+'% '+('صحيح')+'</p></div>';
    if(pct>=80)fireConfetti();
    return;
  }
  var q=questions[idx];
  var container=document.getElementById('kidsQuizContainer');
  if(!container)return;
  var html='<div class="kids-quiz-card">';
  html+='<div class="kids-quiz-emoji">'+q.word.emoji+'</div>';
  html+='<h3>ما معنى '+q.word.en+'؟</h3>';
  html+='<div class="kids-quiz-options">';
  q.options.forEach(function(opt,i){
    html+='<button class="kids-quiz-opt" onclick="kidsQuizAnswer(this,'+idx+','+i+','+q.correctIdx+','+questions.length+','+correct+')">'+opt.emoji+' '+opt.ar+'</button>';
  });
  html+='</div></div>';
  container.innerHTML=html;
}
function kidsQuizAnswer(el,qIdx,optIdx,correctIdx,total,correct){
  var container=document.getElementById('kidsQuizContainer');
  if(!container)return;
  var opts=container.querySelectorAll('.kids-quiz-opt');
  opts.forEach(function(o){o.onclick=null});
  if(optIdx===correctIdx){
    el.classList.add('correct');
    speakWord(KIDS_DATA.categories.reduce(function(a,c){return a.concat(c.words)},[]).find(function(w){return w===container._currentWord})?.en||'');
    correct++;
  }else{
    el.classList.add('wrong');
    opts[correctIdx].classList.add('correct');
  }
  setTimeout(function(){
    renderKidsQuizQuestion(qIdx+1,container._questions||[],correct);
  },1000);
}

// ─── KIDS MEMORY GAME ───
function startMemoryGame(){
  var words=[];
  KIDS_DATA.categories.forEach(function(cat){
    cat.words.slice(0,4).forEach(function(w){words.push(w)});
  });
  words=shuffleArray(words).slice(0,6);
  var cards=[];
  words.forEach(function(w){
    cards.push({type:'emoji',content:w.emoji,en:w.en});
    cards.push({type:'word',content:w.en,en:w.en});
  });
  cards=shuffleArray(cards);
  hideAllViews();
  var v=document.getElementById('kidsGameView');
  if(!v){v=document.createElement('div');v.id='kidsGameView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var html='<div class="kids-zone">';
  html+='<h2>🧠 لعبة الذاكرة</h2>';
  html+='<p>افتح بطاقتين ومطابقتهما!</p>';
  html+='<div class="kids-memory-grid">';
  cards.forEach(function(c,i){
    html+='<div class="kids-memory-card" data-en="'+c.en+'" data-type="'+c.type+'" onclick="flipMemoryCard(this)">';
    html+='<div class="kids-memory-front">❓</div>';
    html+='<div class="kids-memory-back">'+c.content+'</div>';
    html+='</div>';
  });
  html+='</div>';
  html+='<div id="memoryResult" style="text-align:center;margin-top:15px;font-size:1.2em"></div>';
  html+='<button class="back-btn" onclick="showKidsZone()" style="margin-top:15px">'+t('back')+'</button>';
  html+='</div>';
  v.innerHTML=html;
  v._memoryFlipped=[];v._memoryMatched=0;v._memoryTotal=words.length;
}
function flipMemoryCard(el){
  if(el.classList.contains('flipped')||el.classList.contains('matched'))return;
  el.classList.add('flipped');
  var v=document.getElementById('kidsGameView');
  if(!v)return;
  if(!v._memoryFlipped)v._memoryFlipped=[];
  v._memoryFlipped.push(el);
  if(v._memoryFlipped.length===2){
    var a=v._memoryFlipped[0],b=v._memoryFlipped[1];
    if(a.dataset.en===b.dataset.en){
      a.classList.add('matched');b.classList.add('matched');
      v._memoryMatched++;
      speakWord(a.dataset.en);
      var res=document.getElementById('memoryResult');
      if(res)res.innerHTML='✅ '+v._memoryMatched+'/'+v._memoryTotal;
      if(v._memoryMatched>=v._memoryTotal){
        if(res)res.innerHTML='🎉 أحسنت!';
        fireConfetti();
      }
    }else{
      setTimeout(function(){a.classList.remove('flipped');b.classList.remove('flipped')},800);
    }
    v._memoryFlipped=[];
  }
}

// ─── KIDS COLORING GAME ───
function startColoringGame(){
  var colors=['#e74c3c','#3498db','#27ae60','#f1c40f','#9b59b6','#e67e22','#1abc9c','#e91e63'];
  var shapes=[
    {name:'شمس',draw:function(ctx,cx,cy,s,col){ctx.fillStyle=col;ctx.beginPath();ctx.arc(cx,cy,s*.3,0,Math.PI*2);ctx.fill();for(var i=0;i<8;i++){var a=i*Math.PI/4;ctx.fillRect(cx+Math.cos(a)*s*.4-2,cy+Math.sin(a)*s*.4-2,4,s*.2)}}},
    {name:'قلب',draw:function(ctx,cx,cy,s,col){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(cx,cy+s*.3);ctx.bezierCurveTo(cx-s*.5,cy-s*.1,cx-s*.3,cy-s*.5,cx,cy-s*.3);ctx.bezierCurveTo(cx+s*.3,cy-s*.5,cx+s*.5,cy-s*.1,cx,cy+s*.3);ctx.fill()}},
    {name:'نجمة',draw:function(ctx,cx,cy,s,col){ctx.fillStyle=col;ctx.beginPath();for(var i=0;i<5;i++){var a=i*2*Math.PI/5-Math.PI/2;var r1=s*.4,r2=s*.2;ctx.lineTo(cx+Math.cos(a)*r1,cy+Math.sin(a)*r1);a+=Math.PI/5;ctx.lineTo(cx+Math.cos(a)*r2,cy+Math.sin(a)*r2)}ctx.closePath();ctx.fill()}},
    {name:'زهرة',draw:function(ctx,cx,cy,s,col){ctx.fillStyle=col;for(var i=0;i<5;i++){var a=i*2*Math.PI/5-Math.PI/2;ctx.beginPath();ctx.arc(cx+Math.cos(a)*s*.2,cy+Math.sin(a)*s*.2,s*.15,0,Math.PI*2);ctx.fill()}ctx.fillStyle='#f1c40f';ctx.beginPath();ctx.arc(cx,cy,s*.1,0,Math.PI*2);ctx.fill()}}
  ];
  var shape=shapes[Math.floor(Math.random()*shapes.length)];
  var selectedColor=colors[0];
  hideAllViews();
  var v=document.getElementById('kidsGameView');
  if(!v){v=document.createElement('div');v.id='kidsGameView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var html='<div class="kids-zone">';
  html+='<h2>🎨 تلوين: '+shape.name+'</h2>';
  html+='<div class="kids-color-palette">';
  colors.forEach(function(c,i){
    html+='<div class="kids-color-btn'+(i===0?' active':'')+'" style="background:'+c+'" onclick="selectKidsColor(this,\''+c+'\')"></div>';
  });
  html+='</div>';
  html+='<div style="text-align:center"><canvas id="kidsCanvas" width="300" height="300" style="border:3px solid var(--border);border-radius:15px;background:#fff;cursor:crosshair"></canvas></div>';
  html+='<div style="text-align:center;margin-top:10px"><button class="check-btn" onclick="clearKidsCanvas()">🗑 مسح</button></div>';
  html+='<button class="back-btn" onclick="showKidsZone()" style="margin-top:15px">'+t('back')+'</button>';
  html+='</div>';
  v.innerHTML=html;
  setTimeout(function(){
    var canvas=document.getElementById('kidsCanvas');
    if(!canvas)return;
    var ctx=canvas.getContext('2d');
    shape.draw(ctx,150,150,200,'#ddd');
    var drawing=false;
    canvas.onmousedown=function(e){drawing=true;drawKidsPixel(ctx,e,canvas,selectedColor)};
    canvas.onmousemove=function(e){if(drawing)drawKidsPixel(ctx,e,canvas,selectedColor)};
    canvas.onmouseup=function(){drawing=false};
    canvas.ontouchstart=function(e){e.preventDefault();drawing=true;drawKidsPixel(ctx,e.touches[0],canvas,selectedColor)};
    canvas.ontouchmove=function(e){e.preventDefault();if(drawing)drawKidsPixel(ctx,e.touches[0],canvas,selectedColor)};
    canvas.ontouchend=function(){drawing=false};
    v._kidsShape=shape;v._kidsColors=colors;
  },100);
}
function selectKidsColor(el,color){
  document.querySelectorAll('.kids-color-btn').forEach(function(b){b.classList.remove('active')});
  el.classList.add('active');
  window._kidsSelectedColor=color;
}
function drawKidsPixel(ctx,e,canvas,color){
  var rect=canvas.getBoundingClientRect();
  ctx.fillStyle=window._kidsSelectedColor||color;
  ctx.beginPath();
  ctx.arc(e.clientX-rect.left,e.clientY-rect.top,8,0,Math.PI*2);
  ctx.fill();
}
function clearKidsCanvas(){
  var canvas=document.getElementById('kidsCanvas');
  if(!canvas)return;
  var ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,300,300);
  var v=document.getElementById('kidsGameView');
  if(v&&v._kidsShape)v._kidsShape.draw(ctx,150,150,200,'#ddd');
}

// ─── UTILITIES ───
function shuffleArray(arr){
  var a=arr.slice();
  for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=a[i];a[i]=a[j];a[j]=tmp}
  return a;
}

// ─── ADD KIDS BUTTON TO HEADER ───
var origNavSetup=navSetup;
navSetup=function(){
  origNavSetup();
  var headerRight=document.querySelector('.header-right');
  if(headerRight&&!document.getElementById('navKids')){
    var kidsBtn=document.createElement('button');
    kidsBtn.className='nav-btn';
    kidsBtn.id='navKids';
    kidsBtn.title='عالم الأطفال';
    kidsBtn.textContent='🧸';
    kidsBtn.onclick=function(){showKidsZone()};
    headerRight.insertBefore(kidsBtn,headerRight.firstChild);
  }
};

// ─── KIDS ZONE CSS ───
(function(){
  var css=document.createElement('style');
  css.textContent=`
    .kids-zone{padding:10px}
    .kids-header{text-align:center;padding:25px;background:linear-gradient(135deg,#ff6b6b,#ffa502,#ff6348);color:#fff;border-radius:20px;margin-bottom:20px}
    .kids-mascot{font-size:80px;margin-bottom:10px;animation:kidsBounce 1.5s ease-in-out infinite alternate}
    @keyframes kidsBounce{from{transform:translateY(0) rotate(-5deg)}to{transform:translateY(-15px) rotate(5deg)}}
    .kids-progress-main{margin-top:15px}
    .kids-progress-bar{height:12px;background:rgba(255,255,255,.3);border-radius:6px;overflow:hidden}
    .kids-progress-fill{height:100%;background:#fff;border-radius:6px;transition:width .5s}
    .kids-categories{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;margin-bottom:20px}
    .kids-cat-card{background:var(--surface);border-radius:15px;padding:15px;cursor:pointer;transition:all .3s;box-shadow:var(--card-shadow);display:flex;align-items:center;gap:12px}
    .kids-cat-card:hover{transform:translateY(-5px);box-shadow:0 8px 25px rgba(0,0,0,.15)}
    .kids-cat-emoji{font-size:40px}
    .kids-cat-info{flex:1}
    .kids-cat-info h3{margin:0;font-size:1em}
    .kids-cat-info p{margin:2px 0 5px;font-size:.8em;color:var(--text-light)}
    .kids-cat-bar{height:6px;background:var(--border);border-radius:3px;overflow:hidden}
    .kids-cat-fill{height:100%;border-radius:3px;transition:width .5s}
    .kids-cat-info span{font-size:.75em;color:var(--text-light)}
    .kids-games{margin-bottom:20px}
    .kids-games h3{text-align:center;margin-bottom:12px}
    .kids-game-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
    .kids-game-card{color:#fff;border-radius:15px;padding:20px;text-align:center;cursor:pointer;transition:all .3s;box-shadow:var(--card-shadow)}
    .kids-game-card:hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.2)}
    .kids-game-icon{font-size:40px;display:block;margin-bottom:8px}
    .kids-words-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:10px}
    .kids-word-card{background:var(--surface);border-radius:15px;padding:15px 10px;text-align:center;cursor:pointer;transition:all .3s;box-shadow:var(--card-shadow);position:relative}
    .kids-word-card:hover{transform:scale(1.05);box-shadow:0 6px 20px rgba(0,0,0,.15)}
    .kids-word-card.learned{border:3px solid #27ae60;background:#f0fff4}
    .kids-word-emoji{font-size:45px;margin-bottom:5px}
    .kids-word-en{font-size:1em;font-weight:700;color:var(--accent)}
    .kids-word-ar{font-size:.85em;color:var(--text-light)}
    .kids-word-check{position:absolute;top:5px;right:5px;font-size:1.2em}
    .kids-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.7);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px}
    .kids-word-popup{background:#fff;border-radius:25px;padding:40px;text-align:center;max-width:350px;width:100%;position:relative;animation:popIn .3s}
    @keyframes popIn{from{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}
    .kids-word-popup-emoji{font-size:100px;margin-bottom:15px;animation:kidsBounce 1s ease-in-out infinite alternate}
    .kids-word-popup-en{font-size:2em;color:#333;margin:0}
    .kids-word-popup-ar{font-size:1.5em;color:#666;margin:10px 0}
    .kids-word-popup-actions{display:flex;gap:10px;justify-content:center;margin-top:15px}
    .kids-speak-btn,.kids-learn-btn{padding:12px 25px;border:none;border-radius:25px;font-size:1em;cursor:pointer;font-weight:700;transition:all .2s}
    .kids-speak-btn{background:#3498db;color:#fff}
    .kids-speak-btn:hover{background:#2980b9}
    .kids-learn-btn{background:#27ae60;color:#fff}
    .kids-learn-btn:hover{background:#219a52}
    .kids-close-btn{position:absolute;top:10px;left:10px;background:none;border:none;font-size:1.5em;cursor:pointer;color:#999}
    .kids-match-area{display:flex;gap:20px;justify-content:center}
    .kids-match-col{display:flex;flex-direction:column;gap:8px}
    .kids-match-en,.kids-match-ar{padding:12px 20px;background:var(--surface);border:2px solid var(--border);border-radius:12px;cursor:pointer;font-size:1.1em;transition:all .2s;text-align:center;min-width:120px}
    .kids-match-en:hover,.kids-match-ar:hover{background:var(--test-option-hover);transform:scale(1.05)}
    .kids-match-en.matched,.kids-match-ar.matched{background:#d4edda;border-color:#27ae60;pointer-events:none}
    .kids-match-en.wrong,.kids-match-ar.wrong{background:#f8d7da;border-color:#e74c3c}
    .kids-quiz-card{text-align:center;padding:20px;background:var(--surface);border-radius:20px;box-shadow:var(--card-shadow)}
    .kids-quiz-emoji{font-size:80px;margin-bottom:10px}
    .kids-quiz-options{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:15px}
    .kids-quiz-opt{padding:15px;border:2px solid var(--border);border-radius:15px;font-size:1em;cursor:pointer;transition:all .2s;background:var(--surface)}
    .kids-quiz-opt:hover{background:var(--test-option-hover);transform:scale(1.02)}
    .kids-quiz-opt.correct{background:#d4edda;border-color:#27ae60}
    .kids-quiz-opt.wrong{background:#f8d7da;border-color:#e74c3c}
    .kids-quiz-progress{text-align:center;font-size:1.2em;font-weight:700;color:var(--accent);margin-bottom:10px}
    .kids-quiz-result{text-align:center;padding:30px;font-size:1.5em}
    .kids-quiz-result h2{font-size:2em;color:var(--accent)}
    .kids-memory-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:400px;margin:0 auto}
    .kids-memory-card{height:80px;cursor:pointer;perspective:600px}
    .kids-memory-front,.kids-memory-back{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:1.8em;border-radius:12px;transition:transform .4s;backface-visibility:hidden;position:absolute}
    .kids-memory-front{background:var(--accent);color:#fff;transform:rotateY(0)}
    .kids-memory-back{background:var(--surface);border:2px solid var(--accent);transform:rotateY(180deg)}
    .kids-memory-card .kids-memory-front,.kids-memory-card .kids-memory-back{position:absolute}
    .kids-memory-card{position:relative}
    .kids-memory-card.flipped .kids-memory-front{transform:rotateY(180deg)}
    .kids-memory-card.flipped .kids-memory-back{transform:rotateY(0)}
    .kids-memory-card.matched{pointer-events:none;opacity:.7}
    .kids-color-palette{display:flex;gap:8px;justify-content:center;margin:15px 0;flex-wrap:wrap}
    .kids-color-btn{width:40px;height:40px;border-radius:50%;cursor:pointer;border:3px solid transparent;transition:all .2s}
    .kids-color-btn:hover{transform:scale(1.2)}
    .kids-color-btn.active{border-color:#333;transform:scale(1.2)}
    @media(max-width:480px){
      .kids-categories{grid-template-columns:repeat(2,1fr)}
      .kids-words-grid{grid-template-columns:repeat(3,1fr)}
      .kids-memory-grid{grid-template-columns:repeat(3,1fr)}
      .kids-match-area{flex-direction:column;align-items:center}
      .kids-quiz-options{grid-template-columns:1fr}
    }
  `;
  document.head.appendChild(css);
})();

// ─── INIT REMINDER + TEACHER + KIDS ON LOAD ───
(function(){
  var origDOMContentLoaded=document.addEventListener;
  setTimeout(function(){
    var rs=getReminderSettings();
    if(rs.enabled)scheduleReminder();
    injectTeacherLessons();
  },1000);
})();
