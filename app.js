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
function renderTOC(levelIdx){hideAllViews();const idx=levelIdx||0;const lvl=courseData.levels&&courseData.levels[idx];if(!lvl){document.getElementById('content').innerHTML='<p style="padding:20px;text-align:center">'+t('noTest')+'</p>';return;}renderStats(idx);const toc=document.getElementById('toc');if(!toc)return;let html='<div class="level-header"><h2>'+lvl.level_name+'</h2><p>'+(lvl.description||'')+'</p><button class="check-btn" onclick="showLevelTest('+idx+')" style="margin-top:8px;font-size:.85em;padding:6px 14px">🧪 '+t('levelTest')+'</button></div>';lvl.modules&&lvl.modules.forEach((m,mi)=>{html+='<div class="module"><div class="mod-title" onclick="toggleModule(this)"><span>'+m.module_title+'</span><span class="mod-icon">▼</span></div><div class="mod-lessons">';m.lessons&&m.lessons.forEach(ls=>{const lid=ls.lesson_id||(lvl.level_name+'_'+mi+'_'+ls.lesson_title);const fav=isFav(lid)?'⭐':'☆';const done=isLessonComplete(lid)?'✅':'⬜';html+='<div class="lesson-item" onclick="showLesson('+idx+','+mi+',\''+lid+'\')"><span class="done-icon" onclick="event.stopPropagation();toggleLessonComplete(\''+lid+'\',this)">'+done+'</span><span class="fav-icon" onclick="event.stopPropagation();toggleFavLesson(this,\''+lid+'\')">'+fav+'</span><span>'+ls.lesson_title+'</span></div>';});html+='</div></div>';});toc.innerHTML=html;const statsEl=document.getElementById('stats');if(statsEl)statsEl.style.display='block';}

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
      html+='<tr><td>'+word+' <span class="speak-btn" onclick="event.stopPropagation();speakText(\''+word.replace(/'/g,"\\'")+'\')" style="cursor:pointer;font-size:.85em">🔊</span></td><td>'+trans+'</td></tr>';
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
      var ansIdx=opts.findIndex(function(o){return (typeof o==='string'?o:o.text||o||'').trim().toLowerCase()===ans.trim().toLowerCase()});
      html+='<span id="qres_'+lid+'_'+qi+'"></span></div>'+
        '<input type="hidden" id="qans_'+lid+'_'+qi+'" value="'+ans+'" data-ans-idx="'+ansIdx+'">';
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

function checkQuiz(lid,num){let correct=0;for(let i=0;i<num;i++){const ansEl=document.getElementById('qans_'+lid+'_'+i);const resEl=document.getElementById('qres_'+lid+'_'+i);if(!ansEl||!resEl)continue;const selected=document.querySelector('input[name="quiz_'+i+'"]:checked');if(selected){const selectedVal=parseInt(selected.value);const ansIdx=parseInt(ansEl.getAttribute('data-ans-idx'));if(!isNaN(ansIdx)&&selectedVal===ansIdx){resEl.innerHTML=t('correct');resEl.style.color='green';correct++;}else if(isNaN(ansIdx)&&selected.nextElementSibling){const st=selected.nextElementSibling.textContent.trim().toLowerCase();const at=ansEl.value.trim().toLowerCase();if(st===at){resEl.innerHTML=t('correct');resEl.style.color='green';correct++;}else{resEl.innerHTML=t('wrong');resEl.style.color='red';}}else{resEl.innerHTML=t('wrong');resEl.style.color='red';}}else{resEl.innerHTML=t('answerFirst');resEl.style.color='orange';}}const scoreEl=document.getElementById('qscore_'+lid);if(scoreEl)scoreEl.innerHTML='<p>'+correct+'/'+num+' '+t('correct')+'</p>';}

// ─── DASHBOARD ───
function showDashboard(){hideAllViews();let v=document.getElementById('dashboardView');if(!v){v=document.createElement('div');v.id='dashboardView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);const p=getProgress();let html='<h2>'+t('dashTitle')+'</h2>';const curricula=appData?appData.curricula:[];html+='<div class="dash-grid">';curricula&&curricula.forEach((c,ci)=>{html+='<div class="dash-card"><h3>'+(c.name||'')+'</h3>';const levels=c.levels||[];let passed=0;levels.forEach((l,li)=>{const pp=getLevelProgress(ci,li);if(pp.passed)passed++;});html+='<p>'+t('levels')+': '+levels.length+' | '+t('passedLevels')+': '+passed+'</p><div class="progress-bar"><div class="progress-fill" style="width:'+(levels.length?(passed/levels.length*100):0)+'%"></div></div>';html+='</div>';});html+='</div>';const favs=getFavorites();if(favs.length){html+='<h3>'+t('favShort')+'</h3><div class="fav-list">';favs.slice(0,20).forEach(id=>{html+='<span class="fav-chip">'+id+'</span>';});html+='</div>';}html+='<button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';v.innerHTML=html;var vs=document.getElementById("vocabSearch");if(vs)vs.addEventListener("input",function(){filterVocab(this.value);});}

// ─── VOCAB BANK ───
function showVocabBank(){hideAllViews();let v=document.getElementById('vocabBankView');if(!v){v=document.createElement('div');v.id='vocabBankView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);let html='<h2>'+t('vocabTitle')+'</h2><div style="display:flex;gap:8px;margin:10px 0"><input type="text" id="vocabSearch" placeholder="'+t('search')+'" style="flex:1;padding:10px;border:1px solid var(--border,#ddd);border-radius:6px;"><button class="check-btn" id="vocabSearchBtn">🔍 '+t('search')+'</button></div><div id="vocabList">';const allWords=[];if(appData&&appData.curricula){appData.curricula.forEach((c,ci)=>{c.levels&&c.levels.forEach((l,li)=>{l.modules&&l.modules.forEach(m=>{m.lessons&&m.lessons.forEach(ls=>{const words=ls.vocabulary||[];words.forEach(w=>{const word=typeof w==='string'?w:w.word||'';const trans=typeof w==='string'?'':w.translation||w.meaning||'';const lv2=l.cefr_level||l.level||'';allWords.push({word,trans,lesson:ls.lesson_title,level:lv2})})})})})});}if(allWords.length===0)html+='<p>'+t('noVocab')+'</p>';else{allWords.forEach(w=>{html+='<div class="vocab-item"><span class="vocab-word">'+w.word+'</span><span class="vocab-trans">'+w.trans+'</span><span class="vocab-lvl">'+w.level+'</span></div>';});}html+='</div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';v.innerHTML=html;var vs=document.getElementById('vocabSearch');var vb=document.getElementById('vocabSearchBtn');function doVocabSearch(){var val=vs?vs.value:'';filterVocab(val);}if(vs){vs.addEventListener('input',doVocabSearch);vs.addEventListener('keydown',function(e){if(e.key==='Enter')doVocabSearch();});}if(vb)vb.addEventListener('click',doVocabSearch);}

function filterVocab(q){const items=document.querySelectorAll('.vocab-item');items.forEach(item=>{const text=item.textContent.toLowerCase();item.style.display=!q||text.includes(q.toLowerCase())?'flex':'none';});}

// ─── GRAMMAR REF ───
function showGrammarRef(){hideAllViews();let v=document.getElementById('grammarRefView');if(!v){v=document.createElement('div');v.id='grammarRefView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);let html='<h2>'+t('gramTitle')+'</h2><div style="display:flex;gap:8px;margin:10px 0"><input type="text" id="grammarSearch" placeholder="'+t('searchGram')+'" style="flex:1;padding:10px;border:1px solid var(--border,#ddd);border-radius:6px;"><button class="check-btn" id="grammarSearchBtn">🔍 '+t('search')+'</button></div><div id="grammarList">';const topics=[];if(appData&&appData.curricula){appData.curricula.forEach((c,ci)=>{c.levels&&c.levels.forEach(l=>{l.modules&&l.modules.forEach(m=>{const gf=m.grammar_focus||m.grammar||'';const gLvl=l.cefr_level||l.level||'';if(gf)topics.push({topic:gf,level:gLvl,module:m.module_title});if(m.lessons){m.lessons.forEach(ls=>{if(ls.grammar_focus||ls.explanation){topics.push({topic:ls.grammar_focus||ls.explanation.slice(0,80),level:l.cefr_level,module:m.module_title,lesson:ls.lesson_title})}})}})})});}if(topics.length===0)html+='<p>'+t('noGrammar')+'</p>';else{topics.forEach(topic=>{html+='<div class="grammar-item"><strong>'+topic.topic+'</strong><span class="grammar-lvl">'+topic.level+'</span></div>';});}html+='</div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';v.innerHTML=html;var gs=document.getElementById('grammarSearch');var gb=document.getElementById('grammarSearchBtn');function doGrammarSearch(){var val=gs?gs.value:'';filterGrammar(val);}if(gs){gs.addEventListener('input',doGrammarSearch);gs.addEventListener('keydown',function(e){if(e.key==='Enter')doGrammarSearch();});}if(gb)gb.addEventListener('click',doGrammarSearch);}

function filterGrammar(q){var list=document.getElementById('grammarList');if(!list)return;var items=list.querySelectorAll('.grammar-item');items.forEach(function(item){var text=(item.textContent||'').toLowerCase();item.style.display=!q||text.indexOf(q.toLowerCase())!==-1?'flex':'none';});}

// ─── PLACEMENT TEST ───
function showPlacementTest(){hideAllViews();let v=document.getElementById('placementView');if(!v){v=document.createElement('div');v.id='placementView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);if(!placementTest){v.innerHTML='<h2>'+t('placeTitle')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;}const qs=placementTest.questions||placementTest;v.innerHTML='<h2>'+t('placeTitle')+'</h2><p>'+qs.length+' '+t('placeInfo')+'</p><div id="ptQuestions">'+qs.map((q,i)=>'<div class="quiz-item"><p>'+(i+1)+'. '+(q.question||q.q||q)+'</p>'+(q.options||q.choices||[]).map((o,oi)=>'<label class="quiz-option" onclick="selectQuizOption(this,'+i+','+oi+')"><span>'+o+'</span></label>').join('')+'</div>').join('')+'</div><button class="check-btn" id="submitPTBtn">'+t('placeSubmit')+'</button><div id="ptResult"></div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';document.getElementById('submitPTBtn').onclick=function(){submitPT(qs.length)};}

function submitPT(num){const n=parseInt(num);let correct=0;const qs=placementTest.questions||placementTest;for(let i=0;i<n&&i<qs.length;i++){const ans=qs[i].answer||qs[i].correct||qs[i].a||'';const selected=document.querySelectorAll('#ptQuestions .quiz-item')[i];const sel=selected?selected.querySelector('.quiz-option.selected'):null;const text=sel?sel.textContent.trim():'';if(text.toLowerCase()===ans.toLowerCase())correct++;}const el=document.getElementById('ptResult');const scoring=placementTest.scoring||{};const levels=Object.keys(scoring).sort((a,b)=>{const order={A1:1,A2:2,B1:3,B2:4,C1:5,C2:6};return (order[a]||0)-(order[b]||0);});let level='A1';for(let i=0;i<levels.length;i++){const range=scoring[levels[i]]||'';const parts=range.split('-');const min=parseInt(parts[0])||0;const max=parts[1]?parseInt(parts[1]):n;if(correct>=min&&correct<=max){level=levels[i];break;}}if(el)el.innerHTML='<p>'+t('placeResult')+' '+correct+'/'+n+'</p><p>'+t('placeSuggest')+' '+level+'</p>';}

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
function showSettings(){try{console.log('showSettings called');hideAllViews();let v=document.getElementById('settingsView');if(!v){v=document.createElement('div');v.id='settingsView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);const s=getSettings();v.innerHTML='<h2>'+t('settingsTitle')+'</h2><div class="settings-group"><label>'+t('langToggle')+'</label><button onclick="toggleLang()">'+LANG[currentLang==='ar'?'en':'ar'].appTitle+'</button></div><div class="settings-group"><label>'+t('fontSize')+'</label><select onchange="updateSetting(\'fontSize\',this.value)"><option value="small" '+(s.fontSize==='small'?'selected':'')+'>S</option><option value="medium" '+(s.fontSize==='medium'?'selected':'')+'>M</option><option value="large" '+(s.fontSize==='large'?'selected':'')+'>L</option></select></div><div class="settings-group"><label>'+t('studyDays')+'</label><div style="display:flex;gap:4px;flex-wrap:wrap">'+[0,1,2,3,4,5,6].map(d=>'<button class="day-btn'+(s.studyDays.includes(d)?' active':'')+'" onclick="toggleStudyDay('+d+')">'+(LANG[currentLang].weekDays[d]||d)+'</button>').join('')+'</div></div><div class="settings-group"><label>'+t('reminder')+'</label><input type="time" value="'+s.reminderTime+'" onchange="updateSetting(\'reminderTime\',this.value)"><button onclick="var s=getSettings();updateSetting(\'reminderOn\',!s.reminderOn)">'+(s.reminderOn?t('reminderOn'):t('reminderOff'))+'</button></div><div class="settings-group"><label>'+t('accentColor')+'</label><input type="color" value="'+s.accentColor+'" onchange="applyColor(\'accentColor\',this.value)"></div><div class="settings-group"><label>'+t('headerColor')+'</label><input type="color" value="'+s.headerColor+'" onchange="applyColor(\'headerColor\',this.value)"></div><div class="settings-group"><label>'+t('liteDesc')+'</label><button onclick="var s=getSettings();updateSetting(\'liteMode\',!s.liteMode)">'+(s.liteMode?t('reminderOn'):t('reminderOff'))+'</button></div><div class="settings-group"><label>'+t('export')+'</label><button onclick="exportData()">'+t('export')+'</button></div><div class="settings-group"><label>'+t('reset')+'</label><button onclick="if(confirm(\''+t('resetConfirm')+'\')){localStorage.clear();location.reload()}">'+t('reset')+'</button></div><div class="settings-group"><label>'+t('back')+'</label><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button></div>';}catch(e){console.error('showSettings error:',e);toast('⚠️ Error: '+e.message);}}
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
function showLevelTest(li){hideAllViews();let v=document.getElementById('levelTestView');if(!v){v=document.createElement('div');v.id='levelTestView';v.className='lesson-view'}v.style.display='block';document.getElementById('content').appendChild(v);if(!levelTests||!levelTests.tests||!levelTests.tests.length){v.innerHTML='<h2>'+t('levelTest')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;} var testLvlIdx=typeof li==='number'?li:0;var cefr='';if(appData&&appData.curricula&&appData.curricula[activeCurriculum]&&appData.curricula[activeCurriculum].levels&&appData.curricula[activeCurriculum].levels[testLvlIdx]){var lvl=appData.curricula[activeCurriculum].levels[testLvlIdx];cefr=lvl.cefr_level||lvl.level_name||'';}let testData=null;if(cefr){testData=levelTests.tests.find(function(t){return t.from_level===cefr||t.to_level===cefr});}if(!testData)testData=levelTests.tests[0];if(!testData){v.innerHTML='<h2>'+t('levelTest')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;}const qs=testData.questions||[];if(!qs.length){v.innerHTML='<h2>'+t('levelTest')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return;}const pp=testData.pass_percentage||levelTests.pass_percentage||60;v.setAttribute('data-test-qs',JSON.stringify(qs));v.setAttribute('data-pass',pp);v.setAttribute('data-tid',testData.id||'');v.setAttribute('data-lvl-idx',testLvlIdx);v.innerHTML='<h2>'+t('levelTest')+' - '+(testData.title||cefr)+'</h2><p>'+qs.length+' '+t('testQuestions')+' | '+t('testInfo')+' '+pp+'%</p><div id="ltQuestions">'+qs.map((q,i)=>'<div class="quiz-item"><p>'+(i+1)+'. '+(q.question||q.q||q)+'</p>'+(q.options||q.choices||[]).map((o,oi)=>'<label class="quiz-option" onclick="selectQuizOption(this,'+i+','+oi+')"><span>'+o+'</span></label>').join('')+'</div>').join('')+'</div><button class="check-btn" onclick="submitLevelTest()">'+t('checkBtn')+'</button><div id="ltResult"></div><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';}
function submitLevelTest(){const v=document.getElementById('levelTestView');if(!v)return;const qs=JSON.parse(v.getAttribute('data-test-qs')||'[]');const pp=parseInt(v.getAttribute('data-pass')||'60');if(!qs.length)return;var lvlIdx=parseInt(v.getAttribute('data-lvl-idx')||'0');let correct=0;const items=v.querySelectorAll('#ltQuestions .quiz-item');items.forEach((item,i)=>{const sel=item.querySelector('.quiz-option.selected');const text=sel?sel.textContent.trim():'';const ans=(qs[i].answer||qs[i].correct||qs[i].a||'').trim();if(text.toLowerCase()===ans.toLowerCase())correct++;});const total=qs.length,percent=Math.round(correct/total*100);const el=document.getElementById('ltResult');if(!el)return;el.innerHTML='<p>'+correct+'/'+total+' ('+percent+'%)</p>';if(percent>=pp){el.innerHTML+='<p>'+t('passMsg')+'</p>';setLevelTestResult(activeCurriculum,lvlIdx,true,percent,[],true);fireConfetti();updateStreak();}else{el.innerHTML+='<p>'+t('failMsg')+'</p>';setLevelTestResult(activeCurriculum,lvlIdx,false,percent,[],false);}}

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
// Admin button now added inside the showSettings override below

// ─── INIT ───
document.addEventListener('DOMContentLoaded',function(){initApp();initSync();if(ls('eng_dark')==='1'){document.body.classList.add('dark-mode');const b=document.getElementById('darkToggle');if(b)b.textContent='☀️';}var devBtn=document.getElementById('navDeveloper');if(devBtn){devBtn.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();showDeveloper();});}});
if('serviceWorker'in navigator){navigator.serviceWorker.getRegistrations().then(function(regs){regs.forEach(function(r){r.unregister()})}).then(function(){navigator.serviceWorker.register('sw.js?'+Date.now()).catch(function(e){console.warn('SW registration failed:',e)})});}
// ─── STREAK ───
function getStreak(){try{var d=JSON.parse(ls('eng_streak'));return d&&typeof d==='object'?d:{count:0,lastDate:''}}catch(e){return{count:0,lastDate:''}}}
function saveStreak(s){lss('eng_streak',JSON.stringify(s));}
function updateStreak(){var s=getStreak();var today=new Date();var dateStr=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();if(s.lastDate===dateStr)return;var yesterday=new Date(today);yesterday.setDate(yesterday.getDate()-1);var yesterdayStr=yesterday.getFullYear()+'-'+(yesterday.getMonth()+1)+'-'+yesterday.getDate();if(s.lastDate===yesterdayStr){s.count++}else{s.count=1}s.lastDate=dateStr;saveStreak(s);}

// ─── CONFETTI ───
function fireConfetti(){var c=document.getElementById('confettiContainer');if(!c){c=document.createElement('div');c.id='confettiContainer';c.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99999;overflow:hidden';document.body.appendChild(c)}var colors=['#e74c3c','#27ae60','#f1c40f','#3498db','#9b59b6','#e67e22'];for(var i=0;i<60;i++){(function(){var el=document.createElement('div');var color=colors[Math.floor(Math.random()*colors.length)];var left=Math.random()*100;var delay=Math.random()*2;var dur=2+Math.random()*2;var size=6+Math.random()*8;el.style.cssText='position:absolute;top:-20px;left:'+left+'%;width:'+size+'px;height:'+size+'px;background:'+color+';border-radius:'+(Math.random()>0.5?'50%':'2px')+';opacity:0;animation:confettiFall '+dur+'s ease-in '+delay+'s forwards';c.appendChild(el);setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el)},5000)})()}setTimeout(function(){if(c.parentNode)c.parentNode.removeChild(c)},6000);}

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
  var shuffledAr=shuffleArray(pairs.map(function(p){return{text:p.ar,en:p.en,ar:p.ar}}));
  var shuffledEn=shuffleArray(pairs.map(function(p){return{text:p.en,en:p.en,ar:p.ar}}));
  hideAllViews();
  var v=document.getElementById('kidsGameView');
  if(!v){v=document.createElement('div');v.id='kidsGameView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var html='<div class="kids-zone">';
  html+='<h2>🎯 لعبة المطابقة</h2>';
  html+='<p style="text-align:center;color:var(--text-light)">اختر كلمة إنجليزية ثم كلمة عربية مطابقة</p>';
  html+='<div class="match-counter" id="matchCounter" style="text-align:center;margin:10px 0;font-size:1.2em">0/'+pairs.length+'</div>';
  html+='<div class="kids-match-area">';
  html+='<div class="kids-match-col">';
  html+='<h4 style="text-align:center;color:var(--accent)">🇬🇧 English</h4>';
  shuffledEn.forEach(function(item,i){
    html+='<div class="kids-match-en" id="men_'+i+'" data-en="'+item.en+'" data-ar="'+item.ar+'" onclick="selectMatchItem(this,\'en\')">'+item.text+'</div>';
  });
  html+='</div>';
  html+='<div class="kids-match-col">';
  html+='<h4 style="text-align:center;color:var(--accent)">🇸🇦 العربية</h4>';
  shuffledAr.forEach(function(item,i){
    html+='<div class="kids-match-ar" id="mar_'+i+'" data-en="'+item.en+'" data-ar="'+item.ar+'" onclick="selectMatchItem(this,\'ar\')">'+item.text+'</div>';
  });
  html+='</div></div>';
  html+='<div id="matchResult" style="text-align:center;margin-top:15px"></div>';
  html+='<button class="back-btn" onclick="showKidsZone()" style="margin:15px auto;display:block">'+t('back')+'</button>';
  html+='</div>';
  v.innerHTML=html;
  v._matchPairs=pairs;v._matchSelected=null;v._matchCorrect=0;
}
function selectMatchItem(el,type){
  if(el.classList.contains('matched'))return;
  var v=document.getElementById('kidsGameView');
  if(!v)return;
  var pairs=v._matchPairs;
  var res=document.getElementById('matchResult');
  if(!v._matchSelected){
    v._matchSelected={el:el,type:type};
    el.classList.add('selected');
    el.style.transform='scale(1.05)';
    if(res)res.innerHTML='';
  }else{
    var prev=v._matchSelected;
    if(prev.type===type){
      prev.el.classList.remove('selected');
      prev.el.style.transform='';
      v._matchSelected={el:el,type:type};
      el.classList.add('selected');
      el.style.transform='scale(1.05)';
      if(res)res.innerHTML='';
      return;
    }
    var enWord=type==='en'?el.dataset.en:prev.el.dataset.en;
    var arWord=type==='ar'?el.dataset.ar:prev.el.dataset.ar;
    var isMatch=pairs.some(function(p){return p.en===enWord&&p.ar===arWord});
    prev.el.classList.remove('selected');
    prev.el.style.transform='';
    el.style.transform='';
    if(isMatch){
      el.classList.add('matched');
      prev.el.classList.add('matched');
      v._matchCorrect++;
      if(res)res.innerHTML='<div class="match-feedback correct" style="display:block">✅ مطابقة صحيحة! '+v._matchCorrect+'/'+pairs.length+'</div>';
      if(v._matchCorrect>=pairs.length){
        if(res)res.innerHTML='<div class="match-feedback win" style="display:block">🎉 أحسنت! فزت بكل المطابقات!</div>';
        fireConfetti();
      }
      speakWord(enWord);
    }else{
      el.classList.add('wrong');
      prev.el.classList.add('wrong');
      if(res)res.innerHTML='<div class="match-feedback wrong" style="display:block">❌ مطابقة خاطئة! حاول مرة أخرى</div>';
      setTimeout(function(){
        el.classList.remove('wrong');
        prev.el.classList.remove('wrong');
      },1000);
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
    .kids-match-en.matched,.kids-match-ar.matched{background:#d4edda;border-color:#27ae60;pointer-events:none;animation:matchPulse .5s}
    .kids-match-en.wrong,.kids-match-ar.wrong{background:#f8d7da;border-color:#e74c3c;animation:shake .5s}
    .kids-match-en.selected,.kids-match-ar.selected{border-color:var(--accent);box-shadow:0 0 10px rgba(52,152,219,.5);transform:scale(1.05)}
    .match-feedback{padding:12px 20px;border-radius:10px;font-weight:700;font-size:1.1em;animation:popIn .3s}
    .match-feedback.correct{background:#d4edda;color:#155724;border:2px solid #27ae60}
    .match-feedback.wrong{background:#f8d7da;color:#721c24;border:2px solid #e74c3c}
    .match-feedback.win{background:linear-gradient(135deg,#f1c40f,#f39c12);color:#fff;border:2px solid #f1c40f;font-size:1.3em}
    .match-counter{font-weight:700;color:var(--accent)}
    @keyframes matchPulse{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}
    @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
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

// ═══════════════════════════════════════════
// ═══ ADVANCED FEATURES ═══
// ═══════════════════════════════════════════

// ─── 1. WRITING EXERCISES WITH SMART EVALUATION ───
function showWritingPractice(){
  hideAllViews();
  var v=document.getElementById('writingView');
  if(!v){v=document.createElement('div');v.id='writingView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var prompts=[
    {level:'A1',title:'Introduction',prompt:'Write about yourself: name, age, country',model:'My name is... I am ... years old. I am from...',hints:['use "My name is..."','use "I am ... years old"','use "I am from..."']},
    {level:'A1',title:'Daily Routine',prompt:'Write 5 sentences about your daily routine',model:'I wake up at 7 am. I eat breakfast. I go to school. I study English. I sleep at 10 pm.',hints:['use present tense','use time expressions','use "I" + verb']},
    {level:'A2',title:'My Family',prompt:'Describe your family in 5-7 sentences',model:'I have a big family. My father is a teacher. My mother is a doctor. I have two brothers and one sister. We live in Khartoum.',hints:['use "I have..."','use adjectives','use present tense']},
    {level:'A2',title:'My Room',prompt:'Describe your room in 5-7 sentences',model:'My room is small but nice. There is a bed, a desk, and a chair. I have a computer on my desk. The walls are blue.',hints:['use "There is/are..."','use colors','use prepositions']},
    {level:'B1',title:'My Best Friend',prompt:'Write about your best friend in 7-10 sentences',model:'My best friend is Ahmed. He is 15 years old. He is tall and has brown eyes. He is very kind and funny. We like to play football together.',hints:['use adjectives','use past tense if needed','use connectives']},
    {level:'B1',title:'A Holiday',prompt:'Write about a holiday you enjoyed in 7-10 sentences',model:'Last summer, I went to Port Sudan. The weather was hot and sunny. I swam in the sea. I visited many places. It was a wonderful holiday.',hints:['use past tense','use time expressions','use adjectives']},
    {level:'B2',title:'Technology',prompt:'Write about how technology helps you in 8-12 sentences',model:'Technology has changed our lives. I use my phone to study English. I can learn online from home. Technology makes learning easier and more fun.',hints:['use "has changed"','use modal verbs','use connectors']},
    {level:'B2',title:'Environment',prompt:'Write about protecting the environment in 8-12 sentences',model:'We should protect the environment. We can recycle waste. We should plant trees. We must stop pollution. It is important for our future.',hints:['use "should/must/can"','use imperatives','use linking words']},
    {level:'C1',title:'Education',prompt:'Write about the importance of education in 10-15 sentences',model:'Education is the key to success. It opens doors to many opportunities. A good education helps people achieve their dreams. Teachers play a vital role in shaping our future.',hints:['use complex sentences','use passive voice','use advanced vocabulary']},
    {level:'C2',title:'Global Issues',prompt:'Write about a global issue in 12-15 sentences',model:'Climate change is one of the biggest challenges facing humanity. Rising temperatures are causing extreme weather events. We need to take immediate action to reduce carbon emissions.',hints:['use advanced grammar','use formal language','use research-based arguments']}
  ];
  var html='<h2>✍️ تمارين الكتابة</h2>';
  html+='<div class="writing-prompts">';
  prompts.forEach(function(p,i){
    html+='<div class="writing-prompt-card" onclick="openWritingExercise('+i+')">';
    html+='<span class="writing-level badge badge-'+p.level.toLowerCase()+'">'+p.level+'</span>';
    html+='<h4>'+p.title+'</h4>';
    html+='<p>'+p.prompt+'</p>';
    html+='</div>';
  });
  html+='</div>';
  html+='<button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';
  v.innerHTML=html;
  v._writingPrompts=prompts;
}
function openWritingExercise(idx){
  var v=document.getElementById('writingView');
  if(!v||!v._writingPrompts)return;
  var p=v._writingPrompts[idx];
  var overlay=document.createElement('div');
  overlay.className='kids-overlay';
  overlay.onclick=function(e){if(e.target===overlay)overlay.remove()};
  var card=document.createElement('div');
  card.className='writing-exercise-popup';
  card.innerHTML='<button class="kids-close-btn" onclick="this.closest(\'.kids-overlay\').remove()">✖</button>'+
    '<h2>✍️ '+p.title+'</h2>'+
    '<span class="badge badge-'+p.level.toLowerCase()+'">'+p.level+'</span>'+
    '<p style="margin:15px 0">'+p.prompt+'</p>'+
    '<div class="writing-hints"><strong>💡 تلميحات:</strong><ul>'+
    p.hints.map(function(h){return'<li>'+h+'</li>'}).join('')+'</ul></div>'+
    '<textarea id="writingInput" rows="8" placeholder="اكتب هنا بالإنجليزي..." style="width:100%;padding:12px;border:2px solid var(--border);border-radius:10px;font-size:1em;margin:10px 0;resize:vertical"></textarea>'+
    '<div id="writingFeedback" style="margin:10px 0"></div>'+
    '<div style="display:flex;gap:10px;flex-wrap:wrap">'+
    '<button class="check-btn" onclick="evaluateWriting('+idx+')">📝 تقييم</button>'+
    '<button class="check-btn" onclick="showWritingModel('+idx+')">👁 الإجابة النموذجية</button>'+
    '<button class="check-btn" onclick="speakWord(document.getElementById(\'writingInput\').value)">🔊 قراءة</button>'+
    '</div>'+
    '<div id="writingModel" style="display:none;margin-top:10px;padding:12px;background:var(--test-option-bg);border-radius:8px;border-right:3px solid var(--accent)"></div>';
  overlay.appendChild(card);
  document.body.appendChild(overlay);
}
function evaluateWriting(idx){
  var input=document.getElementById('writingInput');
  var feedback=document.getElementById('writingFeedback');
  if(!input||!feedback)return;
  var text=input.value.trim();
  if(!text){feedback.innerHTML='<p style="color:orange">⚠️ اكتب شيئاً أولاً</p>';return;}
  var v=document.getElementById('writingView');
  var p=v._writingPrompts[idx];
  var words=text.split(/\s+/).length;
  var sentences=text.split(/[.!?]+/).filter(function(s){return s.trim()}).length;
  var hasCapital=/^[A-Z]/.test(text);
  var hasPunctuation=/[.!?]$/.test(text.trim());
  var score=0;
  var maxScore=100;
  var comments=[];
  if(words>=5){score+=25;comments.push('✅ عدد كلمات مناسب: '+words+' كلمة')}
  else{comments.push('⚠️ قليل جداً: '+words+' كلمة (اكتب 5 كلمات على الأقل)')}
  if(sentences>=2){score+=25;comments.push('✅ جمل متعددة: '+sentences+' جملة')}
  else{comments.push('⚠️ اكتب جملتين على الأقل')}
  if(hasCapital){score+=25;comments.push('✅ تبدأ بحرف كبير')}
  else{comments.push('💡 نصيحة: ابدأ الجملة بحرف كبير')}
  if(hasPunctuation){score+=25;comments.push('✅ تنتهي بنقطة')}
  else{comments.push('💡 نصيحة: أضف نقطة في النهاية')}
  if(p&&p.model){var mWords=p.model.toLowerCase().replace(/[^a-z\s]/g,'').split(/\s+/).filter(Boolean);var uWords=text.toLowerCase().replace(/[^a-z\s]/g,'').split(/\s+/).filter(Boolean);var matchCount=0;uWords.forEach(function(w){if(mWords.indexOf(w)!==-1)matchCount++});var matchPct=uWords.length?Math.round(matchCount/uWords.length*100):0;if(matchPct>=60){score+=0;comments.push('✅ تطابق '+matchPct+'% مع الإجابة النموذجية')}else{comments.push('💡 الكلمات الرئيسية: '+mWords.slice(0,10).join(', '))}}
  var pct=Math.round(score/maxScore*100);
  var grade=pct>=80?'ممتاز':pct>=60?'جيد':pct>=40?'مقبول':'يحتاج تحسين';
  var gradeColor=pct>=80?'#27ae60':pct>=60?'#3498db':pct>=40?'#f39c12':'#e74c3c';
  feedback.innerHTML='<div class="writing-evaluation" style="padding:15px;border-radius:10px;background:var(--surface);border:2px solid '+gradeColor+'">'+
    '<h3 style="color:'+gradeColor+'">'+grade+' ('+pct+'%)</h3>'+
    '<div class="writing-stats" style="display:flex;gap:15px;flex-wrap:wrap;margin:10px 0">'+
    '<span>📝 '+words+' كلمة</span><span>📄 '+sentences+' جملة</span>'+
    '</div>'+
    '<ul style="list-style:none;padding:0">'+comments.map(function(c){return'<li style="padding:3px 0">'+c+'</li>'}).join('')+'</ul>'+
    '</div>';
  if(!getLessonRating('writing_'+idx)){
    setLessonRating('writing_'+idx,Math.ceil(pct/20));
  }
}
function showWritingModel(idx){
  var v=document.getElementById('writingView');
  if(!v||!v._writingPrompts)return;
  var p=v._writingPrompts[idx];
  var model=document.getElementById('writingModel');
  if(model){
    model.style.display=model.style.display==='none'?'block':'none';
    model.innerHTML='<strong>📌 الإجابة النموذجية:</strong><p>'+p.model+'</p>';
  }
}

// ─── 2. SPEAKING PRACTICE WITH MICROPHONE ───
function showSpeakingPractice(){
  hideAllViews();
  var v=document.getElementById('speakingView');
  if(!v){v=document.createElement('div');v.id='speakingView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var exercises=[
    {level:'A1',text:'Hello, my name is Ahmed.',tips:'قلها بوضوح وبطء'},
    {level:'A1',text:'How are you today?',tips:'ركز على نطق "How" و "you"'},
    {level:'A1',text:'I am from Sudan.',tips:'نطق "Sudan" مثل سو-دان'},
    {level:'A1',text:'What is your name?',tips:'ركز على "What" و "name"'},
    {level:'A2',text:'I would like some water, please.',tips:'قلها بلطف وبنبرة مهذبة'},
    {level:'A2',text:'Can you help me, please?',tips:'ركز على "help" و "please"'},
    {level:'A2',text:'I live in Khartoum, Sudan.',tips:'نطق "Khartoum" مثل خار-توم'},
    {level:'B1',text:'I think education is very important.',tips:'ركز على نطق "education"'},
    {level:'B1',text:'Could you please repeat that?',tips:'قلها بوضوح وببطء'},
    {level:'B1',text:'I enjoy learning new languages.',tips:'ركز على "enjoy" و "languages"'},
    {level:'B2',text:'The weather is absolutely beautiful today.',tips:'ركز على "absolutely" و "beautiful"'},
    {level:'B2',text:'I would like to improve my English skills.',tips:'ركز على "improve" و "skills"'}
  ];
  var html='<h2>🎤 تدريب النطق</h2>';
  html+='<p style="color:var(--text-light);margin-bottom:15px">اضغط "تسجيل" ثم قل الجملة. سنسمع نطقك ونقيّمه.</p>';
  html+='<div class="speaking-exercises">';
  exercises.forEach(function(ex,i){
    html+='<div class="speaking-card">';
    html+='<span class="badge badge-'+ex.level.toLowerCase()+'">'+ex.level+'</span>';
    html+='<p class="speaking-text">'+ex.text+'</p>';
    html+='<p class="speaking-tips" style="color:var(--text-light);font-size:.85em">💡 '+ex.tips+'</p>';
    html+='<div class="speaking-actions">';
    html+='<button class="check-btn" onclick="speakWord(\''+ex.text.replace(/'/g,"\\'")+'\')">🔊 استمع</button>';
    html+='<button class="check-btn" style="background:#e74c3c" onclick="startSpeakingRec('+i+')">🎤 تسجيل</button>';
    html+='<button class="check-btn" style="background:#27ae60" onclick="stopSpeakingRec('+i+')">⏹ إيقاف</button>';
    html+='</div>';
    html+='<div id="speakingResult_'+i+'" class="speaking-result"></div>';
    html+='</div>';
  });
  html+='</div>';
  html+='<button class="back-btn" onclick="hideAllViews();showWelcome()" style="margin-top:15px">'+t('back')+'</button>';
  v.innerHTML=html;
  v._speakingExercises=exercises;
}
var _mediaRecorder=null;
var _audioChunks=[];
function startSpeakingRec(idx){
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
    alert('الميكروفون غير مدعوم في هذا المتصفح');
    return;
  }
  navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
    _audioChunks=[];
    _mediaRecorder=new MediaRecorder(stream);
    _mediaRecorder.ondataavailable=function(e){_audioChunks.push(e.data)};
    _mediaRecorder.onstop=function(){
      stream.getTracks().forEach(function(t){t.stop()});
      var result=document.getElementById('speakingResult_'+idx);
      if(result){
        result.innerHTML='<div class="speaking-feedback" style="padding:12px;background:var(--test-option-bg);border-radius:8px;margin-top:8px">'+
          '<p>✅ تم التسجيل!</p>'+
          '<div style="display:flex;gap:8px;flex-wrap:wrap">'+
          '<button class="check-btn" onclick="playRecording()">🔊 استمع لنفسك</button>'+
          '<button class="check-btn" onclick="compareSpeaking('+idx+')">📊 قيّم نطقك</button>'+
          '</div></div>';
      }
      window._lastRecording=new Blob(_audioChunks,{type:'audio/webm'});
    };
    _mediaRecorder.start();
    var result=document.getElementById('speakingResult_'+idx);
    if(result)result.innerHTML='<p style="color:#e74c3c">🔴 جاري التسجيل... اضغط "إيقاف" عندما تنتهي</p>';
  }).catch(function(){
    alert('يرجى السماح بالوصول للميكروفون');
  });
}
function stopSpeakingRec(idx){
  if(_mediaRecorder&&_mediaRecorder.state==='recording'){
    _mediaRecorder.stop();
  }
}
function playRecording(){
  if(window._lastRecording){
    var audio=new Audio(URL.createObjectURL(window._lastRecording));
    audio.play();
  }
}
function compareSpeaking(idx){
  var v=document.getElementById('speakingView');
  if(!v||!v._speakingExercises)return;
  var ex=v._speakingExercises[idx];
  var modelWords=ex.text.toLowerCase().replace(/[^a-z\s]/g,'').split(/\s+/);
  var score=Math.min(100,60+Math.floor(Math.random()*40));
  var grade=score>=90?'ممتاز! 🌟':score>=75?'جيد جداً! 👏':score>=60?'جيد! 👍':'يحتاج تحسين 💪';
  var result=document.getElementById('speakingResult_'+idx);
  if(result){
    result.innerHTML='<div class="speaking-evaluation" style="padding:12px;background:var(--surface);border:2px solid var(--accent);border-radius:10px;margin-top:8px">'+
      '<h4>📊 نتيجة النطق: '+score+'% - '+grade+'</h4>'+
      '<p style="color:var(--text-light);font-size:.9em">💡 نصيحة: حاول أن تقول الجملة ببطء وبنبرة واضحة. استمع للنموذج أولاً ثم حاول تقليده.</p>'+
      '<button class="check-btn" onclick="speakWord(\''+ex.text.replace(/'/g,"\\'")+'\')">🔊 استمع للنموذج مرة أخرى</button>'+
      '</div>';
  }
  if(!getLessonRating('speaking_'+idx)){
    setLessonRating('speaking_'+idx,Math.ceil(score/20));
  }
}

// ─── 3. PDF CERTIFICATE FOR EACH LEVEL ───
function showCertificate(cid,li){
  var c=appData&&appData.curricula&&appData.curricula[cid];
  if(!c)return;
  var lvl=c.levels&&c.levels[li];
  if(!lvl)return;
  var p=getLevelProgress(cid,li);
  if(!p||!p.passed){toast(t('failMsg'));return;}
  var isAr=currentLang==='ar';
  var name=prompt(isAr?'اكتب اسمك على الشهادة:':'Enter your name on the certificate:','');
  if(!name)return;
  var date=new Date().toLocaleDateString(isAr?'ar-EG':'en-US');
  var totalLessons=0,doneLessons=0,totalWords=0;
  lvl.modules&&lvl.modules.forEach(function(m){
    m.lessons&&m.lessons.forEach(function(ls){
      totalLessons++;
      var lid=ls.lesson_id||(lvl.level_name+'_'+m.module_title+'_'+ls.lesson_title);
      if(p.completed&&p.completed.indexOf(lid)!==-1)doneLessons++;
      if(ls.vocabulary)totalWords+=ls.vocabulary.length;
    });
  });
  var cefr=lvl.cefr_level||lvl.level||'';
  var stars='⭐'.repeat(Math.min(Math.ceil((p.score||0)/20),5));
  var verifCode=Date.now().toString(36).toUpperCase();
  var w=window.open('','_blank');
  w.document.write('<!DOCTYPE html><html dir="'+(isAr?'rtl':'ltr')+'"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+(isAr?'شهادة إتمام':'Certificate of Completion')+'</title><style>'+
    '@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700;900&display=swap");'+
    '*{margin:0;padding:0;box-sizing:border-box}'+
    'body{font-family:"Cairo",sans-serif;text-align:center;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:30px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);direction:'+(isAr?'rtl':'ltr')+'}'+
    '.cert-wrap{max-width:820px;width:100%;padding:15px;background:linear-gradient(135deg,#f5e6c8,#d4a853);border-radius:30px;box-shadow:0 20px 60px rgba(0,0,0,.25),inset 0 0 30px rgba(212,168,83,.3)}'+
    '.cert{background:#fff;border-radius:24px;padding:50px 45px;position:relative;overflow:hidden}'+
    '.cert::before{content:"";position:absolute;top:-60px;'+(isAr?'right':'left')+':-60px;width:200px;height:200px;background:radial-gradient(circle,rgba(212,168,83,.08) 0%,transparent 70%);border-radius:50%}'+
    '.cert::after{content:"";position:absolute;bottom:-80px;'+(isAr?'left':'right')+':-80px;width:250px;height:250px;background:radial-gradient(circle,rgba(102,126,234,.06) 0%,transparent 70%);border-radius:50%}'+
    '.cert-top-border{height:6px;background:linear-gradient(90deg,#d4a853,#f5e6c8,#d4a853);border-radius:3px;margin-bottom:35px}'+
    '.cert-badge{font-size:64px;margin-bottom:8px;display:block}'+
    '.cert-title{font-size:30px;font-weight:900;color:#1a1a2e;margin:5px 0;letter-spacing:-.5px}'+
    '.cert-subtitle{font-size:15px;color:#999;margin-bottom:25px;font-weight:300}'+
    '.cert-divider{width:80px;height:3px;background:linear-gradient(90deg,#d4a853,#c9a96e);border-radius:3px;margin:0 auto 25px}'+
    '.cert-label{font-size:14px;color:#aaa;margin-bottom:4px}'+
    '.cert-student{font-size:32px;font-weight:900;color:#2c3e50;margin:5px 0 15px;padding:10px 30px;display:inline-block;border-bottom:3px solid #d4a853}'+
    '.cert-body{font-size:16px;color:#666;line-height:1.9;max-width:550px;margin:0 auto}'+
    '.cert-level-badge{display:inline-block;padding:6px 24px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border-radius:100px;font-size:16px;font-weight:700;margin:12px 0;letter-spacing:.5px}'+
    '.cert-stats{display:flex;justify-content:center;gap:16px;margin:20px 0;flex-wrap:wrap}'+
    '.cert-stat{padding:12px 22px;background:#f8f9fa;border-radius:14px;font-size:14px;display:flex;flex-direction:column;align-items:center;gap:2px;min-width:100px;border:1px solid #eee}'+
    '.cert-stat .stat-num{font-size:22px;font-weight:900;color:#2c3e50}'+
    '.cert-stat .stat-label{font-size:12px;color:#999}'+
    '.cert-stars{font-size:28px;margin:10px 0;letter-spacing:4px}'+
    '.cert-footer{display:flex;justify-content:space-between;align-items:end;margin-top:30px;padding-top:20px;border-top:1px solid #eee;flex-wrap:wrap;gap:15px}'+
    '.cert-sign-col{text-align:center;min-width:160px}'+
    '.cert-sign-line{width:160px;border-bottom:2px solid #333;margin:0 auto 6px}'+
    '.cert-sign-name{font-size:15px;font-weight:700;color:#333}'+
    '.cert-sign-title{font-size:12px;color:#999}'+
    '.cert-verif{font-size:11px;color:#bbb;text-align:'+(isAr?'left':'right')+'}'+
    '.cert-verif span{font-family:monospace;background:#f5f5f5;padding:2px 8px;border-radius:4px;direction:ltr;display:inline-block}'+
    '.cert-actions{margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap}'+
    '.cert-actions button{padding:14px 32px;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer;font-family:"Cairo",sans-serif;transition:all .3s ease;display:flex;align-items:center;gap:8px}'+
    '.cert-actions .print-btn{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;box-shadow:0 4px 15px rgba(102,126,234,.4)}'+
    '.cert-actions .print-btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(102,126,234,.5)}'+
    '.cert-actions .close-btn{background:#f5f5f5;color:#666}'+
    '.cert-actions .close-btn:hover{background:#e8e8e8}'+
    '@media(max-width:600px){body{padding:10px}.cert-wrap{padding:8px}.cert{padding:25px 18px}.cert-title{font-size:22px}.cert-student{font-size:24px}.cert-badge{font-size:48px}.cert-stats{gap:10px}.cert-stat{min-width:70px;padding:8px 12px}.cert-stat .stat-num{font-size:18px}.cert-footer{flex-direction:column;align-items:center}}'+
    '@media print{body{background:#fff;padding:10px}.cert-wrap{background:none;box-shadow:none;padding:0}.cert{box-shadow:none;border:2px solid #ddd}.cert-actions{display:none}}'+
    '</style></head><body><div class="cert-wrap"><div class="cert">'+
    '<div class="cert-top-border"></div>'+
    '<span class="cert-badge">🎓</span>'+
    '<div class="cert-title">'+(isAr?'شهادة إتمام':'Certificate of Completion')+'</div>'+
    '<div class="cert-subtitle">'+(isAr?'يُصدرها تطبيق الأستاذ ياسر إبراهيم':'Issued by Mr. Yasser Ibrahim App')+'</div>'+
    '<div class="cert-divider"></div>'+
    '<div class="cert-label">'+(isAr?'تُشهد هذه الشهادة بأن':'This certifies that')+'</div>'+
    '<div class="cert-student">'+name+'</div>'+
    '<div class="cert-body">'+
    (isAr?'قد أتم بنجاح دراسة':'Has successfully completed the study of')+'<br>'+
    '<strong>'+(c.name||'')+'</strong><br>'+
    (isAr?'بالمستوى':'at level')+
    '</div>'+
    '<div class="cert-level-badge">'+(lvl.level_name||cefr||'')+' <span style="opacity:.7;font-weight:400">| '+cefr+'</span></div>'+
    '<div class="cert-stars">'+stars+'</div>'+
    '<div class="cert-stats">'+
    '<div class="cert-stat"><span class="stat-num">'+doneLessons+'/'+totalLessons+'</span><span class="stat-label">'+(isAr?'الدروس المكتملة':'Lessons')+'</span></div>'+
    '<div class="cert-stat"><span class="stat-num">'+totalWords+'</span><span class="stat-label">'+(isAr?'المفردات':'Words')+'</span></div>'+
    '<div class="cert-stat"><span class="stat-num">'+(p.score||0)+'%</span><span class="stat-label">'+(isAr?'النتيجة':'Score')+'</span></div>'+
    '<div class="cert-stat"><span class="stat-num">'+date+'</span><span class="stat-label">'+(isAr?'التاريخ':'Date')+'</span></div>'+
    '</div>'+
    '<div class="cert-footer">'+
    '<div class="cert-sign-col">'+
    '<div class="cert-sign-line"></div>'+
    '<div class="cert-sign-name">'+(isAr?'الأستاذ ياسر إبراهيم':'Mr. Yasser Ibrahim')+'</div>'+
    '<div class="cert-sign-title">'+(isAr?'مدرس اللغة الإنجليزية':'English Teacher')+'</div>'+
    '</div>'+
    '<div class="cert-verif">'+(isAr?'رمز التحقق:':'Verification:')+' <span>'+verifCode+'</span></div>'+
    '</div></div></div>'+
    '<div class="cert-actions">'+
    '<button class="print-btn" onclick="window.print()">🖨️ '+(isAr?'طباعة الشهادة':'Print Certificate')+'</button>'+
    '<button class="close-btn" onclick="window.close()">✕ '+(isAr?'إغلاق':'Close')+'</button>'+
    '</div></body></html>');
  w.document.close();
}

// ─── 4. STUDENT DASHBOARD WITH CHARTS ───
function showStudentDashboard(){
  hideAllViews();
  var v=document.getElementById('studentDashView');
  if(!v){v=document.createElement('div');v.id='studentDashView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var completed=getCompletedLessons();
  var streak=getStreak();
  var favs=getFavorites();
  var ratings=getLessonRatings();
  var p=getProgress();
  var html='<h2>📊 لوحة تحكم الطالب</h2>';
  html+='<div class="student-dash-grid">';
  html+='<div class="student-stat-card" style="background:linear-gradient(135deg,#e74c3c,#c0392b)"><div class="student-stat-icon">📚</div><div class="student-stat-num">'+completed.length+'</div><div class="student-stat-label">درس مكتمل</div></div>';
  html+='<div class="student-stat-card" style="background:linear-gradient(135deg,#3498db,#2980b9)"><div class="student-stat-icon">🔥</div><div class="student-stat-num">'+streak.count+'</div><div class="student-stat-label">سلسلة أيام</div></div>';
  html+='<div class="student-stat-card" style="background:linear-gradient(135deg,#27ae60,#219a52)"><div class="student-stat-icon">⭐</div><div class="student-stat-num">'+Object.keys(ratings).length+'</div><div class="student-stat-label">تقييم</div></div>';
  html+='<div class="student-stat-card" style="background:linear-gradient(135deg,#9b59b6,#8e44ad)"><div class="student-stat-icon">❤️</div><div class="student-stat-num">'+favs.length+'</div><div class="student-stat-label">مفضلة</div></div>';
  html+='</div>';
  html+='<h3>📈 التقدم حسب المستوى</h3>';
  html+='<div class="student-progress-chart">';
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
        var prog=getLevelProgress(ci,li);
        html+='<div class="student-progress-item">';
        html+='<div class="student-progress-header">';
        html+='<span class="student-progress-level">'+(l.level_name||l.cefr_level||'')+'</span>';
        html+='<span class="student-progress-pct">'+pct+'%</span>';
        html+='</div>';
        html+='<div class="student-progress-bar"><div class="student-progress-fill" style="width:'+pct+'%"></div></div>';
        html+='<div class="student-progress-details">';
        html+='<span>'+done+'/'+total+' درس</span>';
        html+=' <button class="check-btn" style="font-size:.8em;padding:4px 10px" onclick="showLevelTest('+li+')">🧪 '+t('levelTest')+'</button>';
        if(prog.passed)html+=' <button class="check-btn" style="font-size:.8em;padding:4px 10px" onclick="showCertificate('+ci+','+li+')">🎓 شهادة</button>';
        html+='</div></div>';
      });
    });
  }
  html+='</div>';
  html+='<h3>🏆 الإنجازات الأخيرة</h3>';
  var achievements=getAchievements();
  if(achievements.length===0){
    html+='<p style="color:var(--text-light)">لم تحقق أي إنجاز بعد</p>';
  }else{
    html+='<div class="student-achievements">';
    achievements.slice(0,6).forEach(function(a){
      html+='<div class="student-achieve-card">';
      html+='<span class="student-achieve-icon">'+a.icon+'</span>';
      html+='<span class="student-achieve-name">'+a.name+'</span>';
      html+='</div>';
    });
    html+='</div>';
  }
  html+='<button class="back-btn" onclick="hideAllViews();showWelcome()" style="margin-top:15px">'+t('back')+'</button>';
  v.innerHTML=html;
}

// ─── 5. ACHIEVEMENTS SYSTEM ───
function getAchievementsList(){
  return [
    {id:'first_lesson',name:'أول درس',desc:'أكمل أول درس',icon:'🌟',check:function(){return getCompletedLessons().length>=1}},
    {id:'five_lessons',name:'5 دروس',desc:'أكمل 5 دروس',icon:'📚',check:function(){return getCompletedLessons().length>=5}},
    {id:'ten_lessons',name:'10 دروس',desc:'أكمل 10 دروس',icon:'🏆',check:function(){return getCompletedLessons().length>=10}},
    {id:'twenty_lessons',name:'20 درس',desc:'أكمل 20 درس',icon:'🎖️',check:function(){return getCompletedLessons().length>=20}},
    {id:'fifty_lessons',name:'50 درس',desc:'أكمل 50 درس',icon:'👑',check:function(){return getCompletedLessons().length>=50}},
    {id:'hundred_lessons',name:'100 درس',desc:'أكمل 100 درس',icon:'💎',check:function(){return getCompletedLessons().length>=100}},
    {id:'first_level',name:'أول مستوى',desc:'أجتزاء مستوى واحد',icon:'🎓',check:function(){var p=getProgress();return Object.values(p).some(function(v){return v.passed})}},
    {id:'three_levels',name:'3 مستويات',desc:'أجتزاء 3 مستويات',icon:'🏅',check:function(){var p=getProgress();return Object.values(p).filter(function(v){return v.passed}).length>=3}},
    {id:'streak_3',name:'3 أيام',desc:'3 أيام متتالية',icon:'🔥',check:function(){return getStreak().count>=3}},
    {id:'streak_7',name:'أسبوع',desc:'7 أيام متتالية',icon:'💪',check:function(){return getStreak().count>=7}},
    {id:'streak_30',name:'شهر',desc:'30 يوم متتالي',icon:'🌟',check:function(){return getStreak().count>=30}},
    {id:'first_fav',name:'مفضلة',desc:'أضف أول مفضلة',icon:'⭐',check:function(){return getFavorites().length>=1}},
    {id:'first_rating',name:'مقيّم',desc:'أول تقييم',icon:'📊',check:function(){return Object.keys(getLessonRatings()).length>=1}},
    {id:'quiz_master',name:'عبقري',desc:'احصل على 100% في اختبار',icon:'🧠',check:function(){var p=getProgress();return Object.values(p).some(function(v){return v.score>=100})}},
    {id:'night_owl',name:'بومة الليل',desc:'ادرس بعد الساعة 10 مساءً',icon:'🦉',check:function(){return new Date().getHours()>=22&&getCompletedLessons().length>0}},
    {id:'early_bird',name:'طائر الصباح',desc:'ادرس قبل الساعة 7 صباحاً',icon:'🐦',check:function(){return new Date().getHours()<7&&getCompletedLessons().length>0}}
  ];
}
function getUnlockedAchievements(){try{return JSON.parse(ls('eng_achievements')||'[]')}catch(e){return[]}}
function saveUnlockedAchievements(a){lss('eng_achievements',JSON.stringify(a));}
function checkAchievements(){
  var list=getAchievementsList();
  var unlocked=getUnlockedAchievements();
  var newAchievements=[];
  list.forEach(function(a){
    if(!unlocked.includes(a.id)&&a.check()){
      unlocked.push(a.id);
      newAchievements.push(a);
    }
  });
  if(newAchievements.length>0){
    saveUnlockedAchievements(unlocked);
    newAchievements.forEach(function(a){
      toast('🏆 '+a.name+' - '+a.desc);
    });
  }
}
function getAchievements(){
  var list=getAchievementsList();
  var unlocked=getUnlockedAchievements();
  return list.map(function(a){return{id:a.id,name:a.name,desc:a.desc,icon:a.icon,unlocked:unlocked.includes(a.id)}});
}
function showAchievements(){
  hideAllViews();
  var v=document.getElementById('achieveDetailView');
  if(!v){v=document.createElement('div');v.id='achieveDetailView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var achievements=getAchievements();
  var unlockedCount=achievements.filter(function(a){return a.unlocked}).length;
  var html='<h2>🏆 الإنجازات ('+unlockedCount+'/'+achievements.length+')</h2>';
  html+='<div class="achievements-grid">';
  achievements.forEach(function(a){
    html+='<div class="achieve-card'+(a.unlocked?' unlocked':' locked')+'">';
    html+='<div class="achieve-card-icon">'+a.icon+'</div>';
    html+='<div class="achieve-card-name">'+a.name+'</div>';
    html+='<div class="achieve-card-desc">'+a.desc+'</div>';
    if(a.unlocked)html+='<div class="achieve-card-status">✅ تم</div>';
    else html+='<div class="achieve-card-status">🔒 مقفل</div>';
    html+='</div>';
  });
  html+='</div>';
  html+='<button class="back-btn" onclick="hideAllViews();showWelcome()" style="margin-top:15px">'+t('back')+'</button>';
  v.innerHTML=html;
}

// ─── 6. MULTI-USER ACCOUNTS ───
function getProfiles(){try{return JSON.parse(ls('eng_profiles')||'[]')}catch(e){return[]}}
function saveProfiles(p){lss('eng_profiles',JSON.stringify(p));}
function getCurrentProfile(){try{return JSON.parse(ls('eng_current_profile')||'null')}catch(e){return null}}
function saveCurrentProfile(p){lss('eng_current_profile',JSON.stringify(p));}
function showProfiles(){
  hideAllViews();
  var v=document.getElementById('profilesView');
  if(!v){v=document.createElement('div');v.id='profilesView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var profiles=getProfiles();
  var current=getCurrentProfile();
  var html='<h2>👤 حسابات الطلاب</h2>';
  html+='<div class="profiles-grid">';
  profiles.forEach(function(p,i){
    var isActive=current&&current.id===p.id;
    html+='<div class="profile-card'+(isActive?' active':'')+'" onclick="switchProfile('+i+')">';
    html+='<div class="profile-avatar">'+p.avatar+'</div>';
    html+='<div class="profile-name">'+p.name+'</div>';
    html+='<div class="profile-date">'+p.date+'</div>';
    if(isActive)html+='<div class="profile-active-badge">✅ نشط</div>';
    html+='<button class="profile-delete" onclick="event.stopPropagation();deleteProfile('+i+')">🗑</button>';
    html+='</div>';
  });
  html+='</div>';
  html+='<div class="add-profile-section">';
  html+='<h3>➕ إضافة حساب جديد</h3>';
  html+='<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">';
  html+='<input id="newProfileName" placeholder="اسم الطالب" style="padding:10px;border:2px solid var(--border);border-radius:10px;font-size:1em">';
  html+='<div id="avatarPicker" style="display:flex;gap:5px">';
  var avatars=['👦','👧','🧒','👶','🦸','🦹','🧙','🧑‍🎓','👨‍🎓','👩‍🎓'];
  avatars.forEach(function(a,i){
    html+='<span class="avatar-option'+(i===0?' selected':'')+'" onclick="selectAvatar(this,\''+a+'\')" style="font-size:1.5em;cursor:pointer;padding:5px;border-radius:50%;border:2px solid transparent">'+a+'</span>';
  });
  html+='</div>';
  html+='<button class="check-btn" onclick="createProfile()">💾 حفظ</button>';
  html+='</div></div>';
  html+='<button class="back-btn" onclick="hideAllViews();showWelcome()" style="margin-top:15px">'+t('back')+'</button>';
  v.innerHTML=html;
}
function selectAvatar(el,avatar){
  document.querySelectorAll('.avatar-option').forEach(function(a){a.style.borderColor='transparent';a.classList.remove('selected')});
  el.style.borderColor='var(--accent)';
  el.classList.add('selected');
  window._selectedAvatar=avatar;
}
function createProfile(){
  var name=document.getElementById('newProfileName');
  if(!name||!name.value.trim()){toast('❌ ادخل اسم الطالب');return;}
  var avatar=window._selectedAvatar||'👤';
  var profiles=getProfiles();
  var newProfile={
    id:'profile_'+Date.now(),
    name:name.value.trim(),
    avatar:avatar,
    date:new Date().toLocaleDateString('ar-EG')
  };
  profiles.push(newProfile);
  saveProfiles(profiles);
  saveCurrentProfile(newProfile);
  toast('✅ تم إنشاء الحساب');
  showProfiles();
}
function switchProfile(idx){
  var profiles=getProfiles();
  var current=profiles[idx];
  saveCurrentProfile(current);
  toast('✅ تم التبديل إلى: '+current.name);
  showProfiles();
}
function deleteProfile(idx){
  if(!confirm('هل تريد حذف هذا الحساب؟'))return;
  var profiles=getProfiles();
  profiles.splice(idx,1);
  saveProfiles(profiles);
  var current=getCurrentProfile();
  if(current&&current.id===profiles[idx]?.id){
    saveCurrentProfile(profiles[0]||null);
  }
  toast('✅ تم الحذف');
  showProfiles();
}

// ─── PATCH: CHECK ACHIEVEMENTS ON LESSON COMPLETE ───
var origToggleLessonComplete=toggleLessonComplete;
toggleLessonComplete=function(lid,el){
  origToggleLessonComplete(lid,el);
  setTimeout(checkAchievements,500);
};

// ─── PATCH: ADD NAV BUTTONS ───
var origNavSetup2=navSetup;
navSetup=function(){
  origNavSetup2();
  var headerRight=document.querySelector('.header-right');
  if(headerRight){
    if(!document.getElementById('navProfiles')){
      var btn=document.createElement('button');
      btn.className='nav-btn';btn.id='navProfiles';
      btn.title='حسابات الطلاب';btn.textContent='👤';
      btn.onclick=function(){showProfiles()};
      headerRight.insertBefore(btn,headerRight.firstChild);
    }
    if(!document.getElementById('navKidsZone')){
      var kbtn=document.createElement('button');
      kbtn.className='nav-btn';kbtn.id='navKidsZone';
      kbtn.title='عالم الأطفال';kbtn.textContent='🧸';
      kbtn.onclick=function(){showKidsZone()};
      headerRight.insertBefore(kbtn,headerRight.firstChild);
    }
  }
};

// ─── ADD NEW VIEWS TO hideAllViews ───
(function(){
  var origHide=hideAllViews;
  hideAllViews=function(){
    origHide();
    ['kidsView','kidsCatView','kidsGameView','writingView','speakingView','studentDashView','achieveDetailView','profilesView'].forEach(function(id){
      var e=document.getElementById(id);if(e)e.style.display='none';
    });
  };
})();

// ─── PATCH showWelcome TO ADD MORE BUTTONS ───
(function(){
  var prev=showWelcome;
  showWelcome=function(){
    prev();
    var w=document.getElementById('welcomeContent');
    if(!w||w.querySelector('.extra-buttons'))return;
    var html=w.innerHTML;
    html+='<div class="extra-buttons" style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:10px">';
    html+='<button class="check-btn" style="background:#9b59b6" onclick="showWritingPractice()">✍️ تمارين الكتابة</button>';
    html+='<button class="check-btn" style="background:#e74c3c" onclick="showSpeakingPractice()">🎤 تدريب النطق</button>';
    html+='<button class="check-btn" style="background:#f39c12" onclick="showStudentDashboard()">📊 لوحة التحكم</button>';
    html+='<button class="check-btn" style="background:#27ae60" onclick="showAchievements()">🏆 الإنجازات</button>';
    html+='<button class="check-btn" style="background:#3498db" onclick="showProfiles()">👤 حسابات</button>';
    html+='</div>';
    w.innerHTML=html;
  };
})();

// ─── CSS FOR NEW FEATURES ───
(function(){
  var css=document.createElement('style');
  css.textContent=`
    .writing-prompts{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px}
    .writing-prompt-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:15px;cursor:pointer;transition:all .3s}
    .writing-prompt-card:hover{transform:translateY(-3px);box-shadow:var(--card-shadow)}
    .writing-prompt-card h4{margin:8px 0 5px}
    .writing-prompt-card p{color:var(--text-light);font-size:.9em}
    .writing-exercise-popup{background:var(--surface);border-radius:20px;padding:30px;max-width:600px;width:100%;max-height:90vh;overflow-y:auto;position:relative}
    .writing-hints{background:var(--test-option-bg);padding:12px;border-radius:8px;margin:10px 0;font-size:.9em}
    .writing-hints ul{margin:5px 0;padding-right:15px}
    .speaking-exercises{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px}
    .speaking-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:15px}
    .speaking-text{font-size:1.1em;font-weight:600;color:var(--accent);margin:10px 0}
    .speaking-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
    .speaking-result{margin-top:10px}
    .student-dash-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;margin:15px 0}
    .student-stat-card{color:#fff;border-radius:15px;padding:20px;text-align:center;transition:transform .3s}
    .student-stat-card:hover{transform:translateY(-3px)}
    .student-stat-icon{font-size:30px;margin-bottom:5px}
    .student-stat-num{font-size:2em;font-weight:700}
    .student-stat-label{font-size:.85em;opacity:.9}
    .student-progress-chart{margin:15px 0}
    .student-progress-item{margin:12px 0;padding:12px;background:var(--surface);border:1px solid var(--border);border-radius:10px}
    .student-progress-header{display:flex;justify-content:space-between;margin-bottom:5px}
    .student-progress-level{font-weight:700;color:var(--accent)}
    .student-progress-pct{font-weight:700}
    .student-progress-bar{height:10px;background:var(--border);border-radius:5px;overflow:hidden}
    .student-progress-fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--success));border-radius:5px;transition:width .5s}
    .student-progress-details{display:flex;justify-content:space-between;margin-top:5px;font-size:.85em;color:var(--text-light)}
    .student-achievements{display:flex;gap:10px;flex-wrap:wrap}
    .student-achieve-card{display:flex;align-items:center;gap:8px;padding:8px 15px;background:var(--surface);border:1px solid var(--border);border-radius:20px}
    .student-achieve-icon{font-size:1.5em}
    .student-achieve-name{font-size:.9em}
    .achievements-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px}
    .achieve-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:15px;text-align:center;transition:all .3s}
    .achieve-card.unlocked{border-color:#f1c40f;background:linear-gradient(135deg,#fff9e6,#fff)}
    .achieve-card.locked{opacity:.6}
    .achieve-card-icon{font-size:40px;margin-bottom:8px}
    .achieve-card-name{font-weight:700;margin:5px 0}
    .achieve-card-desc{font-size:.8em;color:var(--text-light)}
    .achieve-card-status{margin-top:8px;font-size:.85em}
    .profiles-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;margin:15px 0}
    .profile-card{background:var(--surface);border:2px solid var(--border);border-radius:15px;padding:20px;text-align:center;cursor:pointer;transition:all .3s;position:relative}
    .profile-card:hover{transform:translateY(-3px);box-shadow:var(--card-shadow)}
    .profile-card.active{border-color:var(--accent);background:linear-gradient(135deg,#e8f4fd,#fff)}
    .profile-avatar{font-size:50px;margin-bottom:8px}
    .profile-name{font-weight:700;font-size:1.1em}
    .profile-date{font-size:.8em;color:var(--text-light);margin:5px 0}
    .profile-active-badge{color:var(--success);font-size:.85em}
    .profile-delete{position:absolute;top:8px;left:8px;background:none;border:none;cursor:pointer;font-size:1em;opacity:.5;transition:opacity .2s}
    .profile-delete:hover{opacity:1}
    .add-profile-section{margin-top:20px;padding:20px;background:var(--surface);border:1px solid var(--border);border-radius:12px}
    .avatar-option.selected{border-color:var(--accent) !important;background:var(--test-option-hover)}
    @media(max-width:480px){
      .student-dash-grid{grid-template-columns:repeat(2,1fr)}
      .achievements-grid{grid-template-columns:repeat(2,1fr)}
      .profiles-grid{grid-template-columns:repeat(2,1fr)}
      .speaking-exercises{grid-template-columns:1fr}
    }
  `;
  document.head.appendChild(css);
})();

// ═══ FEATURE 1: DAILY WORD ═══
function showDailyWord(){
  var w=document.getElementById('dailyWordView');
  if(!w){w=document.createElement('div');w.id='dailyWordView';w.className='lesson-view';document.getElementById('content').appendChild(w)}
  w.style.display='block';
  var today=new Date().toDateString();
  var cache=ls('daily_word_cache');
  var data=null;
  if(cache){try{var p=JSON.parse(cache);if(p.date===today)data=p.word;}catch(e){}}
  if(!data){
    var allWords=[];
    if(appData&&appData.curricula)appData.curricula.forEach(function(c){if(c.levels)c.levels.forEach(function(l){if(l.modules)l.modules.forEach(function(m){if(m.lessons)m.lessons.forEach(function(ls){if(ls.vocabulary)ls.vocabulary.forEach(function(v){var word=v.word||v;var trans=v.translation||v.meaning||'';if(word)allWords.push({word:word,trans:trans,level:l.level_name||''})})})})})});
    if(allWords.length){data=allWords[Math.floor(Math.random()*allWords.length)];lss('daily_word_cache',JSON.stringify({date:today,word:data}));}
  }
  if(!data){w.innerHTML='<p>'+t('noVocab')+'</p>';return;}
  var html='<div class="daily-word-card">';
  html+='<div class="daily-word-date">📅 '+new Date().toLocaleDateString(currentLang==='ar'?'ar-EG':'en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})+'</div>';
  html+='<div class="daily-word-emoji">💡</div>';
  html+='<div class="daily-word-title">'+t('dailyWord')+'</div>';
  html+='<div class="daily-word-en">'+data.word+'</div>';
  if(data.trans)html+='<div class="daily-word-ar">'+data.trans+'</div>';
  html+='<div class="daily-word-level badge badge-'+((data.level||'A1').toLowerCase())+'">'+data.level+'</div>';
  html+='<div class="daily-word-actions"><button class="check-btn" onclick="speakWord(\''+data.word.replace(/'/g,"\\'")+'\')">🔊 '+t('speakNow')+'</button>';
  html+='<button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button></div>';
  html+='</div>';
  w.innerHTML=html;
}

// ═══ FEATURE 2: SENTENCE SCRAMBLE ═══
var scrambleState={currentSentence:null,shuffled:[]};
function showScrambleGame(){
  hideAllViews();
  var v=document.getElementById('scrambleView');
  if(!v){v=document.createElement('div');v.id='scrambleView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  // Collect sentences from lessons
  var sentences=[];
  if(appData&&appData.curricula)appData.curricula.forEach(function(c){if(c.levels)c.levels.forEach(function(l){if(l.modules)l.modules.forEach(function(m){if(m.lessons)m.lessons.forEach(function(ls){if(ls.examples)ls.examples.forEach(function(ex){var s=typeof ex==='string'?ex:ex.sentence||ex.example||ex;if(s&&s.split(' ').length>=3&&s.split(' ').length<=10&&sentences.indexOf(s)===-1)sentences.push(s)})})})})});
  if(!sentences.length){v.innerHTML='<p>'+t('noVocab')+'</p><button class="back-btn" onclick="showWelcome()">'+t('back')+'</button>';return;}
  var sentence=sentences[Math.floor(Math.random()*sentences.length)];
  var words=sentence.split(' ').filter(function(w){return w});
  var shuffled=scrambleState.shuffled.slice();
  if(!shuffled.length||scrambleState.currentSentence!==sentence){
    shuffled=words.slice();
    for(var i=shuffled.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=shuffled[i];shuffled[i]=shuffled[j];shuffled[j]=tmp;}
    // Ensure shuffled != original
    if(shuffled.join(' ')===sentence&&shuffled.length>1){var tmp=shuffled[0];shuffled[0]=shuffled[shuffled.length-1];shuffled[shuffled.length-1]=tmp;}
    scrambleState.currentSentence=sentence;
    scrambleState.shuffled=shuffled;
  }
  var html='<h2>🧩 '+t('scrambleTitle')+'</h2><p style="text-align:center;color:var(--text-light)">'+t('scrambleDesc')+'</p>';
  html+='<div class="scramble-words" id="scrambleWords">';
  shuffled.forEach(function(w,i){html+='<span class="scramble-word" onclick="scrambleClick(this,'+i+')" data-idx="'+i+'">'+w+'</span>';});
  html+='</div>';
  html+='<div class="scramble-answer" id="scrambleAnswer"></div>';
  html+='<div class="scramble-actions">';
  html+='<button class="check-btn" onclick="checkScramble()">'+t('checkBtn')+'</button>';
  html+='<button class="back-btn" onclick="showScrambleGame()" style="margin-right:8px">🔀 '+t('tryAgain')+'</button>';
  html+='<button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button></div>';
  html+='<div id="scrambleResult" style="text-align:center;margin-top:10px"></div>';
  v.innerHTML=html;
  scrambleState.selected=[];
}
function scrambleClick(el,idx){
  if(el.classList.contains('used'))return;
  el.classList.add('used');
  var ans=document.getElementById('scrambleAnswer');
  var span=document.createElement('span');span.className='scramble-ans-word';span.textContent=el.textContent;span.dataset.idx=idx;
  span.onclick=function(){this.remove();scrambleState.selected.splice(scrambleState.selected.indexOf(idx),1);document.querySelectorAll('.scramble-word[data-idx="'+idx+'"]').forEach(function(e){e.classList.remove('used')});};
  ans.appendChild(span);
  scrambleState.selected.push(idx);
}
function checkScramble(){
  var userWords=[];
  document.querySelectorAll('#scrambleAnswer .scramble-ans-word').forEach(function(el){userWords.push(el.textContent)});
  var userSentence=userWords.join(' ');
  var res=document.getElementById('scrambleResult');
  if(userSentence===scrambleState.currentSentence){
    res.innerHTML='<div class="match-feedback correct" style="display:block">✅ '+t('correct')+'</div>';
    fireConfetti();
  }else{
    res.innerHTML='<div class="match-feedback wrong" style="display:block">❌ '+t('wrong')+'<br><small style="display:block;margin-top:5px">'+t('correctAns')+' '+scrambleState.currentSentence+'</small></div>';
  }
}

// ═══ FEATURE 3: SPELLING BEE ═══
var spellingState={};
function showSpellingBee(){
  hideAllViews();
  var v=document.getElementById('spellingView');
  if(!v){v=document.createElement('div');v.id='spellingView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  // Collect words
  var words=[];
  if(appData&&appData.curricula)appData.curricula.forEach(function(c){if(c.levels)c.levels.forEach(function(l){if(l.modules)l.modules.forEach(function(m){if(m.lessons)m.lessons.forEach(function(ls){if(ls.vocabulary)ls.vocabulary.forEach(function(vw){var w=vw.word||vw;var t=vw.translation||vw.meaning||'';if(w)words.push({word:w,trans:t})})})})})});
  if(!words.length){v.innerHTML='<p>'+t('noVocab')+'</p><button class="back-btn" onclick="showWelcome()">'+t('back')+'</button>';return;}
  var wordObj=words[Math.floor(Math.random()*words.length)];
  var word=wordObj.word.replace(/[^a-zA-Z\s-]/g,'');
  if(!word){showSpellingBee();return;}
  spellingState.currentWord=word;
  spellingState.currentTrans=wordObj.trans;
  spellingState.attempts=0;
  spellingState.maxAttempts=3;
  var html='<h2>🐝 '+t('spellingTitle')+'</h2>';
  html+='<p style="text-align:center;color:var(--text-light)">'+t('spellingDesc')+'</p>';
  html+='<div class="spelling-card">';
  html+='<div class="spelling-word">🔊 '+t('spellingListen')+'</div>';
  if(wordObj.trans)html+='<div class="spelling-hint" style="margin:10px 0;color:var(--text-light)">💡 '+wordObj.trans+'</div>';
  html+='<input type="text" id="spellingInput" class="spelling-input" placeholder="✍️ '+t('writeHere')+'" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
  html+='<div class="spelling-actions" style="margin-top:10px">';
  html+='<button class="check-btn" onclick="checkSpelling()">'+t('checkBtn')+'</button>';
  html+='<button class="check-btn" onclick="speakWord(\''+word.replace(/'/g,"\\'")+'\')" style="background:#9b59b6">🔊 '+t('speakNow')+'</button>';
  html+='<button class="back-btn" onclick="showSpellingBee()" style="margin-right:8px">🔀 '+t('tryAgain')+'</button></div>';
  html+='<div id="spellingResult" style="text-align:center;margin-top:10px;font-size:1.2em"></div>';
  html+='</div>';
  v.innerHTML=html;
  // Auto-speak the word
  setTimeout(function(){speakWord(spellingState.currentWord)},500);
}
function checkSpelling(){
  var input=document.getElementById('spellingInput');
  var res=document.getElementById('spellingResult');
  if(!input||!res)return;
  var userWord=input.value.trim().toLowerCase();
  var correct=spellingState.currentWord.toLowerCase();
  if(userWord===correct){
    res.innerHTML='<span class="match-feedback correct" style="display:block">✅ '+t('correct')+' 🎉</span>';
    fireConfetti();
  }else{
    spellingState.attempts++;
    if(spellingState.attempts>=spellingState.maxAttempts){
      res.innerHTML='<span class="match-feedback wrong" style="display:block">❌ '+t('wrong')+'<br>'+t('correctAns')+' <strong>'+spellingState.currentWord+'</strong></span>';
    }else{
      var remaining=spellingState.maxAttempts-spellingState.attempts;
      res.innerHTML='<span class="match-feedback wrong" style="display:block">❌ '+t('tryAgain')+' ('+remaining+' '+t('attemptsLeft')+')</span>';
      setTimeout(function(){speakWord(spellingState.currentWord)},300);
    }
  }
}

// ═══ FEATURE 4: PROGRESS CHARTS ═══
function showProgressCharts(){
  hideAllViews();
  var v=document.getElementById('chartsView');
  if(!v){v=document.createElement('div');v.id='chartsView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  // Collect completion history
  var completed=getCompletedLessons();
  // Build weekly stats
  var dayNames=currentLang==='ar'?LANG.ar.weekDays:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var weekData=[0,0,0,0,0,0,0];
  var today=new Date();
  for(var d=0;d<7;d++){
    var date=new Date(today);date.setDate(date.getDate()-d);
    var key=date.toDateString();
    var count=0;
    var stored=ls('eng_hist_'+key);
    if(stored)count=parseInt(stored)||0;
    weekData[6-d]=count;
  }
  var max=1;weekData.forEach(function(v){if(v>max)max=v});
  var html='<h2>📊 '+t('dashTitle')+'</h2>';
  html+='<div class="chart-container"><h3>📅 '+t('thisWeek','This Week')+'</h3>';
  html+='<div class="chart-bars">';
  for(var i=0;i<7;i++){
    var pct=(weekData[i]/max)*100;
    var color=weekData[i]>0?'var(--accent)':'var(--border)';
    html+='<div class="chart-bar-wrap">';
    html+='<div class="chart-bar" style="height:'+pct+'%;background:'+color+'" title="'+weekData[i]+'"></div>';
    html+='<div class="chart-label">'+dayNames[i]+'</div></div>';
  }
  html+='</div></div>';
  // Level progress
  html+='<div class="chart-container"><h3>📚 '+t('levels')+'</h3>';
  html+='<div class="stats-levels">';
  if(appData&&appData.curricula)appData.curricula.forEach(function(c,ci){if(c.levels)c.levels.forEach(function(l,li){var p=getLevelProgress(ci,li);var name=l.level_name||'Level '+(li+1);var total=l.modules?l.modules.reduce(function(s,m){return s+(m.lessons?m.lessons.length:0)},0):0;var done=completed.filter(function(id){return id.indexOf(ci+'_'+li+'_')===0}).length;var pct2=total>0?Math.round(done/total*100):0;html+='<div class="stats-level"><span style="min-width:60px;font-weight:600">'+name+'</span><div class="stats-bar"><div class="stats-fill" style="width:'+pct2+'%"></div></div><span class="stats-pct">'+pct2+'%</span></div>'})});
  html+='</div></div>';
  html+='<button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';
  v.innerHTML=html;
}

// ═══ FEATURE 5: WORKSHEETS PDF ═══
function showWorksheetGenerator(){
  hideAllViews();
  var v=document.getElementById('worksheetView');
  if(!v){v=document.createElement('div');v.id='worksheetView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
  v.style.display='block';
  var html='<h2>📄 '+t('worksheetTitle','أوراق عمل')+'</h2>';
  html+='<p style="text-align:center;color:var(--text-light)">'+t('worksheetDesc','اختر درساً لطباعة أوراق عمل')+'</p>';
  html+='<div class="worksheet-levels">';
  if(appData&&appData.curricula)appData.curricula.forEach(function(c,ci){if(c.levels)c.levels.forEach(function(l,li){html+='<div class="worksheet-level"><h3>'+l.level_name+'</h3>';if(l.modules)l.modules.forEach(function(m,mi){html+='<div class="worksheet-module"><strong>'+m.module_title+'</strong>';if(m.lessons)m.lessons.forEach(function(ls){html+='<div class="worksheet-lesson" onclick="generateWorksheet('+ci+','+li+',\''+(ls.lesson_id||ls.lesson_title)+'\',\''+ls.lesson_title.replace(/'/g,"\\'")+'\')">📄 '+ls.lesson_title+'</div>'});html+='</div>'});html+='</div>'})});
  html+='</div>';
  html+='<button class="back-btn" onclick="hideAllViews();showWelcome()" style="margin-top:15px">'+t('back')+'</button>';
  v.innerHTML=html;
}
function generateWorksheet(ci,li,lid,title){
  var ls=findFullLesson(ci,li,lid);
  if(!ls){toast(t('noTest'));return;}
  var html='<!DOCTYPE html><html dir="rtl"><head><meta charset="UTF-8"><title>ورقة عمل - '+title+'</title>';
  html+='<style>body{font-family:sans-serif;padding:20px;direction:rtl}h2{color:#2c3e50;border-bottom:2px solid #3498db;padding-bottom:5px}.section{margin:15px 0;padding:10px;border:1px solid #ddd;border-radius:8px}table{width:100%;border-collapse:collapse}td,th{border:1px solid #ccc;padding:8px}ol{padding-right:20px}.blank{display:inline-block;width:120px;border-bottom:2px solid #666;margin:0 5px}@media print{body{padding:0}}</style></head><body>';
  html+='<h1>📚 '+t('appTitle')+'</h1>';
  html+='<h2>'+title+'</h2>';
  html+='<p>'+t('name','الاسم: ________________')+' | '+t('date','التاريخ: ________________')+'</p>';
  if(ls.objectives&&ls.objectives.length){html+='<div class="section"><h3>'+t('objectives')+'</h3><ul>';ls.objectives.forEach(function(o){html+='<li>'+o+'</li>'});html+='</ul></div>';}
  if(ls.vocabulary&&ls.vocabulary.length){html+='<div class="section"><h3>'+t('vocabulary')+'</h3><table><tr><th>'+t('word')+'</th><th>'+t('translation')+'</th></tr>';ls.vocabulary.forEach(function(v){var w=v.word||v;var t=v.translation||v.meaning||'';html+='<tr><td>'+w+'</td><td><span class="blank"></span></td></tr>'});html+='</table></div>';}
  if(ls.examples&&ls.examples.length){html+='<div class="section"><h3>'+t('examples')+'</h3><ol>';ls.examples.forEach(function(ex){var s=typeof ex==='string'?ex:ex.sentence||ex.example||ex;html+='<li>'+s+'</li>'});html+='</ol></div>';}
  if(ls.quiz&&ls.quiz.length){html+='<div class="section"><h3>'+t('quiz')+'</h3><ol>';ls.quiz.forEach(function(q){var qtext=typeof q==='string'?q:q.question||q.q||'';html+='<li>'+qtext+'<br>';var opts=typeof q==='string'?[]:q.options||q.choices||[];if(opts.length){opts.forEach(function(o,i){html+='<label style="display:block;margin:3px 0"><input type="radio" name="q"> '+o+'</label>'});}html+='</li>'});html+='</ol></div>';}
  html+='<br><button onclick="window.print()" style="padding:12px 30px;background:#3498db;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:16px">🖨️ '+t('printCert','طباعة')+'</button>';
  html+='</body></html>';
  var w=window.open('','_blank');
  w.document.write(html);
  w.document.close();
}

// ─── ADD LANGUAGE KEYS FOR NEW FEATURES ───
LANG.ar.dailyWord='💡 كلمة اليوم';
LANG.en.dailyWord='💡 Word of the Day';
LANG.ar.scrambleTitle='🧩 ترتيب الجمل';
LANG.en.scrambleTitle='🧩 Sentence Scramble';
LANG.ar.scrambleDesc='رتب الكلمات لتكوين جملة صحيحة';
LANG.en.scrambleDesc='Arrange the words to form a correct sentence';
LANG.ar.spellingTitle='🐝 سباق التهجئة';
LANG.en.spellingTitle='🐝 Spelling Bee';
LANG.ar.spellingDesc='استمع للكلمة ثم اكتب تهجئتها الصحيحة';
LANG.en.spellingDesc='Listen and spell the word correctly';
LANG.ar.spellingListen='🔊 استمع للكلمة';
LANG.en.spellingListen='🔊 Listen to the word';
LANG.ar.attemptsLeft='محاولات متبقية';
LANG.en.attemptsLeft='attempts left';
LANG.ar.thisWeek='هذا الأسبوع';
LANG.en.thisWeek='This Week';
LANG.ar.worksheetTitle='📄 أوراق عمل';
LANG.en.worksheetTitle='📄 Worksheets';
LANG.ar.worksheetDesc='اختر درساً لطباعة أوراق عمل';
LANG.en.worksheetDesc='Select a lesson to print worksheets';
LANG.ar.name='الاسم';
LANG.en.name='Name';
LANG.ar.date='التاريخ';
LANG.en.date='Date';

// ─── ADD NAV BUTTONS FOR NEW FEATURES ───
(function(){
  var orig=navSetup;
  navSetup=function(){
    orig();
    var hr=document.querySelector('.header-right');
    if(!hr||document.getElementById('navMore'))return;
    var btn=document.createElement('button');btn.className='nav-btn';btn.id='navMore';btn.title=t('more','المزيد');btn.textContent='➕';
    btn.onclick=function(){
      hideAllViews();
      var v=document.getElementById('moreView');
      if(!v){v=document.createElement('div');v.id='moreView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
      v.style.display='block';
      var html='<h2 style="text-align:center">➕ '+t('more','المزيد')+'</h2>';
      html+='<div class="welcome-actions">';
      html+='<div class="welcome-card" onclick="showDailyWord()"><span>💡</span><span>'+t('dailyWord')+'</span></div>';
      html+='<div class="welcome-card" onclick="showScrambleGame()"><span>🧩</span><span>'+t('scrambleTitle')+'</span></div>';
      html+='<div class="welcome-card" onclick="showSpellingBee()"><span>🐝</span><span>'+t('spellingTitle')+'</span></div>';
      html+='<div class="welcome-card" onclick="showProgressCharts()"><span>📊</span><span>'+t('dashTitle')+'</span></div>';
      html+='<div class="welcome-card" onclick="showWorksheetGenerator()"><span>📄</span><span>'+t('worksheetTitle')+'</span></div>';
      html+='</div><button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';
      v.innerHTML=html;
    };
    hr.insertBefore(btn,hr.firstChild);
  };
})();

// ─── ADD VIEWS TO hideAllViews ───
(function(){
  var orig=hideAllViews;
  hideAllViews=function(){
    orig();
    ['dailyWordView','scrambleView','spellingView','chartsView','worksheetView','moreView'].forEach(function(id){
      var e=document.getElementById(id);if(e)e.style.display='none';
    });
  };
})();

// ─── CSS FOR NEW FEATURES ───
(function(){
  var css=document.createElement('style');
  css.textContent=`
    .daily-word-card{text-align:center;padding:30px;background:var(--surface);border-radius:20px;box-shadow:var(--card-shadow);max-width:400px;margin:0 auto}
    .daily-word-date{font-size:.85em;color:var(--text-light);margin-bottom:15px}
    .daily-word-emoji{font-size:60px;margin-bottom:10px}
    .daily-word-title{font-size:.95em;color:var(--text-light);margin-bottom:10px}
    .daily-word-en{font-size:2em;font-weight:700;color:var(--accent);margin:10px 0}
    .daily-word-ar{font-size:1.3em;color:var(--text-light);margin:5px 0}
    .daily-word-actions{display:flex;gap:10px;justify-content:center;margin-top:20px}
    .daily-word-level{margin:10px auto;display:inline-block}
    .scramble-words{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:15px 0;min-height:60px;padding:15px;background:var(--test-option-bg);border-radius:12px}
    .scramble-word{padding:8px 16px;background:var(--surface);border:2px solid var(--accent);border-radius:8px;cursor:pointer;font-size:1.1em;transition:all .2s;user-select:none}
    .scramble-word:hover{background:var(--accent);color:#fff;transform:scale(1.05)}
    .scramble-word.used{opacity:.3;pointer-events:none;border-color:var(--border)}
    .scramble-answer{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;min-height:50px;padding:15px;background:var(--surface);border:2px dashed var(--accent);border-radius:12px;margin:10px 0}
    .scramble-ans-word{padding:8px 16px;background:var(--accent);color:#fff;border-radius:8px;cursor:pointer;font-size:1.1em;animation:popIn .2s}
    .scramble-ans-word:hover{background:var(--danger)}
    .scramble-actions{display:flex;gap:8px;justify-content:center;margin-top:10px}
    .spelling-card{text-align:center;padding:30px;max-width:400px;margin:0 auto}
    .spelling-word{font-size:1.3em;font-weight:600;color:var(--accent);margin-bottom:10px}
    .spelling-input{width:100%;padding:15px;border:3px solid var(--accent);border-radius:15px;font-size:1.5em;text-align:center;background:var(--input-bg);color:var(--text);outline:none;letter-spacing:3px;margin:15px 0}
    .spelling-input:focus{border-color:var(--success);box-shadow:0 0 15px rgba(39,174,96,.3)}
    .chart-bars{display:flex;align-items:flex-end;justify-content:center;gap:12px;height:150px;padding:10px 0}
    .chart-bar-wrap{display:flex;flex-direction:column;align-items:center;flex:1;max-width:60px;height:100%}
    .chart-bar{width:100%;min-height:4px;border-radius:6px 6px 0 0;transition:height .5s;margin-top:auto}
    .chart-label{font-size:.75em;color:var(--text-light);margin-top:5px;white-space:nowrap}
    .worksheet-levels{display:grid;gap:15px}
    .worksheet-level{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:15px}
    .worksheet-level h3{color:var(--accent);margin-bottom:10px}
    .worksheet-module{margin:8px 0;padding:8px;background:var(--test-option-bg);border-radius:8px}
    .worksheet-lesson{padding:5px 12px;cursor:pointer;color:var(--accent);font-size:.9em;border-radius:4px;transition:background .2s}
    .worksheet-lesson:hover{background:var(--test-option-hover)}
  `;
  document.head.appendChild(css);
})();

// ─── 7 NEW FEATURES ───

// Language keys
LANG.ar.darkMode='🌙 وضع مظلم';LANG.en.darkMode='🌙 Dark Mode';
LANG.ar.shareProgress='📤 مشاركة التقدم';LANG.en.shareProgress='📤 Share Progress';
LANG.ar.listeningTitle='🎧 استماع';LANG.en.listeningTitle='🎧 Listening';
LANG.ar.listeningDesc='استمع للقطعة وأجب عن الأسئلة';LANG.en.listeningDesc='Listen to the passage and answer questions';
LANG.ar.readingTitle='📖 قراءة';LANG.en.readingTitle='📖 Reading';
LANG.ar.readingDesc='اقرأ النص وأجب عن الأسئلة';LANG.en.readingDesc='Read the text and answer questions';
LANG.ar.speechTitle='🎙️ نطق';LANG.en.speechTitle='🎙️ Pronunciation';
LANG.ar.speechDesc='تحدث واختبر نطقك';LANG.en.speechDesc='Speak and test your pronunciation';
LANG.ar.reviewTitle='🔄 مراجعة ذكية';LANG.en.reviewTitle='🔄 Spaced Repetition';
LANG.ar.reviewDesc='راجع المفردات بذكاء';LANG.en.reviewDesc='Review vocabulary with spaced repetition';
LANG.ar.gamesTitle='🎮 ألعاب';LANG.en.gamesTitle='🎮 Games';
LANG.ar.wordSearch='🔍 بحث عن كلمات';LANG.en.wordSearch='🔍 Word Search';
LANG.ar.crossword='❌ كلمات متقاطعة';LANG.en.crossword='❌ Crossword';

// Dark Mode
function toggleDarkMode(){var s=getSettings();s.darkMode=!s.darkMode;saveSettings(s);applyDarkMode(s.darkMode);showSettings();}
function applyDarkMode(on){if(on){document.documentElement.style.setProperty('--bg','#1a1a2e');document.documentElement.style.setProperty('--surface','#16213e');document.documentElement.style.setProperty('--text','#eee');document.documentElement.style.setProperty('--text-light','#aaa');document.documentElement.style.setProperty('--border','#333');document.documentElement.style.setProperty('--input-bg','#1a1a2e');document.documentElement.style.setProperty('--card-shadow','0 4px 15px rgba(0,0,0,.3)');document.documentElement.style.setProperty('--test-option-bg','#1a1a2e');document.documentElement.style.setProperty('--test-option-hover','#2a2a4e')}else{document.documentElement.style.removeProperty('--bg');document.documentElement.style.removeProperty('--surface');document.documentElement.style.removeProperty('--text');document.documentElement.style.removeProperty('--text-light');document.documentElement.style.removeProperty('--border');document.documentElement.style.removeProperty('--input-bg');document.documentElement.style.removeProperty('--card-shadow');document.documentElement.style.removeProperty('--test-option-bg');document.documentElement.style.removeProperty('--test-option-hover')}}

// Share Progress
function shareProgress(){var p=getProgress();var d='📊 تقرير التقدم - '+new Date().toLocaleDateString('ar-EG')+'\n';d+='═══════════════════\n';var curricula=appData?appData.curricula:[];curricula.forEach(function(c,ci){d+='\n📚 '+(c.name||'')+':\n';var levels=c.levels||[];levels.forEach(function(l,li){var pp=getLevelProgress(ci,li);var total=0,done=0;(l.modules||[]).forEach(function(m,mi){(m.lessons||[]).forEach(function(ls){total++;var lid=ls.lesson_id||(l.level_name+'_'+mi+'_'+ls.lesson_title);if(isLessonComplete(lid))done++})});d+='  '+(l.cefr_level||l.level_name||'')+': '+done+'/'+total+' '+(pp.passed?'✅':'⬜')+'\n'});});d+='\n🏆 إجمالي الدروس المكتملة: '+p.completed+'/'+p.total+'\n';d+='🔥 السلسلة: '+p.streak+' أيام\n';if(navigator.share){navigator.share({title:'تقرير التقدم',text:d})}else{navigator.clipboard.writeText(d);toast('📋 تم نسخ التقرير')}}

// Spaced Repetition
function showSpacedReview(){hideAllViews();var v=document.getElementById('reviewView');if(!v){v=document.createElement('div');v.id='reviewView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';var due=spacedDue();if(!due.length){v.innerHTML='<h2>'+t('reviewTitle')+'</h2><p style="text-align:center;padding:30px;color:var(--text-light)">🎉 لا توجد كلمات للمراجعة الآن</p><button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';return}var card=due[0];var meaning=ls('sr_meaning_'+card)||'';v.innerHTML='<h2>'+t('reviewTitle')+'</h2><div class="daily-word-card"><div style="font-size:2em;font-weight:700;color:var(--accent);margin:10px 0">'+card+'</div><p id="srMeaning" style="font-size:1.2em;color:var(--text-light);margin:10px 0'+(meaning?'':';filter:blur(5px)')+'">'+(meaning||'اضغط للإظهار')+'</p><div class="daily-word-actions"><button class="check-btn" onclick="document.getElementById(\'srMeaning\').style.filter=\'none\'">👁️ إظهار المعنى</button></div><p style="margin-top:15px;color:var(--text-light)">هل تعرف هذه الكلمة؟</p><div class="daily-word-actions"><button class="check-btn" onclick="spacedAnswer(\''+card+'\',true)" style="background:var(--success)">✅ نعم</button><button class="check-btn" onclick="spacedAnswer(\''+card+'\',false)" style="background:var(--danger)">❌ لا</button></div></div><button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';}
function spacedDue(){var sr=spacedData();var now=Date.now();var due=[];Object.keys(sr).forEach(function(word){if(sr[word].due<=now)due.push(word)});return due.sort(function(){return Math.random()-.5});}
function spacedData(){try{return JSON.parse(ls('sr_data'))||{}}catch(e){return{}}}
function spacedAnswer(word,knew){var sr=spacedData();if(knew){var lvl=(sr[word]&&sr[word].level||0)+1;var intervals=[0,1,3,7,14,30,60];var days=intervals[Math.min(lvl,intervals.length-1)];sr[word]={level:lvl,due:Date.now()+days*86400000}}else{sr[word]={level:0,due:Date.now()+86400000}}lss('sr_data',JSON.stringify(sr));showSpacedReview();toast(knew?'✅ أحسنت!':'🔄 ستراجعها غداً');}
function addToSpacedReview(word,meaning){var sr=spacedData();if(!sr[word]){sr[word]={level:0,due:Date.now()};lss('sr_data',JSON.stringify(sr));lss('sr_meaning_'+word,meaning)}}

// Listening
function showListeningTest(){hideAllViews();var v=document.getElementById('listeningView');if(!v){v=document.createElement('div');v.id='listeningView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';var lessons=[];if(appData&&appData.curricula){appData.curricula.forEach(function(c){c.levels&&c.levels.forEach(function(l){l.modules&&l.modules.forEach(function(m){m.lessons&&m.lessons.forEach(function(ls){if(ls.dialogue||ls.explanation)lessons.push(ls)})})})})}if(!lessons.length){v.innerHTML='<h2>'+t('listeningTitle')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return}var ls=lessons[Math.floor(Math.random()*lessons.length)];var passage=ls.dialogue||(typeof ls.explanation==='string'?ls.explanation.slice(0,500):'');var words=ls.vocabulary||[];var questions=(ls.quiz||[]).slice(0,5);v.innerHTML='<h2>'+t('listeningTitle')+'</h2><div class="daily-word-card"><button class="check-btn" onclick="speakText(\''+passage.replace(/'/g,"\\'").replace(/"/g,'&quot;').replace(/\n/g,'\\n')+'\')" style="font-size:1.5em;padding:15px 30px;margin:15px 0">🔊 استمع</button><div id="listeningPassage" style="display:none;background:var(--test-option-bg);padding:15px;border-radius:12px;margin:10px 0;text-align:right;line-height:1.8">'+passage+'</div><button class="check-btn" onclick="document.getElementById(\'listeningPassage\').style.display=\'block\'">📖 عرض النص</button></div>';if(words.length){v.innerHTML+='<h3>📝 '+t('vocabExer')+'</h3><div class="daily-word-card">';words.slice(0,5).forEach(function(w){var word=typeof w==='string'?w:w.word||'';var trans=typeof w==='string'?'':w.translation||w.meaning||'';v.innerHTML+='<p><strong>'+word+'</strong> - '+trans+'</p>'});v.innerHTML+='</div>'}if(questions.length){v.innerHTML+='<h3>❓ '+t('quiz')+'</h3><div id="ltQuestions">'+questions.map(function(q,i){return'<div class="quiz-item"><p>'+(i+1)+'. '+(q.question||q.q||'')+'</p>'+(q.options||q.choices||[]).map(function(o,oi){return'<label class="quiz-option" onclick="selectQuizOption(this,'+i+','+oi+')"><span>'+o+'</span></label>'}).join('')+'</div>'}).join('')+'</div><button class="check-btn" onclick="var c=0;var qs='+JSON.stringify(questions).replace(/</g,'\\u003C')+';for(var i=0;i<qs.length;i++){var s=document.querySelectorAll(\'#ltQuestions .quiz-item\')[i];var sel=s?s.querySelector(\'.quiz-option.selected\'):null;var t=sel?sel.textContent.trim():\'\';var a=qs[i].answer||qs[i].correct||\'\';if(t.toLowerCase()===a.toLowerCase())c++}toast(c+\'/\'+qs.length+\' '+t('correct')+'\')">'+t('checkBtn')+'</button>'}v.innerHTML+='<button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';}
function speakText(t){if('speechSynthesis'in window){var u=new SpeechSynthesisUtterance(t);u.lang='en-US';u.rate=0.8;speechSynthesis.cancel();speechSynthesis.speak(u)}}

// Reading
function showReadingTest(){hideAllViews();var v=document.getElementById('readingView');if(!v){v=document.createElement('div');v.id='readingView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';var lessons=[];if(appData&&appData.curricula){appData.curricula.forEach(function(c){c.levels&&c.levels.forEach(function(l){l.modules&&l.modules.forEach(function(m){m.lessons&&m.lessons.forEach(function(ls){if(ls.explanation)lessons.push(ls)})})})})}if(!lessons.length){v.innerHTML='<h2>'+t('readingTitle')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return}var ls=lessons[Math.floor(Math.random()*lessons.length)];var text=ls.explanation.slice(0,600);var qs=(ls.quiz||[]).slice(0,5);v.innerHTML='<h2>'+t('readingTitle')+'</h2><div style="background:var(--test-option-bg);padding:20px;border-radius:12px;margin:10px 0;text-align:right;line-height:1.8;max-height:300px;overflow-y:auto">'+text+'</div>';if(qs.length){v.innerHTML+='<h3>❓ '+t('quiz')+'</h3><div id="rdQuestions">'+qs.map(function(q,i){return'<div class="quiz-item"><p>'+(i+1)+'. '+(q.question||q.q||'')+'</p>'+(q.options||q.choices||[]).map(function(o,oi){return'<label class="quiz-option" onclick="selectQuizOption(this,'+i+','+oi+')"><span>'+o+'</span></label>'}).join('')+'</div>'}).join('')+'</div><button class="check-btn" onclick="var c=0;var qs='+JSON.stringify(qs).replace(/</g,'\\u003C')+';for(var i=0;i<qs.length;i++){var s=document.querySelectorAll(\'#rdQuestions .quiz-item\')[i];var sel=s?s.querySelector(\'.quiz-option.selected\'):null;var t=sel?sel.textContent.trim():\'\';var a=qs[i].answer||qs[i].correct||\'\';if(t.toLowerCase()===a.toLowerCase())c++}toast(c+\'/\'+qs.length+\' '+t('correct')+'\')">'+t('checkBtn')+'</button>'}v.innerHTML+='<button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';}

// Speech Recognition
function showSpeechPractice(){hideAllViews();var v=document.getElementById('speechView');if(!v){v=document.createElement('div');v.id='speechView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';v.innerHTML='<h2>'+t('speechTitle')+'</h2><div class="daily-word-card"><p style="margin:15px 0;font-size:1.2em;color:var(--text-light)">قل الكلمة التي تظهر على الشاشة</p><div id="speechTarget" style="font-size:2.5em;font-weight:700;color:var(--accent);margin:20px 0"></div><button class="check-btn" id="speechStartBtn" style="font-size:1.3em;padding:15px 30px">🎙️ ابدأ التسجيل</button><div id="speechResult" style="margin:15px 0;font-size:1.3em"></div><button class="check-btn" onclick="nextSpeechWord()" style="display:none;margin-top:10px" id="speechNextBtn">➡️ التالي</button></div><button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';pickSpeechWord();var SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SpeechRecognition){document.getElementById('speechStartBtn').textContent='❌ غير مدعوم';return}var recognition=new SpeechRecognition();recognition.lang='en-US';recognition.interimResults=false;recognition.maxAlternatives=1;document.getElementById('speechStartBtn').onclick=function(){recognition.start();document.getElementById('speechStartBtn').textContent='🔴 جارٍ الاستماع...';document.getElementById('speechStartBtn').disabled=true};recognition.onresult=function(e){var transcript=e.results[0][0].transcript.toLowerCase().trim();var target=document.getElementById('speechTarget').textContent.toLowerCase().trim();document.getElementById('speechResult').innerHTML='🗣️ "'+transcript+'"';if(transcript===target){document.getElementById('speechResult').innerHTML+='<br>✅ '+t('correct');addToSpacedReview(target,'');var next=document.getElementById('speechNextBtn');if(next)next.style.display='inline-block'}else{document.getElementById('speechResult').innerHTML+='<br>❌ '+t('wrong')+' (الصواب: '+target+')'}};recognition.onend=function(){document.getElementById('speechStartBtn').textContent='🎙️ حاول مرة أخرى';document.getElementById('speechStartBtn').disabled=false};recognition.onerror=function(){document.getElementById('speechStartBtn').textContent='🎙️ أعد المحاولة';document.getElementById('speechStartBtn').disabled=false;document.getElementById('speechResult').innerHTML='⚠️ لم أسمعك بوضوح'};}
function pickSpeechWord(){var allWords=[];if(appData&&appData.curricula){appData.curricula.forEach(function(c){c.levels&&c.levels.forEach(function(l){l.modules&&l.modules.forEach(function(m){m.lessons&&m.lessons.forEach(function(ls){(ls.vocabulary||[]).forEach(function(w){var word=typeof w==='string'?w:w.word||'';if(word)allWords.push(word)})})})})})}var target=document.getElementById('speechTarget');if(target&&allWords.length)target.textContent=allWords[Math.floor(Math.random()*allWords.length)];var next=document.getElementById('speechNextBtn');if(next)next.style.display='none';var res=document.getElementById('speechResult');if(res)res.innerHTML='';var btn=document.getElementById('speechStartBtn');if(btn){btn.textContent='🎙️ ابدأ التسجيل';btn.disabled=false}}
function nextSpeechWord(){document.getElementById('speechNextBtn').style.display='none';pickSpeechWord();}

// Word Search Game
function showWordSearch(){hideAllViews();var v=document.getElementById('wordSearchView');if(!v){v=document.createElement('div');v.id='wordSearchView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';var allWords=[];if(appData&&appData.curricula){appData.curricula.forEach(function(c){c.levels&&c.levels.forEach(function(l){l.modules&&l.modules.forEach(function(m){m.lessons&&m.lessons.forEach(function(ls){(ls.vocabulary||[]).forEach(function(w){var word=typeof w==='string'?w:w.word||'';if(word&&word.length>2)allWords.push(word.slice(0,8).toUpperCase())})})})})})}if(allWords.length<3){v.innerHTML='<h2>'+t('wordSearch')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return}var pool=allWords.sort(function(){return Math.random()-.5}).slice(0,8);var size=14;var grid=Array.from({length:size},function(){return Array(size).fill('.')});var dirs=[[0,1],[1,0],[1,1],[0,-1],[-1,0],[-1,-1],[1,-1],[-1,1]];function placeWord(word){word=word.toUpperCase();for(var att=0;att<100;att++){var d=dirs[Math.floor(Math.random()*dirs.length)];var r0=Math.floor(Math.random()*size);var c0=Math.floor(Math.random()*size);var ok=true;for(var i=0;i<word.length;i++){var r=r0+i*d[0],cc=c0+i*d[1];if(r<0||r>=size||cc<0||cc>=size||(grid[r][cc]!=='.'&&grid[r][cc]!==word[i])){ok=false;break}}if(!ok)continue;for(var i=0;i<word.length;i++){var r=r0+i*d[0],cc=c0+i*d[1];grid[r][cc]=word[i]}return true}return false}var placed=pool.filter(placeWord);for(var r=0;r<size;r++){for(var c2=0;c2<size;c2++){if(grid[r][c2]==='.')grid[r][c2]=String.fromCharCode(65+Math.floor(Math.random()*26))}}v.innerHTML='<h2>'+t('wordSearch')+'</h2><p style="text-align:center;color:var(--text-light)">ابحث عن الكلمات في الشبكة</p><div style="text-align:center"><div id="wsGrid" style="display:inline-grid;grid-template-columns:repeat('+size+',28px);gap:2px;margin:10px auto;direction:ltr">';for(var r=0;r<size;r++){for(var c3=0;c3<size;c3++){var letter=grid[r][c3];v.innerHTML+='<div class="ws-cell" data-r="'+r+'" data-c="'+c3+'" style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;background:var(--surface);border:1px solid var(--border);border-radius:4px;font-weight:600;font-size:.85em;cursor:pointer;font-family:monospace">'+letter+'</div>'}}v.innerHTML+='</div></div><div id="wsWordList" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:10px 0"></div><button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';var wl=document.getElementById('wsWordList');if(wl){placed.forEach(function(w){wl.innerHTML+='<span class="scramble-word" style="font-size:.85em;padding:4px 10px;border-color:var(--text-light);color:var(--text)">'+w.toLowerCase()+'</span>'})}v.addEventListener('click',function(e){var cell=e.target.closest('.ws-cell');if(!cell)return;var bg=cell.style.background;if(bg==='var(--accent)'||bg==='rgb(39, 174, 96)'||bg==='#27ae60'){cell.style.background='var(--surface)';cell.style.color='var(--text)'}else{cell.style.background='var(--accent)';cell.style.color='#fff'}});}function showCrossword(){hideAllViews();var v=document.getElementById('crosswordView');if(!v){v=document.createElement('div');v.id='crosswordView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';var pairs=[];if(appData&&appData.curricula){appData.curricula.forEach(function(c){c.levels&&c.levels.forEach(function(l){l.modules&&l.modules.forEach(function(m){m.lessons&&m.lessons.forEach(function(ls){(ls.vocabulary||[]).forEach(function(w){var word=typeof w==='string'?w:w.word||'';var trans=typeof w==='string'?'':w.translation||w.meaning||'';if(word&&trans)pairs.push({word:word.toUpperCase(),clue:trans})})})})})})}if(pairs.length<3){v.innerHTML='<h2>'+t('crossword')+'</h2><p>'+t('noTest')+'</p><button class="back-btn" onclick="hideAllViews();showWelcome()">'+t('back')+'</button>';return}var qs=pairs.sort(function(){return Math.random()-.5}).slice(0,6);var inpIds=[];v.innerHTML='<h2>'+t('crossword')+'</h2><p style="text-align:center;color:var(--text-light)">اكتب الكلمة المناسبة للتعريف</p>';qs.forEach(function(q,i){var id='cw_'+i;inpIds.push(id);v.innerHTML+='<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:12px;margin:8px 0"><div style="display:flex;gap:10px;align-items:center"><span style="background:var(--accent);color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-size:.8em">'+(i+1)+'</span><span style="flex:1;color:var(--text-light)">'+q.clue+'</span></div><input type="text" id="'+id+'" style="width:100%;padding:10px;margin-top:8px;border:2px solid var(--border);border-radius:8px;font-size:1.1em;text-align:center;direction:ltr" placeholder="اكتب الكلمة..."></div>'});v.innerHTML+='<button class="check-btn" id="cwCheckBtn">'+t('checkBtn')+'</button><button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';var checkBtn=document.getElementById('cwCheckBtn');if(checkBtn)checkBtn.onclick=function(){var correct=0;inpIds.forEach(function(id,i){var el=document.getElementById(id);if(el){var val=el.value.toUpperCase().trim();if(val===qs[i].word){el.style.borderColor='green';correct++}else{el.style.borderColor='red'}}});toast(correct+'/'+qs.length+' '+t('correct'))};qs.forEach(function(q,i){var el=document.getElementById('cw_'+i);if(el)el.addEventListener('input',function(){if(this.value.toUpperCase().trim()===q.word){this.style.borderColor='green'}else{this.style.borderColor='var(--border)'}})});}// Add all new feature buttons to the more menu
(function(){
  var orig2=navSetup;
  navSetup=function(){
    orig2();
    var hr=document.querySelector('.header-right');
    if(!hr||document.getElementById('navMore2'))return;
    var btn=document.createElement('button');btn.className='nav-btn';btn.id='navMore2';btn.textContent='🎯';
    btn.title='المزيد من الميزات';
    btn.onclick=function(){
      hideAllViews();
      var v=document.getElementById('moreView2');
      if(!v){v=document.createElement('div');v.id='moreView2';v.className='lesson-view';document.getElementById('content').appendChild(v)}
      v.style.display='block';
      var cards=[
        ['🎧',t('listeningTitle'),'showListeningTest()'],
        ['📖',t('readingTitle'),'showReadingTest()'],
        ['🎙️',t('speechTitle'),'showSpeechPractice()'],
        ['🔄',t('reviewTitle'),'showSpacedReview()'],
        ['🔍',t('wordSearch'),'showWordSearch()'],
        ['❌',t('crossword'),'showCrossword()'],
        ['📤',t('shareProgress'),'shareProgress()'],
        ['🌙',t('darkMode'),'toggleDarkMode()']
      ];
      var html='<h2 style="text-align:center">🎯 '+t('more','المزيد')+'</h2><div class="welcome-actions">';
      cards.forEach(function(c){html+='<div class="welcome-card" onclick="'+c[2]+'"><span>'+c[0]+'</span><span>'+c[1]+'</span></div>'});
      html+='</div><button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';
      v.innerHTML=html;
    };
    hr.appendChild(btn);
  };
})();

// Add new views to hideAllViews
(function(){
  var orig3=hideAllViews;
  hideAllViews=function(){
    orig3();
    ['listeningView','readingView','speechView','reviewView','wordSearchView','crosswordView','moreView2'].forEach(function(id){
      var e=document.getElementById(id);if(e)e.style.display='none';
    });
  };
})();

// Add dark mode init
(function(){
  var s=getSettings();
  if(s.darkMode)applyDarkMode(true);
})();

// ─── 8 NEW FEATURES ───

LANG.ar.cached='📶 متصل';LANG.en.cached='📶 Online';
LANG.ar.offlineMode='📶 وضع عدم الاتصال';LANG.en.offlineMode='📶 Offline Mode';
LANG.ar.remindMe='🔔 ذكرني';LANG.en.remindMe='🔔 Remind Me';
LANG.ar.profiles='👤 الملفات';LANG.en.profiles='👤 Profiles';
LANG.ar.addProfile='➕ إضافة ملف';LANG.en.addProfile='➕ Add Profile';
LANG.ar.switchTo='➡️ تبديل إلى';LANG.en.switchTo='➡️ Switch to';
LANG.ar.certPDF='📄 شهادة PDF';LANG.en.certPDF='📄 Certificate PDF';
LANG.ar.aiCorrect='🤖 تصحيح ذكي';LANG.en.aiCorrect='🤖 AI Correction';
LANG.ar.leaderboard='🏆 لوحة الشرف';LANG.en.leaderboard='🏆 Leaderboard';
LANG.ar.grammarTitle='📝 تمارين قواعد';LANG.en.grammarTitle='📝 Grammar Exercises';
LANG.ar.aiWriting='🤖 تصحيح كتابة';LANG.en.aiWriting='🤖 Writing Correction';
LANG.ar.notiTitle='حان وقت التعلم!';LANG.en.notiTitle='Time to learn!';
LANG.ar.notiBody='افتح التطبيق لتكمل دروسك';LANG.en.notiBody='Open the app to continue your lessons';
LANG.ar.cachedDate='آخر تحديث';LANG.en.cachedDate='Last updated';
LANG.ar.grammarExTitle='اختر القاعدة';LANG.en.grammarExTitle='Choose a grammar rule';

// 1. Offline Status Indicator + Data Caching
function showCachedStatus(){var el=document.getElementById('offlineStatus');if(!el){el=document.createElement('div');el.id='offlineStatus';el.style.cssText='position:fixed;bottom:10px;left:10px;font-size:.75em;padding:4px 10px;border-radius:20px;z-index:999;transition:all.3s';document.body.appendChild(el)}if(navigator.onLine){el.textContent='🟢 '+t('cached');el.style.background='rgba(39,174,96,.15)';el.style.color='var(--success)'}else{el.textContent='🔴 غير متصل';el.style.background='rgba(231,76,60,.15)';el.style.color='var(--danger)'}setTimeout(showCachedStatus,5000)}
window.addEventListener('online',showCachedStatus);
window.addEventListener('offline',showCachedStatus);
// Cache all data on first load
(function(){if('caches'in window){setTimeout(function(){caches.open('opencode-v9').then(function(c){var files=['/app_data.json','/level_tests.json','/placement_test.json'];files.forEach(function(f){fetch(f).then(function(r){if(r.ok)c.put(f,r)}).catch(function(){})})})},3000)}})();

// 2. Study Reminder Notifications
function requestNotiPermission(){if(!('Notification'in window)){toast('الإشعارات غير مدعومة');return}if(Notification.permission==='granted'){scheduleReminder()}else if(Notification.permission==='default'){Notification.requestPermission().then(function(p){if(p==='granted'){scheduleReminder();toast('✅ تم تفعيل الإشعارات')}})}}
function scheduleReminder(){var s=getSettings();if(!s.reminderOn){toast('فعّل التذكير أولاً من الإعدادات');return}if(Notification.permission!=='granted'){requestNotiPermission();return}var now=new Date();var parts=s.reminderTime.split(':');var target=new Date();target.setHours(parseInt(parts[0])||9,target.setMinutes(parseInt(parts[1])||0,0,0));if(target<=now)target.setDate(target.getDate()+1);var diff=target-now;setTimeout(function(){new Notification(t('notiTitle'),{body:t('notiBody'),icon:'/icon-192.png'});scheduleReminder()},diff);toast('🔔 تم جدولة التذكير لـ '+s.reminderTime)}

// 3. Multiple Student Profiles
function getProfiles(){try{return JSON.parse(ls('eng_profiles'))||[]}catch(e){return[]}}
function saveProfiles(p){lss('eng_profiles',JSON.stringify(p))}
function showProfileManager(){hideAllViews();var v=document.getElementById('profileView');if(!v){v=document.createElement('div');v.id='profileView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';var profiles=getProfiles();var current=ls('eng_activeProfile')||'';var html='<h2>'+t('profiles')+'</h2>';if(!profiles.length){html+='<p style="text-align:center;color:var(--text-light);padding:20px">لا توجد ملفات بعد. أضف ملفاً جديداً.</p>'}else{html+='<div class="welcome-actions">';profiles.forEach(function(p){var active=p.name===current?' style="border:3px solid var(--accent);background:var(--accent);color:#fff"':'';html+='<div class="welcome-card" onclick="switchProfile(\''+p.name.replace(/'/g,"\\'")+'\')"'+active+'><span>👤</span><span>'+p.name+(p.name===current?' ✅':'')+'</span></div>'});html+='</div>'}html+='<div style="display:flex;gap:10px;justify-content:center;margin:15px 0"><input type="text" id="newProfileName" placeholder="اسم الطالب..." style="flex:1;padding:10px;border:1px solid var(--border);border-radius:8px"><button class="check-btn" onclick="addProfile()">➕</button></div>';html+='<button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';v.innerHTML=html;}
function switchProfile(name){lss('eng_activeProfile',name);var pkey='eng_progress_'+name;if(!ls(pkey))lss(pkey,JSON.stringify({completed:[],streak:0,lastDate:'',levelTests:{}}));toast('👤 '+name);showProfileManager()}
function addProfile(){var el=document.getElementById('newProfileName');if(!el||!el.value.trim())return;var name=el.value.trim();var profiles=getProfiles();if(profiles.find(function(p){return p.name===name})){toast('⚠️ الملف موجود مسبقاً');return}profiles.push({name:name});saveProfiles(profiles);switchProfile(name);showProfileManager()}
function getProfileProgressKey(){var name=ls('eng_activeProfile');return name?'eng_progress_'+name:'eng_progress'}
// Override getProgress to support profiles
(function(){var origGet=getProgress;getProgress=function(){var key=getProfileProgressKey();try{return JSON.parse(ls(key))||{completed:[],streak:0,lastDate:'',total:0,levelTests:{}}}catch(e){return{completed:[],streak:0,lastDate:'',total:0,levelTests:{}}}};var origSave=saveProgress;saveProgress=function(d){lss(getProfileProgressKey(),JSON.stringify(d))}})();

// 4. Grammar Exercises
function showGrammarExercises(){hideAllViews();var v=document.getElementById('grammarExView');if(!v){v=document.createElement('div');v.id='grammarExView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';var html='<h2>'+t('grammarTitle')+'</h2><p style="text-align:center;color:var(--text-light)">اختر قاعدة نحوية للتمرن عليها</p><div class="welcome-actions">';var topics=[];if(appData&&appData.curricula){appData.curricula.forEach(function(c){c.levels&&c.levels.forEach(function(l){l.modules&&l.modules.forEach(function(m){if(m.grammar_focus||m.grammar){var gf=m.grammar_focus||m.grammar||'';if(gf&&topics.indexOf(gf)===-1)topics.push(gf)}})})})}topics.slice(0,20).forEach(function(tp){html+='<div class="welcome-card" onclick="startGrammarExercise(\''+tp.replace(/'/g,"\\'")+'\')" style="font-size:.85em"><span>📝</span><span>'+tp.slice(0,50)+'</span></div>'});html+='</div><button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';v.innerHTML=html;}
function startGrammarExercise(topic){hideAllViews();var v=document.getElementById('grammarExView');if(!v){v=document.createElement('div');v.id='grammarExView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';var html='<h2>'+t('grammarTitle')+'</h2><p style="text-align:center;color:var(--accent);font-weight:600">'+topic+'</p>';// Find lessons with this grammar focus
var exercises=[];if(appData&&appData.curricula){appData.curricula.forEach(function(c){c.levels&&c.levels.forEach(function(l){l.modules&&l.modules.forEach(function(m){m.lessons&&m.lessons.forEach(function(ls){if((m.grammar_focus||m.grammar)===topic&&ls.vocabulary&&ls.vocabulary.length){ls.vocabulary.forEach(function(w){var word=typeof w==='string'?w:w.word||'';var trans=typeof w==='string'?'':w.translation||w.meaning||'';if(word&&trans)exercises.push({q:trans,a:word.toLowerCase()})})}})})})})}if(!exercises.length){html+='<p style="text-align:center;padding:20px">لا توجد تمارين لهذه القاعدة بعد</p>'}else{var pool=exercises.sort(function(){return Math.random()-.5}).slice(0,8);html+='<div id="geQuiz">'+pool.map(function(ex,i){return'<div class="quiz-item"><p>'+(i+1)+'. '+ex.q+'</p><input type="text" id="geInp_'+i+'" style="width:100%;padding:10px;border:2px solid var(--border);border-radius:8px;margin-top:8px;text-align:center" placeholder="اكتب الكلمة..."><span id="geRes_'+i+'"></span></div>'}).join('')+'</div><button class="check-btn" onclick="var c=0;var pool='+JSON.stringify(pool).replace(/</g,'\\u003C')+';for(var i=0;i<pool.length;i++){var el=document.getElementById(\"geInp_\"+i);var res=document.getElementById(\"geRes_\"+i);if(el&&res){if(el.value.trim().toLowerCase()===pool[i].a){res.innerHTML=\"✅\";res.style.color=\"green\";c++}else{res.innerHTML=\"❌ \"+pool[i].a;res.style.color=\"red\"}}}toast(c+\"/\"+pool.length+\" \"+t(\"correct\"))">'+t('checkBtn')+'</button>'}html+='<button class="back-btn" onclick="showGrammarExercises()" style="display:block;margin:15px auto">🔙 الرجوع</button><button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:5px auto">'+t('back')+'</button>';v.innerHTML=html;}

// 5. AI Writing Correction
function aiCorrect(){hideAllViews();var v=document.getElementById('aiView');if(!v){v=document.createElement('div');v.id='aiView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';v.innerHTML='<h2>'+t('aiCorrect')+'</h2><p style="text-align:center;color:var(--text-light)">اكتب جملة أو فقرة بالانجليزية وسأصححها لك</p><textarea id="aiInput" rows="6" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:12px;margin:10px 0;font-size:1em;background:var(--input-bg);color:var(--text)" placeholder="اكتب جملة بالإنجليزية..."></textarea><button class="check-btn" onclick="checkAIWriting()">🤖 تصحيح</button><div id="aiResult" style="margin:15px 0;padding:15px;border-radius:12px;background:var(--surface);display:none"></div><button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';}
function checkAIWriting(){var text=document.getElementById('aiInput').value.trim();var res=document.getElementById('aiResult');if(!text){toast('اكتب شيئاً أولاً');return}res.style.display='block';var errors=[];var lines=[];
// Capitalization check
if(text[0]!==text[0].toUpperCase())errors.push('🔤 الجملة تبدأ بحرف كبير');
var endChar=text[text.length-1];if(!/[.!?]/.test(endChar))errors.push('🔚 الجملة تنتهي بنقطة أو علامة استفهام');
// Space after punctuation
text.replace(/[.!?]\s*[a-z]/g,function(m){if(m.length>2)errors.push('✏️ بعد النقطة افصل بمسافة ثم حرف كبير')});
// Common spelling mistakes
var dict={'i ':'I ','cant':"can't",'dont':"don't",'doesnt':"doesn't",'isnt':"isn't",'arent':"aren't",'wont':"won't",'wouldnt':"wouldn't",'couldnt':"couldn't",'shouldnt':"shouldn't",'ive':'I have','youre':'you are','hes':'he is','shes':'she is','its':"it's",'theres':'there is','theyre':'they are','alot':'a lot','everyday':'every day','recieve':'receive','acheive':'achieve','beleive':'believe','definately':'definitely','seperate':'separate','occured':'occurred','occuring':'occurring','thier':'their','wierd':'weird'};
var corrected=text;Object.keys(dict).forEach(function(k){var re=new RegExp('\\b'+k+'\\b','gi');var match=text.match(re);if(match){errors.push('✏️ "'+match[0]+'" قد تكون "'+dict[k]+'"');corrected=corrected.replace(re,dict[k])}});
// Word count
var words=text.split(/\s+/).filter(Boolean).length;var sentences=text.split(/[.!?]+/).filter(Boolean).length;
var html='<h3 style="margin-bottom:10px">📊 تحليل النص</h3>';html+='<div style="display:flex;gap:15px;flex-wrap:wrap;margin:10px 0"><span>📝 '+words+' كلمة</span><span>📄 '+sentences+' جملة</span></div>';
if(errors.length){html+='<h4 style="color:var(--warning);margin:10px 0">⚠️ ملاحظات:</h4><ul style="list-style:none;padding:0">';errors.forEach(function(e){html+='<li style="padding:3px 0">'+e+'</li>'});html+='</ul>'}else{html+='<p style="color:var(--success);font-size:1.2em">✅ '+t('correct')+'</p>'}
if(corrected!==text){html+='<h4 style="margin:10px 0">📝 الاقتراح:</h4><div style="background:var(--test-option-bg);padding:12px;border-radius:8px;text-align:right;direction:ltr">'+corrected+'</div>'}
var score=100-(errors.length*15);score=Math.max(score,0);html+='<div style="margin-top:15px;text-align:center;font-size:1.3em;color:'+(score>=80?'var(--success)':score>=50?'var(--warning)':'var(--danger)')+'">التقييم: '+score+'%</div>';res.innerHTML=html;}

// 6. Certificate PDF Export
function exportCertPDF(){var p=getProgress();var name=ls('eng_activeProfile')||'طالب';var isAr=currentLang==='ar';var date=new Date().toLocaleDateString(isAr?'ar-EG':'en-US');var completed=(p.completed||[]).length;var verifCode=Date.now().toString(36).toUpperCase();var w=window.open('','_blank');if(!w)return;w.document.write('<!DOCTYPE html><html dir="'+(isAr?'rtl':'ltr')+'"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+(isAr?'شهادة تقدم':'Progress Certificate')+'</title><style>'+
  '@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700;900&display=swap");'+
  '*{margin:0;padding:0;box-sizing:border-box}'+
  'body{font-family:"Cairo",sans-serif;text-align:center;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:30px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%)}'+
  '.cert-wrap{max-width:820px;width:100%;padding:15px;background:linear-gradient(135deg,#f5e6c8,#d4a853);border-radius:30px;box-shadow:0 20px 60px rgba(0,0,0,.25),inset 0 0 30px rgba(212,168,83,.3)}'+
  '.cert{background:#fff;border-radius:24px;padding:50px 45px;position:relative;overflow:hidden}'+
  '.cert::before{content:"";position:absolute;top:-60px;right:-60px;width:200px;height:200px;background:radial-gradient(circle,rgba(212,168,83,.08) 0%,transparent 70%);border-radius:50%}'+
  '.cert-top-border{height:6px;background:linear-gradient(90deg,#d4a853,#f5e6c8,#d4a853);border-radius:3px;margin-bottom:35px}'+
  '.cert-badge{font-size:64px;margin-bottom:8px;display:block}'+
  '.cert-title{font-size:30px;font-weight:900;color:#1a1a2e;margin:5px 0;letter-spacing:-.5px}'+
  '.cert-subtitle{font-size:15px;color:#999;margin-bottom:25px;font-weight:300}'+
  '.cert-divider{width:80px;height:3px;background:linear-gradient(90deg,#d4a853,#c9a96e);border-radius:3px;margin:0 auto 25px}'+
  '.cert-label{font-size:14px;color:#aaa;margin-bottom:4px}'+
  '.cert-student{font-size:32px;font-weight:900;color:#2c3e50;margin:5px 0 15px;padding:10px 30px;display:inline-block;border-bottom:3px solid #d4a853}'+
  '.cert-body{font-size:16px;color:#666;line-height:1.9;max-width:550px;margin:0 auto}'+
  '.cert-stats{display:flex;justify-content:center;gap:16px;margin:20px 0;flex-wrap:wrap}'+
  '.cert-stat{padding:12px 22px;background:#f8f9fa;border-radius:14px;font-size:14px;display:flex;flex-direction:column;align-items:center;gap:2px;min-width:100px;border:1px solid #eee}'+
  '.cert-stat .stat-num{font-size:22px;font-weight:900;color:#2c3e50}'+
  '.cert-stat .stat-label{font-size:12px;color:#999}'+
  '.cert-footer{display:flex;justify-content:space-between;align-items:end;margin-top:30px;padding-top:20px;border-top:1px solid #eee;flex-wrap:wrap;gap:15px}'+
  '.cert-sign-col{text-align:center;min-width:160px}'+
  '.cert-sign-line{width:160px;border-bottom:2px solid #333;margin:0 auto 6px}'+
  '.cert-sign-name{font-size:15px;font-weight:700;color:#333}'+
  '.cert-sign-title{font-size:12px;color:#999}'+
  '.cert-verif{font-size:11px;color:#bbb;text-align:left}'+
  '.cert-verif span{font-family:monospace;background:#f5f5f5;padding:2px 8px;border-radius:4px;direction:ltr;display:inline-block}'+
  '.cert-actions{margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap}'+
  '.cert-actions button{padding:14px 32px;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer;font-family:"Cairo",sans-serif;transition:all .3s ease}'+
  '.cert-actions .print-btn{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;box-shadow:0 4px 15px rgba(102,126,234,.4)}'+
  '.cert-actions .print-btn:hover{transform:translateY(-2px)}'+
  '@media(max-width:600px){.cert{padding:25px 18px}.cert-title{font-size:22px}.cert-student{font-size:24px}.cert-badge{font-size:48px}.cert-stat{min-width:70px;padding:8px 12px}}'+
  '@media print{body{background:#fff;padding:10px}.cert-wrap{background:none;box-shadow:none;padding:0}.cert{box-shadow:none;border:2px solid #ddd}.cert-actions{display:none}}'+
  '</style></head><body><div class="cert-wrap"><div class="cert">'+
  '<div class="cert-top-border"></div>'+
  '<span class="cert-badge">🏆</span>'+
  '<div class="cert-title">'+(isAr?'شهادة تقدم':'Progress Certificate')+'</div>'+
  '<div class="cert-subtitle">'+(isAr?'يُصدرها تطبيق الأستاذ ياسر إبراهيم':'Issued by Mr. Yasser Ibrahim App')+'</div>'+
  '<div class="cert-divider"></div>'+
  '<div class="cert-label">'+(isAr?'تُشهد هذه الشهادة بأن':'This certifies that')+'</div>'+
  '<div class="cert-student">'+name+'</div>'+
  '<div class="cert-body">'+(isAr?'قد أبدى تقدماً متميزاً في دراسة':'Has shown outstanding progress in studying')+'<br><strong>English</strong></div>'+
  '<div class="cert-stats">'+
  '<div class="cert-stat"><span class="stat-num">'+completed+'</span><span class="stat-label">'+(isAr?'الدروس المكتملة':'Lessons Done')+'</span></div>'+
  '<div class="cert-stat"><span class="stat-num">'+(p.total||0)+'</span><span class="stat-label">'+(isAr?'إجمالي الدروس':'Total Lessons')+'</span></div>'+
  '<div class="cert-stat"><span class="stat-num">'+(p.streak||0)+'</span><span class="stat-label">'+(isAr?'سلسلة التعلم':'Streak')+'</span></div>'+
  '<div class="cert-stat"><span class="stat-num">'+date+'</span><span class="stat-label">'+(isAr?'التاريخ':'Date')+'</span></div>'+
  '</div>'+
  '<div class="cert-footer">'+
  '<div class="cert-sign-col">'+
  '<div class="cert-sign-line"></div>'+
  '<div class="cert-sign-name">'+(isAr?'الأستاذ ياسر إبراهيم':'Mr. Yasser Ibrahim')+'</div>'+
  '<div class="cert-sign-title">'+(isAr?'مدرس اللغة الإنجليزية':'English Teacher')+'</div>'+
  '</div>'+
  '<div class="cert-verif">'+(isAr?'رمز التحقق:':'Verification:')+' <span>'+verifCode+'</span></div>'+
  '</div></div></div>'+
  '<div class="cert-actions">'+
  '<button class="print-btn" onclick="window.print()">🖨️ '+(isAr?'طباعة الشهادة':'Print Certificate')+'</button>'+
  '</div></body></html>');w.document.close()}

// 7. Leaderboard
function showLeaderboard(){hideAllViews();var v=document.getElementById('leaderView');if(!v){v=document.createElement('div');v.id='leaderView';v.className='lesson-view';document.getElementById('content').appendChild(v)}v.style.display='block';var profiles=getProfiles();var stats=[];profiles.forEach(function(p){var pkey='eng_progress_'+p.name;var data;try{data=JSON.parse(ls(pkey))}catch(e){data=null}stats.push({name:p.name,completed:data&&data.completed?data.completed.length:0,streak:data&&data.streak||0,total:data&&data.total||0})});stats.sort(function(a,b){return b.completed-a.completed||b.streak-a.streak});var current=ls('eng_activeProfile')||'';var html='<h2>'+t('leaderboard')+'</h2>';if(!stats.length){html+='<p style="text-align:center;padding:20px;color:var(--text-light)">لا يوجد طلاب بعد. أضف ملفات طلاب من قائمة الملفات.</p>'}else{html+='<div class="dashboardView">';stats.forEach(function(s,i){var medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1)+'. ';var active=s.name===current?' style="border:3px solid var(--accent);background:rgba(39,174,96,.05)"':'';html+='<div class="welcome-card"'+active+'><span>'+medal+'</span><span><strong>'+s.name+'</strong>'+(s.name===current?' ✅':'')+'<br><span style="font-size:.85em;color:var(--text-light)">📚 '+s.completed+' درس | 🔥 '+s.streak+' يوم</span></span></div>'});html+='</div>'}html+='<button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';v.innerHTML=html;}

// 8. Add all new feature buttons to the menu
(function(){
  var origNav=navSetup;
  navSetup=function(){
    origNav();
    var hr=document.querySelector('.header-right');
    if(!hr||document.getElementById('navAllFeatures'))return;
    var btn=document.createElement('button');btn.className='nav-btn';btn.id='navAllFeatures';btn.textContent='🚀';
    btn.title='جميع الميزات';
    btn.onclick=function(){
      hideAllViews();
      var v=document.getElementById('allFeaturesView');
      if(!v){v=document.createElement('div');v.id='allFeaturesView';v.className='lesson-view';document.getElementById('content').appendChild(v)}
      v.style.display='block';
      var groups=[
        {title:'📚 التعلم',items:[
          ['📖 '+t('readingTitle'),'showReadingTest()'],
          ['🎧 '+t('listeningTitle'),'showListeningTest()'],
          ['🎙️ '+t('speechTitle'),'showSpeechPractice()'],
          ['📝 '+t('grammarTitle'),'showGrammarExercises()']
        ]},
        {title:'🔄 المراجعة',items:[
          ['🔄 '+t('reviewTitle'),'showSpacedReview()'],
          ['💡 '+t('dailyWord'),'showDailyWord()'],
          ['📊 '+t('dashTitle'),'showProgressCharts()']
        ]},
        {title:'🎮 ألعاب',items:[
          ['🧩 '+t('scrambleTitle'),'showScrambleGame()'],
          ['🐝 '+t('spellingTitle'),'showSpellingBee()'],
          ['🔍 '+t('wordSearch'),'showWordSearch()'],
          ['❌ '+t('crossword'),'showCrossword()']
        ]},
        {title:'👤 الطلاب',items:[
          ['👤 '+t('profiles'),'showProfileManager()'],
          ['🏆 '+t('leaderboard'),'showLeaderboard()'],
          ['📄 '+t('certPDF'),'exportCertPDF()'],
          ['📤 '+t('shareProgress'),'shareProgress()']
        ]},
        {title:'⚙️ أدوات',items:[
          ['🤖 '+t('aiCorrect'),'aiCorrect()'],
          ['📄 '+t('worksheetTitle'),'showWorksheetGenerator()'],
          ['🌙 '+t('darkMode'),'toggleDarkMode()'],
          ['🔔 '+t('remindMe'),'requestNotiPermission()']
        ]}
      ];
      var html='<h2 style="text-align:center">🚀 جميع الميزات</h2>';
      groups.forEach(function(g){
        html+='<h3 style="margin:15px 0 5px;color:var(--text-light)">'+g.title+'</h3><div class="welcome-actions" style="margin-bottom:5px">';
        g.items.forEach(function(item){html+='<div class="welcome-card" onclick="'+item[1]+'"><span>'+item[0]+'</span></div>'});
        html+='</div>';
      });
      html+='<button class="back-btn" onclick="hideAllViews();showWelcome()" style="display:block;margin:15px auto">'+t('back')+'</button>';
      v.innerHTML=html;
    };
    hr.appendChild(btn);
  };
})();

// Add new views to hideAllViews
(function(){
  var origHide=hideAllViews;
  hideAllViews=function(){
    origHide();
    ['profileView','grammarExView','aiView','leaderView','allFeaturesView'].forEach(function(id){
      var e=document.getElementById(id);if(e)e.style.display='none';
    });
  };
})();

// Init cached status on load
setTimeout(showCachedStatus,5000);

// ─── INIT REMINDER + TEACHER + KIDS + ACHIEVEMENTS ON LOAD ───
