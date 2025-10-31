export class CreateAuthorDTO {

    name : string;
    bio : string;
    socials : string;
}

export interface CreateAuthorRequest {

    author_name : string,
    author_bio : string,
    author_signature : string,
    author_socials : string

    
}