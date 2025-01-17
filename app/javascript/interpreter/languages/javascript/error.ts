export type SyntaxErrorType =
  | 'UnknownCharacter'
  | 'MissingDoubleQuoteToStartString'
  | 'MissingDoubleQuoteToTerminateString'
  | 'MissingFieldNameOrIndexAfterLeftBracket'
  | 'MissingRightParenthesisAfterExpression'
  | 'MissingRightBraceToTerminatePlaceholder'
  | 'MissingBacktickToTerminateTemplateLiteral'
  | 'MissingExpression'
  | 'InvalidAssignmentTarget'
  | 'ExceededMaximumNumberOfParameters'
  | 'MissingEndOfLine'
  | 'MissingFunctionName'
  | 'MissingLeftParenthesisAfterFunctionName'
  | 'MissingLeftParenthesisAfterFunctionCall'
  | 'MissingParameterName'
  | 'MissingRightParenthesisAfterParameters'
  | 'MissingLeftBraceToStartFunctionBody'
  | 'MissingLeftBraceToStartWhileBody'
  | 'MissingLeftParenthesisAfterWhile'
  | 'MissingRightParenthesisAfterWhileCondition'
  | 'MissingLeftBraceToStartDoWhileBody'
  | 'MissingWhileBeforeDoWhileCondition'
  | 'MissingLeftParenthesisAfterDoWhile'
  | 'MissingRightParenthesisAfterDoWhileCondition'
  | 'MissingLeftBraceToStartRepeatBody'
  | 'MissingVariableName'
  | 'MissingConstantName'
  | 'MissingEqualsSignAfterVariableNameToInitializeValue'
  | 'MissingEqualsSignAfterConstantNameToInitializeValue'
  | 'MissingLeftParenthesisBeforeIfCondition'
  | 'MissingRightParenthesisAfterIfCondition'
  | 'MissingLeftBraceToStartFunctionBody'
  | 'MissingLeftBraceToStartFunctionBody'
  | 'MissingLeftBraceToStartIfBody'
  | 'MissingLeftBraceToStartElseBody'
  | 'MissingDoAfterRepeatStatementCondition'
  | 'MissingDoAfterWhileStatementCondition'
  | 'MissingLeftParenthesisAfterForeach'
  | 'MissingLetInForeachCondition'
  | 'MissingElementNameAfterForeach'
  | 'MissingOfAfterElementNameInForeach'
  | 'MissingRightParenthesisAfterForeachElement'
  | 'MissingLeftBraceToStartForeachBody'
  | 'MissingRightBraceAfterBlock'
  | 'MissingRightBracketAfterFieldNameOrIndex'
  | 'MissingRightParenthesisAfterFunctionCall'
  | 'MissingRightParenthesisAfterExpression'
  | 'MissingRightBracketAfterListElements'
  | 'MissingRightBraceAfterMapElements'
  | 'MissingStringAsKey'
  | 'MissingColonAfterKey'
  | 'MissingFieldNameOrIndexAfterOpeningBracket'
  | 'InvalidTemplateLiteral'
  | 'MissingColonAfterThenBranchOfTernaryOperator'
  | 'NumberWithMultipleDecimalPoints'
