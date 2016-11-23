`
/* description: Parses and executes mathematical expressions. */
%{
    var path = require('path');
    var NumberNode = require(path.resolve('.//src/numberNode.js'))
    var OperatorNode = require(path.resolve('./src/operatorNode.js'))
%}

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"-"                   return '-'
"+"                   return '+'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '+' '-'
%right '%'

%start expressions

%% /* language grammar */

expressions
    : e EOF
        {
            return $$;
        }
    ;

e
    : e '+' e
        {$$ = new OperatorNode($2,$1,$3); }
    | e '-' e
        {$$ = new OperatorNode($2,$1,$3); }
    | NUMBER
        {$$ = new NumberNode(yytext);}
    ;

