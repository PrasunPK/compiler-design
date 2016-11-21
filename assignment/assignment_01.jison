
/* description: Parses and executes mathematical expressions. */
%{
    var treeParser = require("./src/parser.js");
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
            console.log(treeParser.parse($1));
        }
    ;

e
    : e '+' e
        {$$ = {parent : $2, leftChild : $1, rightChild : $3};}
    | e '-' e
        {$$ = {parent : $2, leftChild : $1, rightChild : $3};}
    | NUMBER
        {$$ = Number(yytext);}
    ;

